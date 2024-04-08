// import React from 'react';

// import { BrowserRouter as Router, Route, Routes, Navigate ,} from 'react-router-dom';


// import Homepage from './components/Homepage.js';
//  import Demopage from './components/Demopage.js';
// // Use lowercase for the file name
// import VideoPage from './components/VideoPage'; // Use uppercase for the file name




// function App() {
//   return (
//     <Router>
  
//       <Routes>
//       <Route  exact path='/' element={<Homepage/>} />
  
//          <Route exact path='/demo' element={<Demopage/>} />
//       <Route exact path='/VideoPage' element={<videoPage/>} />
//         {/* <Route exact path='/filter' element={<FilterPage/>} />
//         <Route exact path='/result' element={<ResultPage/>} />
//        */} 
//       <Route path="*" element={<Navigate to="/" />}></Route>
//       </Routes>
      
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Demopage from './components/Demopage.js';
import VideoPage from './components/videopage.js';
import Predictionpage from './components/predictionpage.js'; // Correct casing for the file name

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/demo' element={<Demopage />} />
        <Route exact path='/VideoPage' element={<VideoPage />} /> 
        <Route exact path='/Predictionpage' element={<Predictionpage />} /> {/* Use uppercase for component name */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
