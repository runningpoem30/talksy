const { Server } = require("socket.io");

const io = new Server(5500, {
  cors: {
    origin: "*", // or ["http://localhost:3000"] for specific origins
    methods: ["GET", "POST"]
  }
});

const emailToSocketIdMap = new Map()
const socketIdToEmailMap = new Map()

io.on("connection", (socket) => {
  console.log("connection is established");
  socket.on('room:join' , data =>{
    const{name , room} = data
    emailToSocketIdMap.set(name , socket.id);
    socketIdToEmailMap.set(socket.id , name);
    io.to(room).emit("user:joined" , {name , id:socket.id})
    socket.join(room);
    io.to(socket.id).emit('room:join' , data)
  }); 

  socket.on('user:call' , ({to , offer}) => {
    io.to(to).emit("incoming:call" , {from : socket.id , offer })
  })
});


///