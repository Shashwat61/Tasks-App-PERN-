import React, { useEffect } from 'react';
import Header from "./components/Header"
import { useDispatch } from 'react-redux';
import { fetchBoards } from '../redux/actions/boards.actions';


function App() {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchBoards())
},[])
  
  return (

    <div className="mx-auto max-w-7xl">
      <Header/>
    </div>
  )
}


export default App
