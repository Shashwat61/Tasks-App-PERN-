import React, { useEffect } from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards } from '../redux/actions/boards.actions';


function App() {
    const dispatch=useDispatch()

    useEffect(()=>{
      console.log('app')
        dispatch(fetchBoards())
},[dispatch])
  
  return (

    <div className="max-w-7xl mx-auto">
      <Header/>
    </div>
  )
}


export default App
