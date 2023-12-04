import React from "react";

const ChatComponent = ({ conversation }) => {
  const bubbleStyle = {
    maxWidth: "300px",
    width: "fit-content",
    padding: "10px 10px",
    borderRadius: "20px",
    margin: "10px",
    wordBreak: "break-word",
  };

  const doctorBubbleStyle = {
    ...bubbleStyle,
    // backgroundColor: "#007bff",
    backgroundColor: '#202C33',
    color: "white",
    marginLeft: "250px",
    marginRight: "auto",
    // margin: "10px auto 10px 410px",
    textAlign: "left",
  };

  const patientBubbleStyle = {
    ...bubbleStyle,
    // backgroundColor: "#f1f1f1",
    backgroundColor: "#005C4B",
    color: "white",
    marginLeft: "auto",
    marginRight: "250px",
    // margin: "10px 450px 10px auto",
    textAlign: "left",
  };

  const renderMessage = (message, index) => {
    const isDoctor = message.sender === "doctor";
    const bubbleClass = isDoctor ? doctorBubbleStyle : patientBubbleStyle;
    // bubbleClass.margin = message.type === "text" && isDoctor ? "10px auto 10px 410px" : "10px 450px 10px auto"  
    // const placement = isDoctor ? "10px auto 10px 410px" : "10px 450px 10px auto"

    return (
      <div key={index} style={bubbleClass}>
        {message.type === "text" && (
          <p
            style={{
              margin: "0px",
              padding: "0px",
            //   margin: placement,
            }}
          >
            {message.data}
          </p>
        )}
        {message.type === "audio" && <audio src={message.data} controls />}
      </div>
    );
  };

  // Render the chat component with messages
  return (
    <div className="chat-component" style={{marginTop: "50px"}}>{conversation.map(renderMessage)}</div>
  );
};

//   const getConvo = () =>
//     convoList.map((convo, index) => {
//       if (convo.type === "text") {
//         const bubbleClass =
//           sender === "doctor" ? doctorBubbleStyle : patientBubbleStyle;
//         return (
//           <div key={index} style={bubbleClass}>
//             {convo.data}
//           </div>
//         );
//       } else if (convo.type === "audio") {
//         // Assuming that audio messages are also differentiated by sender
//         const audioBubbleClass =
//           sender === "doctor" ? doctorBubbleStyle : patientBubbleStyle;
//         return (
//           <div key={index} style={audioBubbleClass}>
//             <audio src={convo.data} controls />
//           </div>
//         );
//       }
//       return null;
//     });

//   return <div id="chat">{getConvo()}</div>;
// };

export default ChatComponent;

//   const getConvo = () =>
//     convoList.map((convo) => {
//       if (convo.type === "text") {
//         return <div>{convo.data}</div>;
//       } else if (convo.type === "audio") {
//         return (
//           <div>
//             <audio src={convo.data} controls />
//           </div>
//         );
//       }
//       return "";
//     });
