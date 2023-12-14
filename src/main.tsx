import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ThemeProvider } from "@mui/material/styles"; 
import {FirebaseAppProvider} from 'reactfire';
import 'firebase/auth';


// internal imports 
import { Home, Shop, Cart, Info, Auth , Weather, Image} from './components'; 
import './index.css';
import { theme } from './Theme/themes';
import { firebaseConfig } from './fireBaseConfig';  

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>


    <ThemeProvider theme = { theme }> 
      <Router>
        <Routes>
          <Route path='/' element={<Home title = {"Hearst United Fundation"}/>} />
          <Route path='/auth' element={<Auth title = {"Hearts United Fundation"}/>} /> 
          <Route path='/info' element={<Info />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wheather' element={<Weather/>} />
          <Route path='/image' element= {<Image/>} />
          
        </Routes>
      </Router>
    </ThemeProvider> 
  </FirebaseAppProvider>
  </React.StrictMode>,
)