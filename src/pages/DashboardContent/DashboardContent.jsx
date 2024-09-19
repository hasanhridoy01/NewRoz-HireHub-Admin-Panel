import "./DashboardContent.css";
import img from "../../assets/Images/myImg.8b24bcbabe5755aa8c7e.png";

const DashboardContent = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4 items-center justify-center">
        <div className="col-span-3">
          <h2 className="text-3xl mb-2">Welcome to HireHub</h2>
          <p className="text-md leading-7">
            At Newroz, we help our team members be at their natural best and
            innovate with their imaginations. Together, we can make a difference
            in the web sphere and help people with their online presence. We can
            make a difference in the web sphere and help people with their
            online presence.
          </p>
        </div>
        <div className="border-2 flex flex-col items-center justify-center gap-3 mt-16 p-3">
          <img src={img} alt="" />
          <p className="font-bold">Apply Date : 15-09-2024</p>
        </div>
      </div>

      <p className="text-xl leading-7 mt-3">Your progress bar</p>
      <div className="grid grid-cols-1 items-center justify-center mb-2">
        <div className="card border-2 h-72 w-full mt-2"></div>
      </div>
    </div>
  );
};

export default DashboardContent;
