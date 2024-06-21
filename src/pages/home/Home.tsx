import Form from "../../components/Form";

const Home = () => {
  return (
    <div className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">My Details</h1>
      <div className="max-w-lg mx-auto bg-black rounded-md p-5 space-y-6">
        <Form />
      </div>
    </div>
  );
};

export default Home;
