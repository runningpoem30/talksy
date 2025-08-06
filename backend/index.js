const { Server } = require("socket.io");

const io = new Server(5500, {
  cors: {
    origin: "*", // or ["http://localhost:3000"] for specific origins
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("connection is established");
});
