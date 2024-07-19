import AllPersonalData from "../../components/AllPersonalData";
import Navbar from "../../components/Navbar";
import earthVideo from "../home/earth.mp4";

const PersonalDatas = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative z-10 p-4 ">
        <div>
          <div className="max-w-lg mx-auto  rounded-md p-5 mt-0">
            <AllPersonalData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDatas;
