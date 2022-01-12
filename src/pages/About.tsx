import React from 'react'
import { useNavigate } from 'react-router-dom'

const About: React.FC = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi expedita necessitatibus tenetur perferendis repellendus, eum harum accusamus velit qui corrupti.</p>
      <button className='btn btn-primary' onClick={() => navigate('/')}>К списку дел</button>
    </>
  )
}

export default About
