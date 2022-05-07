import React, { useState } from 'react'

export default function Data() {
    
    const [Title, SetTitle] = useState("")
    const [Species, SetSpecies] = useState("")
    const [photo, SetPhoto] = useState("")
    const [wiki, Setwiki] = useState("")
    function Add() {    
    let math = Math.floor((Math.random()*87) + 1)
    let useUrl = (`https://akabab.github.io/starwars-api/api/id/${math}.json`)
    console.log(useUrl);
    fetch(useUrl)
    .then((response) => {
    return response.json();
    }).then((data) => {    
      SetTitle(data.name)
      SetSpecies(data.species)
      SetPhoto(data.image)
      Setwiki(data.wiki)
    })
  
}
  return (
    <div>
    <h1>Random Star war Characters</h1>
    <img src={`${photo}`} alt="starwar" className='img-box' />
    <p className='para'>title:-"{Title}"</p>
    <p className='para'>Species:-"{Species}"</p>
    <p>more info on:- <a href={`${wiki}`} className="anchor">{wiki}</a> </p>
    <p>Click below button to Load Random Star War Character</p>
    <button onClick={Add} className="btn">click Me</button>
     <p>© All Rights Reserved to Ananthoju Shiva Kumar</p> 
    </div>
  )
    
}
