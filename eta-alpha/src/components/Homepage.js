// Home.js
// Home.js

import React from 'react';
import Images from './Home.png';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate=useNavigate();
    const handleStartDemo = () => {
        console.log("button clicked");
        navigate('/demo');
      };
  return (
    <div>
    <div className="ml-5 mt-4"> {/* Adjust the value to your preference */}
      <h1 className="text-white text-4xl font-bold">ETA Alpha</h1>
    </div>
    <div className="flex justify-center items-center h-screen">
      <div className="text-left mr-44 pr-56 mb-56">
        <h1 className="text-white text-5xl font-bold font-inter">Revolutionise Safety <br/> Complains With Ai</h1>
        <p className="text-gray-500 mt-6 text-lg font-inter text-left">Al-enhanced CCTV systems provide real-<br/> time safety monitoring by analyzing footage <br/> for anomalies,detecting intrusions,ensuring<br/>
        secure environments, and alerting<br/> authorities promptly,enhancing overall,<br/> security and response efficieny.</p>
      </div>
      <div className="absolute left-0 bottom-0 mb-20 ml-44 z-10">
{/*   
    <button className="text-white font-bold text-2xl bg-green-500 rounded-md px-4 py-4 hover:bg-green-600">
      START DEMO
    </button> */}

<button onClick={handleStartDemo} className="text-white font-medium text-xl bg-green-500 rounded-md px-4 py-4 hover:bg-green-600 cursor-pointer ">
            START DEMO
          </button>
</div>

      <div className="absolute inset-0 flex justify-end items-left mr-10  mt-44">
          <img src={Images} alt="Sample Image" className="w-200 h-100" />
        </div>
    </div>
    </div>
  );
}

export default Home;