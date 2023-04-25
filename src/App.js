import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom' 
import Error from './Error'
import Home from './Home'
import SingleMovie from './SingleMovie'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/movie/:id" element= {<SingleMovie/>}/>
        <Route path="*" element= {<Error/>}/>
      </Routes>
    </>
  )
}

export default App