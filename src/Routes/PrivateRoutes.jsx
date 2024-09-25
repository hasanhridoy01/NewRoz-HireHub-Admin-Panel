import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PrivateRoutes = ({ children }) => {
  const { loading, isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <AiOutlineLoading3Quarters size={50} className="animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    // Render children components if authenticated
    return children;
  }

  // Redirect to login page if not authenticated
  return <Navigate to="/login" state={{ from: location }} replace />;
};

// Assign PropTypes to this component
PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
