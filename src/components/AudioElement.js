import axios from "axios";
import React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { saveAs } from 'file-saver';

const AudioElement = ({ convo, setConvo, reply, setReply, replyLang }) => {
  const recorderControls = useAudioRecorder();

  async function getTranslation(blob, replyLang, convoAudio) {
    const formData = new FormData();
    formData.append("recording", blob);
    formData.append("replyLang", replyLang);
    try {
      const response = await axios.post("http://127.0.0.1:5000/audio", formData, {
        "Content-type": "multipart/form-data",
      });

      if (response.data) {
        console.log(response, "this is the data")
        const decodedData = atob(response.data.replyAudio);
        const text = response.data.text
        const replyText = response.data.replyText
        const byteNumbers = new Array(decodedData.length);
        for (let i = 0; i < decodedData.length; i++) {
          byteNumbers[i] = decodedData.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'audio/mpeg' });

        const url = URL.createObjectURL(blob);
        setReply([...reply, { type: "audio", data: url}, {type: "text", data: replyText}])
        setConvo([...convo, convoAudio, { type: "text", data: text }]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const convoAudio = { type: "audio", data: url }
    setConvo([...convo, convoAudio]);
    getTranslation(blob, replyLang, convoAudio);
  };

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
    </div>
  );
};

export default AudioElement;
