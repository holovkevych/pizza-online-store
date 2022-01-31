import React from 'react'
import { Link } from 'react-router-dom'

//import { CartItem, Button } from '../components'
import acceptedImg from '../assets/img/accepted.png'


const AcceptedOrder = () => {
	
	return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Ваше замовлення прийнято <i>❤</i></h2>
        <p>
          Очікуйте на кур'єра.<br />
          Смачного!
        </p>
        <img height={300} width={200} src={acceptedImg} alt="accepted image" />
        <Link to="/" className="button button--black">
          <span>На головну</span>
        </Link>
      </div>
    </div>
    )
}

export default AcceptedOrder