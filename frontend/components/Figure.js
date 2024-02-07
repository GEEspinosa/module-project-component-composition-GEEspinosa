import React from 'react'
import style from 'styled-components'
//import Card from './Card'

const StyledFigure = style.figure`
    background-color: black;

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
        border: 1px solid white;
    }

    h3{
        background-color: black;
        color: white;
        padding: 1rem;
        text-align: center;
    }
`

export default function Figure(props) {
    let {image, date} = props
    return (
        <StyledFigure>
        <img src={image} class='center'/>
        <h3>Taken {date}</h3>
      </StyledFigure>
    )
}