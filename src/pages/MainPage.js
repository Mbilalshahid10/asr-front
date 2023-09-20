import React, { useState } from "react";
import DoctorSide from "../components/DoctorSide";
import PatientSide from "../components/PatientSide";

const MainPage = () => {
  const [patientConvo, setPatientConvo] = useState([]);
  const [doctorConvo, setDoctorConvo] = useState([]);
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

console.log(patientConvo)

  return (
    <div className="main-div">
      <h3 className="main-header">Doctor Patient Conversation</h3>
      <div className="doc-patient">
        <DoctorSide
          patientConvo={patientConvo}
          setPatientConvo={setPatientConvo}
          doctorConvo={doctorConvo}
          setDoctorConvo={setDoctorConvo}
          doctorLang={doctorLang}
          setDoctorLang={setDoctorLang}
          patientLang={patientLang}
          languageOptions={languageOptions}
        />
        <hr />
        <PatientSide
          patientConvo={patientConvo}
          setPatientConvo={setPatientConvo}
          doctorConvo={doctorConvo}
          setDoctorConvo={setDoctorConvo}
          doctorLang={doctorLang}
          patientLang={patientLang}
          setPatientLang={setPatientLang}
          languageOptions={languageOptions}
        />
      </div>
    </div>
  );
};

export default MainPage;
