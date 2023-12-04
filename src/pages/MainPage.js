import React, { useState } from "react";
import DoctorSide from "../components/DoctorSide";
import PatientSide from "../components/PatientSide";
import ChatComponent from '../components/ChatComponent'; 

const MainPage = () => {
  const [conversation, setConversation] = useState([]);
  // const [patientConvo, setPatientConvo] = useState([]);
  // const [doctorConvo, setDoctorConvo] = useState([]);
  const [doctorLang, setDoctorLang] = useState("en");
  const [patientLang, setPatientLang] = useState("es");
  const languageOptions = [
    {code: "en", language: "English"},
    {code: "es", language: "Spanish"},
    {code: "fr", language: "French"},
    {code: "de", language: "German"},
    {code: "hi", language: "Hindi"},
    {code: "ru", language: "Russian"},
    {code: "ar", language: "Arabic"},
    {code: "po", language: "Portuguese"},
    {code: "fa", language: "Persian"},
];

// console.log(patientConvo)

  return (
    <div className="main-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h3 className="main-header" style={{ textAlign: 'center' }}>Doctor Patient Conversation</h3>
      <div className="doc-patient" style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
        <DoctorSide
          conversation={conversation}
          setConversation={setConversation}
          doctorLang={doctorLang}
          setDoctorLang={setDoctorLang}
          patientLang={patientLang}
          languageOptions={languageOptions}
        />
        <PatientSide
          conversation={conversation}
          setConversation={setConversation}
          doctorLang={doctorLang}
          patientLang={patientLang}
          setPatientLang={setPatientLang}
          languageOptions={languageOptions}
        />
      </div>
      {/* ChatComponent renders the conversation */}
      <ChatComponent conversation={conversation} />
    </div>
    // <div className="main-div">
    //   <h2 className="main-header">Doctor Patient Conversation</h2>
    //   <div className="doc-patient">
    //     <DoctorSide
    //       conversation={conversation}
    //       setConversation={setConversation}
    //       // patientConvo={patientConvo}
    //       // setPatientConvo={setPatientConvo}
    //       // doctorConvo={doctorConvo}
    //       // setDoctorConvo={setDoctorConvo}
    //       doctorLang={doctorLang}
    //       setDoctorLang={setDoctorLang}
    //       patientLang={patientLang}
    //       languageOptions={languageOptions}
    //     />
    //     <hr />
    //     <PatientSide
    //       conversation={conversation}
    //       setConversation={setConversation}
    //       // patientConvo={patientConvo}
    //       // setPatientConvo={setPatientConvo}
    //       // doctorConvo={doctorConvo}
    //       // setDoctorConvo={setDoctorConvo}
    //       doctorLang={doctorLang}
    //       patientLang={patientLang}
    //       setPatientLang={setPatientLang}
    //       languageOptions={languageOptions}
    //     />
    //   </div>
    //   <ChatComponent conversation={conversation} />
    // </div>
  );
};

export default MainPage;
