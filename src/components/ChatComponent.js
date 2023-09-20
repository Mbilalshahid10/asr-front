import React from "react";

const ChatComponent = ({convoList}) => {

    const getConvo = () => (
        convoList.map((convo)=>{
            if(convo.type === "text"){
                return <div>{convo.data}</div>
            } else if(convo.type === "audio"){
                return <div>
                    <audio src={convo.data} controls />
                </div>
            }
        }
        )
    )
    return(
        <div id="chat">
            {getConvo()}
        </div>
    )
}

export default ChatComponent;