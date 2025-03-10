import React from 'react'
import Script from "next/script";

const Chat = () => {
    return (
        <>
            {/* <div className="z-[20] mx-4 fixed">
                <ab-chat
                    chatbotID="ppFCSpmhM9JP_G951InN0"
                    className="px-4 z-[20] fixed"
                    theme="dark"
                    orientation="right"
                    headline="Chat with our AI"
                    description="Ask any question and our AI will answer!"
                    initialMessage="How can I help you today?"
                    placeholder="Type your message here..."
                ></ab-chat>
            </div> */}
            <div className="relative h-32 z-[20] ">
                <div className="bottom-0 h-16 relative right-4 left-4  z-[20]">
                    <ab-chat
                        chatbotID="ppFCSpmhM9JP_G951InN0"
                        orientation="right"
                        color="#401b90"
                        headline="Chat with our AI"
                        description="Ask any question and our AI will answer!"
                        initialMessage="How can I help you today?"
                        placeholder="Type your message here..."
                    ></ab-chat>
                </div>
            </div>
            <Script
                async
                type="text/javascript"
                src="https://client.aidbase.ai/chat-widget.ab.js"

            />

        </>
    )
}

export default Chat