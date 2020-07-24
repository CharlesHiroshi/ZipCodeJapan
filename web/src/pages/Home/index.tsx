import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn, FiPenTool } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import './styles.css'

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Zip Code Japan" />
        </header>
        <main>
          <h1>Consulta de código postal do Japão</h1>
          <p>Acesse o cadastro para ver as funcionalidades do App</p>
          <Link to="/sign">
            <span><FiPenTool /></span>
            <strong>Cadastre-se</strong>
          </Link>
          <p>Ou faça seu login se já fez seu cadastro</p>
          <Link to="/login">
            <span><FiLogIn /></span>
            <strong>Login</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home