import React from 'react'
import { useState } from 'react'

function MemoCount() {
    const[ count , setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button>
        Increment
      </button>
    </div>
  )
}

export default MemoCount
