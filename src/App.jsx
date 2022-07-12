import React, { useState } from 'react';
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import './styles.css';

const App = () => {
    const [bgColor, setBgColor] = useState('bg-blue')

    return (
        <div className={`${bgColor} h-screen w-screen`}>
            <Navbar />
            <Home setBg={color => setBgColor(color)} />
        </div>
    )
}

export default App