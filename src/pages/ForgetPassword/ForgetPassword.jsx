import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import toast from "react-hot-toast";
import "./ForgetPassword.css";
import { TbPasswordMobilePhone } from "react-icons/tb";

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex for validation

    setLoading(true);

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.", {
        style: { backgroundColor: "crimson", color: "#fff" },
      });
      setLoading(false);
      return;
    }

    // Simulate success response for password reset
    toast.success("Reset link sent successfully!", {
      style: { backgroundColor: "green", color: "#fff" },
    });

    // Reset form fields
    e.target.reset();
    setLoading(false);
  };

  return (
    <div className="bg-cover bg-center w-full h-screen flex items-center justify-center">
      <div className="flex items-center justify-center h-[245px] w-[420px] bg-slate-300 bg-center shadow rounded-lg">
        <div className="w-full h-full bg-transparent flex justify-between items-center p-5">
          <div className="flex flex-col w-[390px] m-auto">
            <div className="space-y-4">
              <h4 className="text-left text-[20px] font-mono mt-2 flex items-center gap-7">
                <FaArrowLeft
                  onClick={handleBack}
                  style={{ cursor: "pointer" }}
                />{" "}
                <span className="flex items-center justify-center gap-1.5 animate-bounce">
                  <TbPasswordMobilePhone /> Forgot Password
                </span>
              </h4>
              <Form onSubmit={handleSubmit}>
                <div className="flex flex-col mt-3">
                  <label htmlFor="email" className="text-[17px] font-sans mb-1">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      className="p-2 rounded bg-white mt-1 border-none outline-none w-full pl-10"
                    />
                    <CiMail
                      size={22}
                      className="absolute left-3 top-3 text-gray-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`p-2.5 bg-teal-500 text-white rounded-lg shadow-md hover:bg-[crimson] hover:text-[white] ${
                      loading ? "cursor-not-allowed opacity-70" : ""
                    }`}
                  >
                    {loading ? (
                      <span className="spinner-border text-white h-5 w-5 inline-block"></span>
                    ) : (
                      "Send Reset Link"
                    )}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
