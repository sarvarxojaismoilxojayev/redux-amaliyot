import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [value, setValue] = useState('')

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  if(state.value.length === 0) {
    dispatch({type: "none"})
  }

  const click = (e) => {
       e.preventDefault()
        dispatch({type: "change", payload: value})
        e.target.reset()
  }



  return (
    <div className="App">
      <form onSubmit={click}>
      <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="name" className='input'/>
      <button onClick={click}>Submit</button>
      <h1>{state.value}</h1>
      </form>
    </div>
  )
}

export default App
