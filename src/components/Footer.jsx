import React from 'react'

import fb from '../assets/img/fb.svg'
import instagram from '../assets/img/instagram.svg'

const Footer = () => {

  return (
    <footer className='footer'>
      <div className='container'>
        <div>
          <p>© little italia 2022</p>
        </div>
        <div className='social'>
          <a href='#'>
            <img width={30} src={fb} alt='facebook'/>
          </a>
          <a href='#'>
            <img width={30} src={instagram} alt='instagram' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
