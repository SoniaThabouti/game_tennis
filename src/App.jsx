/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App*/

import {Html} from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import './App.css';
import Three from './component/three';
import { useState } from 'react';
import './App.css'
import Page1 from './component/three/page1';
//import { Button, } from 'react-bootstrap';
//import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';


function App() {
  return (
/*<Router>
  <Switch>
    <Route>
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={null}>
        <Three/>
      </Suspense>
    </Canvas>
    </Route>
    
    <Route>
      <Page1/>
    </Route>
    </Switch>
  </Router>*/

  <Page1/>

    

  )
}

export default App