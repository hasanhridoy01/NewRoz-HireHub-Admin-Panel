import "./DashboardContent.css";
import img from '../../assets/Images/myImg.8b24bcbabe5755aa8c7e.png'

const DashboardContent = () => {
  return (
    <div className="">
      <h2 className="text-3xl mb-2">Welcome to HireHub</h2>
      <p className="text-md leading-7">At Newroz, we help our team members be at their natural best and innovate with their imaginations. Together, we can make a difference in the web sphere and help people with their online presence.we can make a difference in the web sphere and help people with their online presence."</p>
      <p className="text-lg leading-7 mt-4">Your progress bar</p>
      <div className="border-2 h-96 mt-3 flex items-start justify-between bg-white pr-3">
        <div className="w-[275px] h-[317px] border-2 border-b-0 border-l-0 flex flex-col items-center justify-center gap-3 mt-16">
            <img src={img} alt="" />
            <p className="font-bold">Apply Date : 15-09-2024</p>
        </div>
        <div className="w-[915px] mt-16">
            <p>Progress</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum corrupti nesciunt explicabo. Dolorem quae nam laboriosam quia commodi dolores. Explicabo dolore eligendi recusandae et obcaecati iure quasi cupiditate fugit ipsum iste? Ex cumque neque consequatur qui, nobis nemo expedita nam perspiciatis distinctio consequuntur quam error doloribus, molestias quo! Esse, eaque!</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
