import React, { useState } from "react";
import "./DashboardContent.css";
import img from "../../assets/Images/myImg.8b24bcbabe5755aa8c7e.png";
import Stepper from "awesome-react-stepper";
import PostResume from "../../components/PostResume/PostResume";

const DashboardContent = () => {
  const [isResumeUploaded, setIsResumeUploaded] = useState(false);

  const handleResumeUpload = () => {
    // Logic for uploading the resume
    setIsResumeUploaded(true);
  };

  return (
    <div className="container">
      {isResumeUploaded ? (
        <div className="">
          <PostResume />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-4 gap-4 items-center justify-center">
            <div className="col-span-3">
              <h2 className="text-3xl mb-2">Welcome to HireHub</h2>
              <p className="text-md leading-7">
                At Newroz, we help our team members be at their natural best and
                innovate with their imaginations. Together, we can make a
                difference in the web sphere and help people with their online
                presence.
              </p>
            </div>
            <div className="border-2 flex flex-col items-center justify-center gap-3 mt-16 p-3 shadow rounded-md">
              <img src={img} alt="" />
              <p className="font-bold text-[crimson] animate-bounce">
                Apply Date: 15-09-2024
              </p>
            </div>
          </div>
          <p className="text-xl leading-7 mt-3">Your progress bar</p>
          <div className="grid grid-cols-1 items-center justify-center mb-2">
            <div className="card border border-[#172539] h-72 w-full mt-2 p-5 rounded-sm">
              <Stepper
                strokeColor="#17253975"
                fillStroke={isResumeUploaded ? "#172539" : "#ccc"}
                activeColor="#172539"
                activeProgressBorder="2px solid #17253975"
                submitBtn={<button className="stepperBtn">Submit</button>}
                continueBtn={
                  <button className="stepperBtn" disabled={!isResumeUploaded}>
                    Next
                  </button>
                }
                backBtn={<button className="stepperBtn">Back</button>}
                onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
              >
                <div className="stepperSubDiv">
                  <h1 className="text-left">
                    You have not uploaded your resume yet, want to upload one?
                  </h1>
                  <button
                    onClick={handleResumeUpload}
                    className="cursor-pointer border-2 border-[#089992] p-1.5 rounded-md mt-2 text-[#089992] bg-[#70CEA2] pulse upload-button"
                  >
                    Upload Resume
                  </button>
                </div>
                <div className="stepperSubDiv">
                  <h1>Add your content here!!!</h1>
                </div>
                <div className="stepperSubDiv">
                  <h1>Step 3 - Add more content!</h1>
                </div>
                <div className="stepperSubDiv">
                  <h1>Step 4 - You're almost done!</h1>
                </div>
                <div className="stepperSubDiv">
                  <h1>Thank you for using Awesome React Stepper</h1>
                </div>
              </Stepper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
