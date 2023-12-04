import React from "react";
import AudioElement from "./AudioElement";
import ChatComponent from "./ChatComponent";
import Dropdown from "./dropDown";

const PatientSide = ({
  conversation,
  setConversation,
  // patientConvo,
  // setPatientConvo,
  // doctorConvo,
  // setDoctorConvo,
  languageOptions,
  doctorLang,
  setPatientLang,
  patientLang,
}) => {
  const inputAreaStyle = {
    borderTop: "1px solid #ccc",
    // padding: "10px",
    padding: "10px 0px",
    backgroundColor: "#f8f9fa",
    position: "sticky",
    bottom: "0",
    width: "100%",
    height: "40px",
  };
  
  return (
    <div className="inner-divs">
      <h3>Patient's Side</h3>
      <div className="user-interaction" style={inputAreaStyle}>
        <AudioElement
          // convo={patientConvo}
          // setConvo={setPatientConvo}
          // reply={doctorConvo}
          // setReply={setDoctorConvo}
          // replyLang={doctorLang}
          convo={conversation}
          setConvo={setConversation}
          replyLang={doctorLang}
          sender="patient"
        />
        <Dropdown
          language={patientLang}
          setLanguage={setPatientLang}
          languageOptions={languageOptions}
        />
      </div>
      {/* <ChatComponent convoList={patientConvo} sender={"patient"} /> */}
    </div>
  );
};

export default PatientSide;
