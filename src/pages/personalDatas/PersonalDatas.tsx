import AllPersonalData from "../../components/AllPersonalData";
import Navbar from "../../components/Navbar";

const PersonalDatas = () => {
  return (
    <div>
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
