import React from 'react';
import { Link } from 'react-router-dom';
import ColorChangingCircle from '../components/circle';
import logo from '../assets/logo.png';

function LandingPage() {
    // Sample object with arrays
    const data = {
        "1": ["Element 1", "Element 2", "Element 3"],
        "2": ["Element 4", "Element 5", "Element 6"],
        // Add more strings and their associated arrays as needed
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/5 bg-bl flex flex-col justify-between">
                <div className="flex justify-start items-center ml-9 mt-7">
                    <ColorChangingCircle/>
                    <img className="h-14 w-450" src={logo}/>
                </div>
                <div className="h-3/4 bg-red flex flex-col justify-center">
                    <div className="text-white mx-9">Log out</div>
                </div>
            </div>
            <div className="w-4/5 bg-black flex flex-col">
                <div className="h-1/4 hover:bg-rr flex justify-center items-center border-b-2 border-bl transition-all hover:border-none">
                    <Link to="/success">
                        <button className="px-5 py-3 rounded-lg text-lg text-center bg-white text-black transition-none hover:bg-gr">start interview</button>
                    </Link>
                </div>
                <div className="h-3/4 bg-black overflow-y-auto scrollable-content">
                {/* Map over the object to render each string and link to the Chat page */}
                {Object.keys(data).map((key, index) => (
                    <Link key={index} to={`/chat/${key}`}>
                        <div className="px-5 py-2 m-5 text-white bg-red-black text-xl hover:bg-bl rounded-lg transition-none">{key}</div>
                    </Link>
                ))}
            </div>
            </div>
        </div>
    );
}

export default LandingPage;

