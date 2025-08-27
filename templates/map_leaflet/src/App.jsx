import React,{useEffect} from 'react'
export default function App(){useEffect(()=>{const m=window.L.map('map').setView([0,0],2);window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(m)},[]);return(<div><h1>{{TITLE}}</h1><div id='map' style={{height:'80vh'}}></div></div>)}
