import "./SignIn.css";
import { useState } from "react";
import { Form, Link, useLocation } from "react-router-dom";
import img from "../../assets/Images/authImages/authentication.png";
import login from "../../assets/Images/authImages/authentication2.png";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

const SignIn = () => {
  // Show password section
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!email) {
      alert("Please fill the email field");
      setLoading(false);
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      setLoading(false);
    } else if (!password) {
      alert("Please fill the password field");
      setLoading(false);
    } else if (!passwordPattern.test(password)) {
      alert(
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number"
      );
      setLoading(false);
    } else {
      e.target.email.value = "";
      e.target.password.value = "";
    }
  };

  return (
    <div
      className="bg-cover bg-center w-full h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="flex items-center justify-center h-[410px] w-[800px] bg-cover bg-center shadow-xl"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="w-full h-full bg-transparent flex justify-between items-center p-5">
          <div className="bg-transparent">
            <img className="w-full" src={login} alt="" />
          </div>
          <div className="flex flex-col w-[390px] m-auto">
            <div className="space-y-4">
              {error ? (
                <p className="text-center text-red-600 text-[15px] font-mono mt-3">
                  {error}
                </p>
              ) : (
                <h4 className="text-center text-[20px] font-mono mt-3 animate-ping">
                  Login
                </h4>
              )}

              <Form onSubmit={handleFormSubmit}>
                <div className="flex flex-col mt-5">
                  <label htmlFor="email" className="text-[17px] font-sans mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    className="p-2 rounded bg-white mt-1 border-none outline-none"
                  />
                </div>

                <div className="flex flex-col mt-5">
                  <label
                    htmlFor="password"
                    className="text-[17px] font-sans mb-1"
                  >
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter Your Password"
                      required
                      className="p-2 rounded bg-white mt-1 border-none w-full outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleClickShowPassword}
                      className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-600"
                    >
                      {showPassword ? <MdVisibilityOff size={22} /> : <MdVisibility size={22} />}
                    </button>
                  </div>
                </div>

                <p className="text-[13px] font-semibold mt-2">
                  Are You New? Please{" "}
                  <Link
                    to="/SignUp"
                    className="text-teal-500 text-[14px] hover:underline"
                  >
                    Registration
                  </Link>
                </p>

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
                      "Login"
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

export default SignIn;
