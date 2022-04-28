import React, { createContext } from "react";

const initState = {};

export const GlobalProvider = createContext(initState);

const GlobalContext = async ({ children }) => {
  return <GlobalProvider.Provider>{children}</GlobalProvider.Provider>;
};

/* import React, { useState, createContext } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

const JoinRoom = async (Name, Room) => {
  try {
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44330/chat")
      .configureLogging(LogLevel.Information)
      .build();

    connection.on("ReceiveMessage", (user, message) => {
      setMess((mess) => [...mess, { user, message }]);
    });

    connection.start();
    connection.invoke("JoinRoom", { Name, Room });
    setConnection(connection);
  } catch (error) {
    console.log(error);
  }
};

const [connection, setConnection] = useState();
const [mess, setMess] = useState([]);

  const initState = {
    connection,
    mess,
    JoinRoom,
  };


export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
 */
