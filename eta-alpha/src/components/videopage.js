
// import React, { useState } from 'react';

// const VideoDisplay = () => {
//     const [videoURL, setVideoURL] = useState(null);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         const url = URL.createObjectURL(file);
//         setVideoURL(url);
//     };

//     return (
//         <div className="flex flex-col ">
//             <div className="ml-5 mt-4">
//                 <h1 className="text-white text-4xl font-bold">ETA Alpha</h1>
//             </div>
//             <h1>Display a Video</h1>
//             <div className="flex justify-center">
//                 <button className="text-white font-medium text-1
//                 xl bg-green-500 rounded-md px-4 py-4 hover:bg-green-600 " onClick={() => document.querySelector('input[type="file"]').click()}>UPLOAD VIDEO</button>
//             </div>
//             {/* Display video centered and with some space below */}
//             {videoURL && (
//                 <div className="flex justify-center mt-10">
//                     <video controls width="700">
//                         <source src={videoURL} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             )}
//             {/* Modified the input element to change the button text */}
//             <input type="file" accept="video/*" onChange={handleFileChange} style={{ display: 'none' }} />
//         </div>
//     );
// };

// export default VideoDisplay;



// import React, { useState } from 'react';
// import { useNavigate} from 'react-router-dom';

// const VideoDisplay = () => {
//     const [videoURL, setVideoURL] = useState(null);
//     const [submitted, setSubmitted] = useState(false); // State to track if video is submitted
//     const navigate = useNavigate();

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         const url = URL.createObjectURL(file);
//         setVideoURL(url);
//     };

//     const handleSubmit = () => {
//         // Handle video submission logic here
//         setSubmitted(true); 
//         navigate('/predictionpage');// Set submitted to true
//     };

//     return (
//         <div className="flex flex-col">
//             <div className="ml-5 mt-4">
//                 <h1 className="text-white text-4xl font-bold">ETA Alpha</h1>
//             </div>
//             <h1>Display a Video</h1>
//             <div className="flex justify-center">
//                 <button className="text-white font-medium text-xl bg-green-500 rounded-md px-4 py-4 hover:bg-green-600" onClick={() => document.querySelector('input[type="file"]').click()}>UPLOAD VIDEO</button>
//             </div>
//             {/* Display video centered and with some space below */}
//             {videoURL && (
//                 <div className="flex justify-center mt-10">
//                     <video controls width="700">
//                         <source src={videoURL} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             )}
//             {/* Display submit button if video is uploaded */}
//             {videoURL && !submitted && (
//                 <div className="flex justify-center mt-10">
//                     <button className="text-white font-medium text-xl bg-green-500 rounded-md px-4 py-4 hover:bg-green-600" onClick={handleSubmit}>SUBMIT</button>
//                 </div>
//             )}
//             {/* Show message after video is submitted */}
//             {submitted && <p className="text-green-500 text-center mt-4">Video submitted successfully!</p>}
//             {/* Modified the input element to change the button text */}
//             <input type="file" accept="video/*" onChange={handleFileChange} style={{ display: 'none' }} />
//         </div>
//     );
// };

// export default VideoDisplay;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function VideoPage() {
    const location = useLocation();
    const { videoURL } = location.state; // Destructure videoURL from location.state
    const navigate = useNavigate();

    const handlePrediction = () => {
        navigate('/predictionpage', { state: { videoURL } }); // Pass videoURL as state when navigating
    };

    return (
        <div>
            <div className="ml-5 mt-4">
                <h1 className="text-white text-4xl font-bold">ETA Alpha</h1>
            </div> 

            <div className="flex flex-col items-center justify-center h-screen">
                <div className="mt-0 mb-10"> {/* Adjusted margin top and bottom */}
                    <div className="text-white font-medium text-xl bg-gray-400 rounded-md px-4 py-4 hover:bg-green-600 cursor-pointer mr-4">
                        UPLOAD VIDEO
                    </div>
                </div>

                <div>
                    {videoURL && (
                        <video controls width="900">
                            <source src={videoURL} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
                <button 
                    className="text-white font-medium text-xl bg-green-500 rounded-md px-4 py-4 hover:bg-green-600 cursor-pointer "
                    onClick={handlePrediction} // Call handlePrediction function when clicked
                    style={{ transition: 'background-color 0.3s ease' }} // Add transition effect
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
}

export default VideoPage;
