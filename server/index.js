import express from "express";// com o type no packager.json posso importa o express
import morgan from "morgan";
import { Server as SocketServer} from "socket.io";
import http from "http";
import cors from "cors";

import { PORT } from './config.js'

const app = express();
const server = http.createServer(app)
const io = new SocketServer(server,{
    cors: {
        origin: 'http://localhost:3000'
        //A origin é que decide onde vai se conectar com o frontend (no meu caso client(PORT=3000) ou client2(PORT=5173))
    }
});

app.use(cors())
app.use(morgan("dev"));

io.on('connection',(socket)=>{  //quando tiver uma conexão, esse código irá execultar algo
    console.log(`${socket.id}`)
    console.log("a use connected")
} )
//const porta = PORT 
server.listen(PORT);
console.log(`Server started on port ${PORT}`);
