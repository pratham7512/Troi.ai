import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Our Landing Page</h1>
                
                <Link to="/login">
                    <button>Login</button>
                </Link>
                
            </header>
        </div>
    );
}

export default LandingPage;
