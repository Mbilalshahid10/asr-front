import React from "react";
import AudioElement from "./AudioElement";
import ChatComponent from "./ChatComponent";
import Dropdown from "./dropDown";

const DoctorSide = ({
  patientConvo,
  setPatientConvo,
  doctorConvo,
  setDoctorConvo,
  doctorLang,
  setDoctorLang,
  patientLang,
  languageOptions
}) => {
  return (
    <div className="inner-divs">
      <p>Doctor's Side</p>
      <div className="user-interaction">
        <AudioElement
          convo={doctorConvo}
          setConvo={setDoctorConvo}
          reply={patientConvo}
          setReply={setPatientConvo}
          replyLang={patientLang}
        />
        <Dropdown language={doctorLang} setLanguage={setDoctorLang} languageOptions={languageOptions}/>
      </div>
      <ChatComponent convoList={doctorConvo} />
    </div>
  );
};

export default DoctorSide;
