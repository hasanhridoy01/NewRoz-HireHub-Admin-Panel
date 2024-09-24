import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import "./ForgetPassword.css";
import { FaArrowLeft } from "react-icons/fa";

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //handleBack 
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="bg-cover bg-center w-full h-screen flex items-center justify-center">
      <div className="flex items-center justify-center h-[245px] w-[420px] bg-slate-300 bg-center shadow rounded-lg">
        <div className="w-full h-full bg-transparent flex justify-between items-center p-5">
          <div className="flex flex-col w-[390px] m-auto">
            <div className="space-y-4">
              <h4 className="text-left text-[20px] font-mono mt-2 flex items-center gap-2.5">
              <FaArrowLeft onClick={handleBack} style={{ cursor: 'pointer' }} /> Forgot Password
              </h4>
              <Form>
                <div className="flex flex-col mt-3">
                  <label htmlFor="email" className="text-[17px] font-sans mb-1">
                    Email
                  </label>
                  {/* Wrapping the input and icon in a flex container for alignment */}
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      className="p-2 rounded bg-white mt-1 border-none outline-none w-full pl-10" // Add padding-left for space
                    />
                    {/* Position the icon absolutely to the left inside the input */}
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
