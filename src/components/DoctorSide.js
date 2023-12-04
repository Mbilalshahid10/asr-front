import React, { useState } from "react";
import axios from "axios";
import AudioElement from "./AudioElement";
import ChatComponent from "./ChatComponent";
import Dropdown from "./dropDown";

const DoctorSide = ({
  conversation,
  setConversation,
  // patientConvo,
  // setPatientConvo,
  // doctorConvo,
  // setDoctorConvo,
  doctorLang,
  setDoctorLang,
  patientLang,
  languageOptions,
}) => {
  const inputStyle = {
    borderRadius: "4px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    width: "calc(100% - 400px)", // Adjust width for padding and border
    boxSizing: "border-box", // Include padding and border in the element's width
    marginTop: "10px",
    marginBottom: "10px", // Space between the input and the button
  };

  const buttonStyle = {
    borderRadius: "4px",
    border: "none",
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#007bff", // A blue shade for the button
    color: "white",
    cursor: "pointer",
    outline: "none", // Remove the outline on focus for browsers that show it
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3", // A darker blue shade for hover state
  };

  const inputAreaStyle = {
    borderTop: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "#f8f9fa",
    position: "sticky",
    bottom: "0",
    width: "100%",
    height: "40px"
  };

  const [textInput, setTextInput] = useState("");
  const [buttonHover, setButtonHover] = useState(false);

  const [sendingStatus, setSendingStatus] = useState("none"); // 'sending', 'sent', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleTextSubmit = async () => {
    if (textInput.trim()) {
      const formData = new FormData();
      formData.append("text", textInput);
      formData.append("doctorLang", doctorLang);
      formData.append("replyLang", patientLang);
      formData.append("type", "text");

      setSendingStatus("sending");

      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/audio",
          formData,
          {
            "Content-type": "multipart/form-data",
          }
        );

        if (response.data) {
          // console.log(response, "this is the data");
          setSendingStatus("none");
          setTimeout(() => setSendingStatus("none"), 3000);

          const decodedData = atob(response.data.replyAudio);
          const text = response.data.text;
          const replyText = response.data.replyText;
          const byteNumbers = new Array(decodedData.length);
          for (let i = 0; i < decodedData.length; i++) {
            byteNumbers[i] = decodedData.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: "audio/mpeg" });

          const url = URL.createObjectURL(blob);
          setConversation([
            ...conversation,
            { type: 'text', data: text, sender: 'doctor' },
            { type: "audio", data: url, sender: 'patient' },
            { type: "text", data: replyText, sender: 'patient'},
          ]);

          // setPatientConvo([
          //   ...patientConvo,
          //   { type: "audio", data: url },
          //   { type: "text", data: replyText },
          // ]);
          // setDoctorConvo([...doctorConvo, { type: "text", data: text }]);
        }
      } catch (error) {
        // Handle the error
        console.error("Error sending text data:", error);
        setErrorMessage("Failed to send message."); // Set error message
        setSendingStatus("error");
        setTimeout(() => setSendingStatus("none"), 3000);
      }
      setTextInput(""); // Clear the text input after submission
    }
  };

  return (
    <div className="inner-divs">
      <h3>Doctor's Side</h3>
      <div className="user-interaction" style={inputAreaStyle}>
        <AudioElement
          // convo={doctorConvo}
          // setConvo={setDoctorConvo}
          // reply={patientConvo}
          // setReply={setPatientConvo}
          convo={conversation}
          setConvo={setConversation}
          replyLang={patientLang}
          sender="doctor"
        />
        <Dropdown
          language={doctorLang}
          setLanguage={setDoctorLang}
          languageOptions={languageOptions}
        />
        <input
          style={inputStyle}
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Type your message"
        />
        <button
          style={
            buttonHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle
          }
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onClick={handleTextSubmit}
        >
          {sendingStatus === "sending" ? "Sending..." : "Send Text"}
        </button>
        {sendingStatus === "sent" && (
          <div style={{ color: "green" }}>Message Sent!</div>
        )}
        {sendingStatus === "error" && (
          <div style={{ color: "red" }}>{errorMessage}</div>
        )}
      </div>
      {/* <ChatComponent convoList={doctorConvo} sender={"doctor"} /> */}
    </div>
  );
};

export default DoctorSide;
