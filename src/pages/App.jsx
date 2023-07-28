import React, { useState, useEffect } from 'react'; // , { useEffect, useRef }
import './App.css';
import Node from '../components/Node';

var currentId = 0;
function App() {
  const [nodeList, setNodeList] = useState([]);
  useEffect(() => {});

  const nodeRadius = 30

  function addNode(event) {
    const localX = event.clientX - event.target.offsetLeft - nodeRadius
    const localY = event.clientY - event.target.offsetTop - nodeRadius
    setNodeList(content => [...content , {id: currentId, pos: [Math.round(localX / nodeRadius) * nodeRadius, Math.round(localY / nodeRadius) * nodeRadius]}]);
    currentId++;
    {/* <Node
    key={currentId}
    id={currentId}
    handleRemove={removeNode}
    pos={[Math.round(localX / nodeRadius) * nodeRadius, Math.round(localY / nodeRadius) * nodeRadius]} /> */}
  }

  function removeNode(index) {
    let clone = [...nodeList]
    clone.splice(index, 1)
    setNodeList(clone);
}

  return (
    <main>
      <div className='container' onDoubleClick={addNode}>
        {nodeList.map((node, i) => <Node key={node.id} id={node.id} index={i} handleRemove={removeNode} pos={node.pos} />)}
      </div>
    </main>
  );
}

export default App;
