import React from 'react'
import Figure from './Figure'
import style from 'styled-components'

const StyledCard = style.div `

  h2 {
    
    text-align: center;
    background-color: royalblue;
    padding: 1rem;
    color: ${pr => pr.$color}
  }

  p {
    background-color: black;
    color: white;
    padding: 1rem;

    &::first-line {
      font-size: 22px;
    }

  }
`

export default function Card (props){
    let {title, image, date, description} = props
    return (
        <StyledCard $color='white' className='card'>
          
          <h2 >{title}</h2>
          <p>{description}</p>

          <Figure 
            image = {image}
            date = {date}
          />

        </StyledCard>
    )
  }