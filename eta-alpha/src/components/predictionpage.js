import React from 'react';
import prediction from './PPE.png';
import STF from './STF.png';
import Hotwork from './Hotwork.png';
import Plant from './Plant.png';
import Emergency from './Emergency.png';
import Home from './SweetHome.png';
import { useLocation } from 'react-router-dom';
    function PredictionPage() {
        const location = useLocation();
        const { videoURL } = location.state; 
    return (
        <div className="bg-black h-screen"> {/* Set the overall background color */}
            <div className="ml-5 mt-4">
                <h1 className="text-white text-4xl font-bold">ETA Alpha</h1>
            </div> 
            <div style={{ position: 'absolute', top: 40, right: 20 }}>
                {videoURL && (
                    <video controls width="300">
                        <source src={videoURL} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
                
            <div className="absolute inset-x flex justify-end items-left ml-10 mb-96 mt-32">
                    <img src={Home} alt="Sample Image" className="w-10 h-10" />
                </div>
            <div className="flex justify-center items-center h-full lg:pt-44 pb-20">
                <div className="w-11/12 bg-white rounded-lg  ">
                    <div className="flex flex-wrap justify-around">
                        {/* Box */}
                        <div className="relative bg-black w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-44 m-4 rounded-xl">
                        <img src={prediction} alt="Sample Image" className="w-40 h-100" />
                            <p className="text-white text-center absolute bottom-32 left-32 right-0 font-medium text-2xl">PPE</p> 
                            <button className="bg-gray-400 rounded-xl w-10 h-10 absolute top-0 right-0 mt-20 mr-10 text-2xl"> 10 </button> {/* Positioned to top right */}
                        </div>
                         {/* Box */}
                         <div className="relative bg-black w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-44 m-4 rounded-xl">
                        <img src={prediction} alt="Sample Image" className="w-40 h-100" />
                            <p className="text-white text-center absolute bottom-32 left-32 right-0 font-medium text-2xl">PPE</p> 
                            <button className="bg-gray-400 rounded-xl w-10 h-10 absolute top-0 right-0 mt-20 mr-10 text-2xl"> 10 </button> {/* Positioned to top right */}
                        </div>
                        <div className="relative bg-black w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-44 m-4 rounded-xl">
                        <img src={STF} alt="Sample Image" className="w-40 h-100 mt-2" />
                            <p className="text-white text-center absolute bottom-32 left-32 right-0 font-medium text-2xl">STF's</p> 
                            <button className="bg-gray-400 rounded-xl w-10 h-10 absolute top-0 right-0 mt-20 mr-10 text-2xl"> 10 </button> {/* Positioned to top right */}
                        </div>
                        <div className="relative bg-black w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-44 m-4 rounded-xl">
                        <img src={Hotwork} alt="Sample Image" className="w-25 h-32 mt-2 ml-3" />
                            <p className="text-white text-center absolute bottom-32 left-32 right-0 font-medium text-2xl">Hot Works</p> 
                            <button className="bg-gray-400 rounded-xl w-10 h-10 absolute top-0 right-0 mt-20 mr-10 text-2xl"> 10 </button> {/* Positioned to top right */}
                        </div>
                        <div className="relative bg-black w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-44 m-4 rounded-xl">
                        <img src={Plant} alt="Sample Image" className="w-40 h-100" />
                            <p className="text-white text-center absolute bottom-32 left-32 right-0 font-medium text-2xl">Plant Works</p> 
                            <button className="bg-gray-400 rounded-xl w-10 h-10 absolute top-0 right-0 mt-20 mr-10 text-2xl"> 10 </button> {/* Positioned to top right */}
                        </div>
                        <div className="relative bg-black w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-44 m-4 rounded-xl">
                        <img src={Emergency} alt="Sample Image" className="w-40 h-100" />
                            <p className="text-white text-center absolute bottom-32 left-32 right-0 font-medium text-2xl">PPE</p> 
                            <button className="bg-gray-400 rounded-xl w-10 h-10 absolute top-0 right-0 mt-20 mr-10 text-2xl"> 10 </button> {/* Positioned to top right */}
                        </div>
                       
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PredictionPage;
