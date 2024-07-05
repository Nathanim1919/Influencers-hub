import { Server, Socket } from "socket.io";
import { ChatEventEnum } from "../constants";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import Influencer from "../models/influencerModel";
import Brand from "../models/brandModel";


interface CustomSocket extends Socket {
    user?: any; // Use a more specific type instead of any if possible
  }

const mountParticpantTypingEvent = (socket: CustomSocket) => {
  socket.on(ChatEventEnum.TYPING_EVENT, (chatId: string) => {
    socket.in(chatId).emit(ChatEventEnum.TYPING_EVENT, chatId);
  });
};

const mountParticpantStopTypingEvent = (socket: CustomSocket) => {
  socket.on(ChatEventEnum.STOP_TYPING_EVENT, (chatId: string) => {
    socket.in(chatId).emit(ChatEventEnum.STOP_TYPING_EVENT, chatId);
  });
};

const initializeSockerIO = (io: Server) => {
  return io.on("connection", async (socket: CustomSocket) => {
    try {
      // parse the cookie from the handshake headers, (this is the same cookie that was set in the client) and (it is only possible if client has 'withCredentials' set to true)
      const cookies = cookie.parse(socket.handshake.headers?.cookie || "");
      let token = cookies?.accessToken; // get the accessToken from the cookie

      if (!token) {
        // Token is required for the socket to work
        throw new Error("Authentication error");
      }

      if (process.env.ACCESS_TOKEN_SECRET) {
        // verify the token and get the user from the token
        const {_id, role} = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) as { _id: string; role: string }
        let user = null;

        // set the user to the socket object
        if (role === "Influencer") {
          user = await Influencer.findById(_id);
        } else {
            user = await Brand.findById(_id);
        }

        if (!user) {
          throw new Error("Authentication error");
        }

        socket.user = user;

        console.log("User connected 🗼. userId: ", user._id.toString());


        socket.on(ChatEventEnum.DISCONNECTED_EVENT, () => {
            console.log("User disconnected 🗼. userId: ", user._id.toString());
            if (socket.user?._id){
                socket.leave(socket.user._id.toString());
            }
        })
      }
    } catch (error) {
        socket.emit("error", { message: error.message });
    }
  });
};



const emitSocketEvent = (req: Request, event: string, data: any) => {
    const io = req.app.get("io") as Server;
    io.emit(event, data);
};