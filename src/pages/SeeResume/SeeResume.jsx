import { useState } from "react";
import "./SeeResume.css"; // Custom styles if needed
import PostResume from "../../components/PostResume/PostResume";

const SeeResume = () => {
  const [postResumePage, setPostResumePage] = useState(false);

  //handlePostResume
  const handlePostResume = () => {
    setPostResumePage(true);
  };
  return (
    <>
      {postResumePage ? (
        <PostResume />
      ) : (
        <div className="container">
          <div className="flex py-10 px-4 h-screen">
            {/* Left Column: Contact and Social Media */}
            <div className="contact-col bg-[#3D3F42] text-white w-1/4 p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-4">John Doe</h1>
                <p>Email: johndoe@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>City, State</p>

                <h3 className="mt-6 mb-2 font-semibold">Social Media</h3>
                <ul className="list-none">
                  <li className="flex items-center mb-2">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline flex items-center"
                    >
                      <i className="fab fa-linkedin mr-2"></i>
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center mb-2">
                    <a
                      href="https://www.github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline flex items-center"
                    >
                      <i className="fab fa-github mr-2"></i>
                      GitHub
                    </a>
                  </li>
                  <li className="flex items-center mb-2">
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline flex items-center"
                    >
                      <i className="fab fa-twitter mr-2"></i>
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Columns: Resume Details */}
            <div className="resume-cols flex flex-col w-3/4">
              <div className="section bg-white p-6 flex-grow mb-0">
                <h2 className="text-lg font-semibold text-blue-600">
                  Professional Summary
                </h2>
                <p>
                  Dynamic and results-oriented software engineer with 5+ years
                  of experience in developing scalable web applications and
                  working in fast-paced environments.
                </p>
              </div>

              <div className="section bg-white p-6 pb-2 flex-grow mb-0">
                <h2 className="text-lg font-semibold text-blue-600">
                  Experience
                </h2>
                <div className="job mb-4">
                  <h3 className="font-bold">Software Engineer</h3>
                  <p className="text-gray-600">XYZ Company, 2020 - Present</p>
                  <ul className="list-disc pl-5">
                    <li>
                      Developed responsive web applications using React and
                      Tailwind CSS.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to define,
                      design, and ship new features.
                    </li>
                  </ul>
                </div>
                <div className="job mb-0">
                  <h3 className="font-bold">Frontend Developer</h3>
                  <p className="text-gray-600">ABC Inc., 2018 - 2020</p>
                  <ul className="list-disc pl-5">
                    <li>
                      Implemented user-friendly interfaces with HTML, CSS, and
                      JavaScript.
                    </li>
                    <li>
                      Participated in code reviews and maintained documentation
                      for projects.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="section bg-white p-6 pb-1 flex-grow mb-0">
                <h2 className="text-lg font-semibold text-blue-600">
                  Education
                </h2>
                <p className="font-bold">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-gray-600">University Name, 2014 - 2018</p>
              </div>

              <div className="section bg-white p-6 flex-grow mb-0">
                <h2 className="text-lg font-semibold text-blue-600">Skills</h2>
                <ul className="list-disc pl-5">
                  <li>JavaScript, React, Tailwind CSS</li>
                  <li>Node.js, Express</li>
                  <li>Git, GitHub</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-3">
            <p className="mb-2">Want to edit your resume? Click here:</p>
            <button
              className="bg-blue-600 text-white font-semibold py-2 px-4 border border-transparent rounded hover:bg-blue-700 transition duration-300"
              onClick={handlePostResume}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SeeResume;
