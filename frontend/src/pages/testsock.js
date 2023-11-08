import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

function ChatRoom() {
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws"); // Thay thế bằng URL WebSocket server của bạn
    const stomp = Stomp.over(socket);

    stomp.connect({}, (frame) => {
      console.log("Connected", frame);
      stomp.subscribe(`/topic/messages/${id}`, (message) => {
        const messageBody = JSON.parse(message.body);
        setReceivedMessages((pre) => [...pre, messageBody.body.content]);
      });
    });

    setStompClient(stomp);
    return () => {
      stomp.disconnect();
    };
  }, [id]);

  const sendMessage = () => {
    stompClient.send(
      `/app/messages/${id}`,
      {},
      JSON.stringify({ content: message }),
    );
    setMessage("");
  };

  return (
    <div>
      <h1>Chat Room: {id}</h1>
      <ul>
        {receivedMessages.map((message, index) => (
          <li key={index}>{message.content}</li>
        ))}
      </ul>
      <input
        type="text"
        name="content"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default ChatRoom;
