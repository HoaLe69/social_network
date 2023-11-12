import SockJS from "sockjs-client";
import * as Stomp from "stompjs";

const WebSocket = (setComments) => {
  // const [stompClient, setStompClient] = useState(null);
  let stompClient = null;
  // const [message, setMessage] = useState({});
  const connect = (channel, id) => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stomp = Stomp.over(socket);
    stompClient = stomp;
    stomp.connect({}, (frame) => {
      console.log("Connected", frame);
      stomp.subscribe(`/topic/${channel}/${id}`, (message) => {
        const messageBody = JSON.parse(message.body);
        setComments((pre) => [...pre, messageBody.body]);
      });
    });

    // setStompClient(stomp);
  };
  const sendMessage = (message, channel, id) => {
    if (stompClient) {
      stompClient.send(
        `/app/${channel}/${id}`,
        {},
        JSON.stringify({
          ...message,
        }),
      );
    }
  };
  const disconnect = () => {
    if (stompClient) stompClient.disconnect();
  };
  return { sendMessage, disconnect, connect };
};

export default WebSocket;
