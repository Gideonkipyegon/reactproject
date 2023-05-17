import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import Footer from './components/Footer'
import Sidebar from './SideBar'

function App() {
    return (

        <div class = "container">
        
        <Navbar />
        <div class="navbar">
        <Main />
        <Sidebar />
        </div>
        <Footer />
        </div >
    );
}

export default App;