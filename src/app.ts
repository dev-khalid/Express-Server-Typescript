import express, { Application } from "express";
import { createServer } from "node:http";
import cors from "cors";
import { Server } from "socket.io";
const app: Application = express();
const httpServer = createServer(app);
app.use(cors());
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});
let arr = ["1", "2", "3", "4", "5"];
io.on("connection", (socket) => {
  console.log(`⚡Connected id: ${socket.id}`);
  let someData = { name: "akash" }; 
    socket.emit(arr[0], someData); 
});

httpServer.listen(5000, () => {
  console.log("Server running on port : 5000");
});
