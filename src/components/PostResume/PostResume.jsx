import { useState } from "react";
import "./PostResume.css";

const PostResume = ({ setIsResumeUploaded }) => {
  const [educations, setEducations] = useState([{ id: Date.now() }]); // Default education div
  const [workExperiences, setWorkExperiences] = useState([{ id: Date.now() }]); // Default work div
  const [hideEnd, setHideEnd] = useState(false);

  const handleHideEndDate = () => {
    setHideEnd((prev) => !prev); // Toggle the state
  };

  const addEducation = () => {
    setEducations([...educations, { id: Date.now() }]);
  };

  const deleteEducation = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, { id: Date.now() }]);
  };

  const deleteWorkExperience = (id) => {
    setWorkExperiences(workExperiences.filter((work) => work.id !== id));
  };

  //handlePostResume
  const handlePostResume = () => {
    setIsResumeUploaded(false);  
  };

  return (
    <div className="overflow-y-hidden">
      <form className="w-full mt-10">
        <h4 className="border-b-2 pb-2 text-2xl">Contact Details</h4>
        <div className="grid grid-cols-2 pt-4 gap-5">
          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="col-span-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Postal Code
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Postal Code"
            />
          </div>

          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="city-select"
            >
              City
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="city-select"
            >
              <option value="" disabled selected>
                Select City
              </option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="San Francisco">San Francisco</option>
            </select>
          </div>

          <div className="col-span-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="country-select"
            >
              Country
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="country-select"
            >
              <option value="" disabled selected>
                Select Country
              </option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        {/* Education Section */}
        <h4 className="border-b-2 pb-2 text-2xl mt-8">Education</h4>
        {educations.map((edu, index) => (
          <div
            key={edu.id}
            className="grid grid-cols-2 pt-4 gap-5 border-b-2 pb-4 mb-4"
          >
            <div className="col-span-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={`university-${edu.id}`}
              >
                University
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={`university-${edu.id}`}
                type="text"
                placeholder="University"
              />
            </div>
            <div className="col-span-1">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={`major-${edu.id}`}
              >
                Major/Area of Study
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={`major-${edu.id}`}
                type="text"
                placeholder="Major/Area of study"
              />
            </div>
            <div className="col-span-1">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={`degree-status-${edu.id}`}
              >
                Degree Status
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={`degree-status-${edu.id}`}
              >
                <option value="" disabled>
                  Select Degree Status
                </option>
                <option value="High School">High School</option>
                <option value="Associate Degree">Associate Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Doctorate">Doctorate</option>
              </select>
            </div>
            <div className="col-span-1">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={`degree-${edu.id}`}
              >
                Degree
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={`degree-${edu.id}`}
              >
                <option value="" disabled>
                  Select Degree
                </option>
                <option value="High School">High School</option>
                <option value="Associate Degree">Associate Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Doctorate">Doctorate</option>
              </select>
            </div>
            <div className="col-span-1">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={`country-${edu.id}`}
              >
                Country
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={`country-${edu.id}`}
              >
                <option value="" disabled>
                  Select Country
                </option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
            {index > 0 && ( // Only show delete button for education divs after the first one
              <div className="col-span-2 flex justify-end">
                <button
                  onClick={() => deleteEducation(edu.id)}
                  className="border-2 p-3 text-white bg-red-600 rounded-md"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
        <div className="col-span-2">
          <button
            type="button"
            onClick={addEducation}
            className="ml-0 border-2 p-3 text-white bg-[#3E3E49] rounded-md"
          >
            Add Education
          </button>
        </div>

        {/* Work Experience Section */}
        <h4 className="border-b-2 pb-2 text-2xl mt-8">Work Experience</h4>
        {workExperiences.map((work, index) => (
          <div
            key={work.id}
            className="grid grid-cols-2 pt-4 gap-5 border-b-2 pb-4 mb-4"
          >
            {/* Work Fields */}
            <div className="col-span-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={`company-${work.id}`}
              >
                Destination
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={`company-${work.id}`}
                type="text"
                placeholder="Destination"
              />
            </div>
            <div className="col-span-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={`company-${work.id}`}
              >
                Company Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={`company-${work.id}`}
                type="text"
                placeholder="Company Name"
              />
            </div>
            <div className="col-span-1">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={`company-${work.id}`}
              >
                Start Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={`company-${work.id}`}
                type="date"
                placeholder="Company Name"
              />
            </div>
            <div className="col-span-1">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={`end-date-${work.id}`}
              >
                End Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={`end-date-${work.id}`}
                type="date"
                placeholder="End Date"
                disabled={!hideEnd} // Disable if currently working
              />
            </div>
            <div className="col-span-1 flex items-center gap-2 m-2 ml-0">
              <input
                className="appearance-none h-4 w-4 border border-gray-300 rounded checked:bg-blue-600 checked:border-transparent focus:outline-none"
                id={`currently-working-${work.id}`}
                type="checkbox"
                onChange={handleHideEndDate} // Use onChange instead of onClick
                checked={!hideEnd} // Check if currently working
              />
              <label
                className="flex items-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-0"
                htmlFor={`currently-working-${work.id}`}
              >
                Currently Working
              </label>
            </div>

            {/* Other work fields... */}
            {index > 0 && (
              <div className="col-span-2 flex justify-end">
                <button
                  onClick={() => deleteWorkExperience(work.id)}
                  className="border-2 p-3 text-white bg-red-600 rounded-md"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
        <div className="col-span-2">
          <button
            type="button"
            onClick={addWorkExperience}
            className="ml-0 border-2 p-3 text-white bg-[#3E3E49] rounded-md"
          >
            Add Work Experience
          </button>
        </div>

        {/* Cover Letter Section */}
        <h4 className="border-b-2 pb-2 text-2xl mt-8">Cover Letter</h4>
        <div className="grid grid-cols-2 pt-4 gap-5 mt-3">
          <div className="col-span-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="cover-letter"
            >
              Cover Letter
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="cover-letter"
              rows="4"
              placeholder="Enter your Cover Letter"
            ></textarea>
          </div>
          <div className="col-span-2">
            <button
              className="ml-0 border-2 p-3 text-white bg-[#3E3E49] rounded-md"
              onClick={handlePostResume}
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostResume;
