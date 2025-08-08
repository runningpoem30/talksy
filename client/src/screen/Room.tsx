import React, { useCallback, useEffect, useState , useRef} from 'react'
import { useSocket } from '../context/SocketProvider'
import ReactPlayer from 'react-player'
import peer from '../services/Services' 


function Room() {
  const socket = useSocket();
  const [remoteSocketId , setRemoteSocketId] = useState(null)
  const [myStream , setMyStream] = useState(null)
  const videoRef = useRef<HTMLVideoElement>(null)


  const handleUserJoin = useCallback(({name , id}) => {
     console.log(`name ${name} joined the room`)
     setRemoteSocketId(id)
  },[])


  const handleCallUser = useCallback(async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });

    const offer = await peer.getOffer();
    socket.emit("user:call" , {to : remoteSocketId , offer})
    setMyStream(stream);

    if(videoRef.current){
      videoRef.current.srcObject = stream
    }
  } catch (err) {
    console.log(err);
  }
}, []);

const handleIncomingCall = useCallback(({from , offer}) => {
  console.log(`incoming call` , from , offer);
} , []) 


  useEffect(() => {
      socket.on("user:joined" , handleUserJoin) 
      socket.on('incoming:call' , handleIncomingCall)

      return () =>{
        socket.off("user:joined" , handleUserJoin)
        socket.off("incoming:call" , handleIncomingCall)
      }
  },[socket , handleUserJoin , handleIncomingCall])

  return (
    <div>
      <h1>this is my room page</h1>
      <h4>{remoteSocketId ? 'connected' : 'no one inroom' }</h4>
      {
        remoteSocketId && <button onClick={handleCallUser}>CALL</button>
      }
      <div>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={{ width: '300px', height: '300px', background: 'black' }}
        />
      </div>
     
    </div>
  )
}

export default Room
