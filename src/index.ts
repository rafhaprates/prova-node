import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/user", userRouter);

export const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log('Backend Iniciado');
  }
});