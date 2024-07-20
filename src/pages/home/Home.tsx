// Home.tsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import PersonalDatas from "../../components/PersonalData";
import Modal from "../../components/Modal";
import earthVideo from "./earth.mp4";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDataClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      <div className="relative z-10 h-full p-4 md:p-10 flex flex-col md:flex-row space-y-5 md:space-y-0 bg-opacity-50">
        <div className="md:w-1/2">
          <div className="max-w-lg mx-auto bg-black bg-opacity-50 rounded-md p-5 space-y-6">
            <Form />
          </div>
        </div>
        <div className="md:w-1/2 rounded-md p-5">
          <button onClick={handleDataClick}>
            <PersonalDatas />
          </button>
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        {/* Additional details go here */}
        <h2>Details</h2>
        <p>More information about the selected data...</p>
      </Modal>
    </div>
  );
};

export default Home;
