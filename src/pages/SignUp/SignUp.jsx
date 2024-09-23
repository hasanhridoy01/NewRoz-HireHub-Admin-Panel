import { useState } from "react";
import { Form, Link } from "react-router-dom";
import img from "../../assets/Images/authImages/authentication.png";
import login from "../../assets/Images/authImages/authentication2.png";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!name || !emailPattern.test(email) || !passwordPattern.test(password)) {
      alert("Please check your input.");
      setLoading(false);
      return;
    }
  };

  return (
    <div>
      <div
        className="bg-cover bg-center w-full h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div
          className="w-[800px] h-[522px] flex items-center justify-center shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="w-full h-full flex justify-between p-5">
            <div className="flex flex-col w-[300px] m-auto">
              <h4 className="text-center text-[20px] font-mono mb-5">SignUp</h4>

              {error && <p className="text-red-500 text-center">{error}</p>}

              <Form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[17px] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-[17px] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-[17px] mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter Your Password"
                      required
                      className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleClickShowPassword}
                      className="absolute inset-y-0 right-0 flex items-center px-3"
                    >
                      {showPassword ? (
                        <MdVisibilityOff size={22} />
                      ) : (
                        <MdVisibility size={22} />
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-sm font-medium mt-2">
                  Do You Have an Account?{" "}
                  <Link to="/SingIn" className="text-teal-500 hover:underline">
                    Login
                  </Link>
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-[crimson] hover:text-[white] ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  } mt-4`}
                >
                  {loading ? "Loading..." : "Register"}
                </button>
              </Form>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={login}
                alt="login illustration"
                className="h-[300px] w-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
