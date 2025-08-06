import React, { useState } from 'react'
import { useSocket } from '../context/SocketProvider';

function Lobby() {

  const [ form , setForm] = useState<any>({
    name : "",
    room : ""
  });

  const socket = useSocket()
  console.log(socket)



  function handleChange(event){
    setForm({
      ...form,
      [event.target.name] : event.target.value
    })
  }

  async function handleSubmit(event){
    event.preventDefault()
      try{
          setForm({
            name : "" ,
            room : ""
          })
          socket.emit("room:join")
      }
      catch(err){
          console.log(err)
      }

  }




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
