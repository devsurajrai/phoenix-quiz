import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TwopiRest from 'twopi-rest';

import { sample_requests } from './backend/sample-requests';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TwopiRest preset={sample_requests} />
    </div>
  )
}

export default App
