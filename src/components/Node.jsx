import React, { useState } from 'react'
import Draggable from 'react-draggable'; // https://www.npmjs.com/package/react-draggable
import './Node.css'

export default function Node({ id, index, pos, handleRemove }) {
  const [stateName, setStateName] = useState("s" + id.toString())
  const [deleteVisible, setDeleteVisible] = useState(false)

  function renameState() {
    let newName = prompt("New Name", stateName)
    if (newName) setStateName(newName)
  }

  return (
    <Draggable
      bounds="parent"
      grid={[30, 30]}
      defaultPosition={{x: pos[0], y: pos[1]}}
      >
      <div className='state' 
        onContextMenu={(e) => e.preventDefault()}
        onMouseOver={() => setDeleteVisible(true)}
        onMouseLeave={() => setDeleteVisible(false)}>
        {deleteVisible && <div className='delete' onClick={() => handleRemove(index)} />}
        <p onClick={renameState}>{stateName}</p>
      </div>
    </Draggable>
  )
}
