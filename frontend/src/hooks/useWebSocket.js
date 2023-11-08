import { useCallback, useState } from "react";
import SockJS from "sockjs-client";
import * as Stomp from "stompjs";

const WebSocket = (id) => {
  const [stompClient, setStompClient] = useState(null);
  const [message, setMessage] = useState({});
  const connect = useCallback((channel, id) => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stomp = Stomp.over(socket);
    stomp.connect({}, (frame) => {
      console.log("Connected", frame);
      stomp.subscribe(`/topic/${channel}/${id}`, (message) => {
        const messageBody = JSON.parse(message.body);
        setMessage(messageBody.body);
      });
    });
    setStompClient(stomp);
  }, []);
  const sendMessage = (message, channel, id) => {
    stompClient.send(
      `/app/${channel}/${id}`,
      {},
      JSON.stringify({
        userId: message?.userId,
        conversationId: message?.conversationId,
        content: message?.content,
      }),
    );
  };
  const disconnect = () => {
    if (stompClient) stompClient.disconnect();
  };
  return [message, sendMessage, disconnect, connect];
};

export default WebSocket;