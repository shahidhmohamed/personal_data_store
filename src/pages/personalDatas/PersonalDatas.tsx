import PersonalData from "../../components/PersonalData";

const PersonalDatas = () => {
  return (
    <div className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">My All Data</h1>
      <div className="max-w-lg mx-auto bg-black rounded-md p-5 space-y-6">
        <PersonalData />
      </div>
    </div>
  );
};

export default PersonalDatas;
