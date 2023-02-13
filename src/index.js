import React from 'react'
import {createRoot} from 'react-dom/client'
import GifCounterApp from './GIF-APP';
import './index.css';


const divRoot = document.querySelector('#root');

const root=createRoot(divRoot);


root.render(<GifCounterApp />)