import "./ChangePassword.css";

const ChangePassword = () => {
  return (
    <div className="h-screen overflow-hidden">
      <form className="w-full mt-10 h-screen overflow-hidden">
        <h4 className="border-b-2 pb-2 text-2xl text-center">
          Change Password
        </h4>
        <div className="grid grid-cols-12 pt-4 gap-5">
          <div className="col-span-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="oldPassword"
            >
              Old Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="oldPassword"
              type="password"
              placeholder="Old Password"
              required
            />
          </div>
          <div className="col-span-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="newPassword"
              type="password"
              placeholder="New Password"
              required
            />
          </div>
          <div className="col-span-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm New Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="confirmPassword"
              type="password"
              placeholder="Confirm New Password"
              required
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
