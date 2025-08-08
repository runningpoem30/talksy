import React, { useCallback, useEffect, useState, type FormEvent } from 'react'
import { useSocket } from '../context/SocketProvider';
import { useNavigate } from 'react-router-dom';

function Lobby() {

  const [ form , setForm] = useState({
    name : "",
    room : ""
  });

  const socket = useSocket()
  console.log(socket)

  const navigate = useNavigate( )


  function handleChange(event){
    setForm({
      ...form,
      [event.target.name] : event.target.value
    })
  }

  async function handleSubmit(event){
    event.preventDefault();
    socket.emit("room:join" , {name : form.name, room : form.room})
      try{
          setForm({
            name : "" ,
            room : ""
          })
      }
      catch(err){
          console.log(err)
      }
  }

  const handleJoinRoom = useCallback((data) => {
    const {name , room} = data   
    navigate(`/room/${room}`)
  } ,[])

useEffect(() => {
  socket.on('room:join' , handleJoinRoom);
  return () => {
    socket.off('room:join' , handleJoinRoom);
  };
}, [handleJoinRoom]);




  return (
    <div>
      <form onSubmit={handleSubmit}>
           <h1>Lobby screen</h1>
           <input placeholder='enter your name' onChange={handleChange} name="name"  value={form.name}/>
           <input placeholder='enter the room number' onChange={handleChange} name='room' value={form.room}/>
           <button>Join</button>
      </form>
      
    </div>
  )
}

export default Lobby
