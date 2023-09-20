import React from "react";
import AudioElement from "./AudioElement";
import ChatComponent from "./ChatComponent";
import Dropdown from "./dropDown";

const PatientSide = ({
  patientConvo,
  setPatientConvo,
  doctorConvo,
  setDoctorConvo,
  languageOptions,
  doctorLang,
  setPatientLang,
  patientLang
}) => {
  return (
    <div className="inner-divs">
      <p>Patient's Side</p>
      <div className="user-interaction">
        <AudioElement
            convo={patientConvo}
            setConvo={setPatientConvo}
            reply={doctorConvo}
            setReply={setDoctorConvo}
            replyLang={doctorLang}
        />
        <Dropdown language={patientLang} setLanguage={setPatientLang} languageOptions={languageOptions}/>
      </div>
      <ChatComponent convoList={patientConvo} />
    </div>
  );
};

export default PatientSide;
