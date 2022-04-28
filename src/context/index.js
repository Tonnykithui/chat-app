import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";


export const joinRoom = async({Name,Room}) => {

    try {
        const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:44330/chat")
        .configureLogging(LogLevel.Information)
        .build();
    } catch (error) {
        console.log(error);
    }
}