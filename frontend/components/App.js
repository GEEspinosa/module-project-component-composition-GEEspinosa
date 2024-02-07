import React, { useState, useEffect} from 'react'
import Header from './Header.js'
import Card from './Card.js'
import axios from "axios"
import style from "styled-components"


const key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${key}`

const StyledSection = style.section`
  header {
    background-color: black;
    
  }

  h1 {
    color: blue;
    background-color: black;
    font-size: 50px;
    
  }
`

function App() {
const [daily, setDaily] = useState()

useEffect (() => {
  function fetchImage(){
    axios.get(URL)
      .then (res => {
        console.log(res.data)
        setDaily(res.data)

      })
      .catch (err => {
        console.log(err.message)
      })  
  }
  fetchImage()
}, [])

if (!daily) {
  return '...loading'
}

  return (
    
    
    <StyledSection>
      <Header />
      <Card 
        title = {daily.title}
        image = {daily.url}
        date  = {daily.date}
        description = {daily.explanation}
      />
    </StyledSection>
    
  )
}

export default App
