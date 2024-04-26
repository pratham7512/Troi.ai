import React, { useState, useEffect } from 'react';

const ColorChangingCircle = () => {
 const [color, setColor] = useState('bg-white');
 const colors = ['bg-sky-500', 'bg-green-500', 'bg-red-500'];
 let currentColorIndex = 0;

 useEffect(() => {
    const interval = setInterval(() => {
      // First, set the color to white
      setColor('bg-white');

      // Use setTimeout to delay the change to the next color
      setTimeout(() => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        setColor(colors[currentColorIndex]);
      }, 1500); // Delay for 0.5 seconds to make the transition to white smooth
    }, 3000); // Change color every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
 }, []);

 return (
    <div className={`${color} h-10 w-10 rounded-full animate-spin transition-colors duration-500`}></div>
 );
};

export default ColorChangingCircle;
