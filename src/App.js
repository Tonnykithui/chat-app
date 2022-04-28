import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useEffect, useState } from "react";
import ChatInterface from "./components/ChatInterface";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import axios from "axios";

function App() {
  const [connection, setConnection] = useState(true);

  const [mess, setMess] = useState([]);

  const navigate = useNavigate();

  /* useEffect(() => {
    if (connection) {
      navigate("/login");
    }
  }, [connection]); */

  const joinRoom = async (Name, Room) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:44330/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (User, message) => {
        console.log(message);
        setMess((mess) => [...mess, { User, message }]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { Name, Room });

      await connection.invoke("ConnectionId").then((connectionId) => {
        alert(connectionId);
      });

      console.log(Name);
      localStorage.setItem("User", Name);
      localStorage.setItem("Group", Room);

      setConnection(connection);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (Message) => {
    try {
      /* await connection.invoke("SendMessage", Message); */
      axios
        .post("https://localhost:44330/api/msg", Message)
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app-ui">
      {!connection ? (
        <>
          <Routes>
            <Route path="/login" element={<Login joinRoom={joinRoom} />} />
            <Route path="/register" element={<CreateAccount />} />
          </Routes>
        </>
      ) : (
        <ChatInterface SendMess={sendMessage} mess={mess} />
      )}
    </div>
  );
}

export default App;

/* {loggedIn ? (
  <ChatInterface />
) : (
  <Routes>
    <Route path="/register" component={<CreateAccount />} />
    <Route path="/login" component={<Login />} />
  </Routes>
)} */
/* const [connection, setConnection] = useState();
  const [mess, setMess] = useState([]);
  const [users, setUsers] = useState([]);

  const joinRoom = async (Name, GroupName) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:44303/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMess", (Name, message) => {
        setMess((mess) => [...mess, { Name, message }]);
      });

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      });

      connection.onclose((e) => {
        setConnection();
        setMess([]);
        setUsers([]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { Name, GroupName });
      setConnection(connection);
    } catch (error) {
      console.log(error);
    }
  };

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (error) {
      console.log(error);
    }
  };

  const SendMessage = async (Message) => {
    try {
      await connection.invoke("SendMessage", Message);
    } catch (e) {
      console.log(e);
    }
  }; */
