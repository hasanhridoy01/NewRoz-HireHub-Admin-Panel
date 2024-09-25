import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// Create context for the authentication
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const queryClient = useQueryClient();

  useEffect(() => {
    // Check if the JWT token exists in localStorage to determine if the user is logged in
    const token = localStorage.getItem("Authorization");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Mutation for logging in the user
  const mutation = useMutation({
    mutationFn: async (loginUser) => {
      // Make the request using axios
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
        console.log("Token stored:", token);
      }

      return response;
    },
    onSuccess: (response) => {
      if (response.status === 200) {
        // Invalidate relevant queries
        queryClient.invalidateQueries("login");

        // Success message
        toast.success("User SignIn Successfully", {
          style: { backgroundColor: "green", color: "#fff" },
        });

        // Redirect after successful login
        window.location.href = "/";
      }
    },
    onError: (error) => {
      // Handle login errors
      const errorMsg =
        error?.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMsg, {
        style: { backgroundColor: "crimson", color: "#fff" },
      });
    },
  });

  // Logout function
  const logout = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem("Authorization");
    setIsAuthenticated(false); // Set user as not authenticated

    // Optional: Invalidate any queries related to user data
    queryClient.invalidateQueries("userData");

    // Success message
    toast.success("Logged out successfully", {
      style: { backgroundColor: "green", color: "#fff" },
    });

    // Redirect to the login page or homepage after logout
    window.location.href = "/SingIn";
  };

  // Send value to context
  const contextInfo = {
    mutation,
    logout, 
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
