import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// Create context for the authentication
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); 
  const queryClient = useQueryClient();

  // Check if the JWT token exists in localStorage to determine if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem("Authorization");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false); // Stop loading once the check is complete
  }, []);

  // Mutation for logging in the user
  const mutation = useMutation({
    mutationFn: async (loginUser) => {
      setLoading(true); 
      const response = await axios.post(
        "http://localhost:8081/login",
        loginUser,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Store JWT token in localStorage
      const token = response.headers["authorization"];
      if (token) {
        localStorage.setItem("Authorization", token);
        setIsAuthenticated(true);
      }

      return response;
    },
    onSuccess: (response) => {
      if (response.status === 200) {
        queryClient.invalidateQueries("login");

        toast.success("User SignIn Successfully", {
          style: { backgroundColor: "green", color: "#fff" },
        });

        window.location.href = "/"; // Redirect after successful login
      }
      setLoading(false);
    },
    onError: (error) => {
      const errorMsg =
        error?.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMsg, {
        style: { backgroundColor: "crimson", color: "#fff" },
      });
      setLoading(false);
    },
  });

  // Logout function
  const logout = () => {
    localStorage.removeItem("Authorization");
    setIsAuthenticated(false);
    queryClient.invalidateQueries("userData");

    toast.success("Logged out successfully", {
      style: { backgroundColor: "green", color: "#fff" },
    });

    window.location.href = "/login"; // Redirect after logout
  };

  // Send value to context
  const contextInfo = {
    mutation,
    logout,
    loading,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextInfo}>{children}</AuthContext.Provider>
  );
};

// Assign PropTypes to the AuthProvider component
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
