import Login from "./components/Login";
import Profile from "./components/Profile";
import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import  './App.css'
function App() {
  

  return (
    <UserContextProvider>
      <h1> Rohit Maske</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
