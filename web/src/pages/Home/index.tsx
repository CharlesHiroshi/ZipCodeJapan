import React from 'react'
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
          <a href="/sign">
            <span><FiPenTool /></span>
            <strong>Cadastre-se</strong>
          </a>
          <p>Ou faça seu login se já fez seu cadastro</p>
          <a href="/login">
            <span><FiLogIn /></span>
            <strong>Login</strong>
          </a>
        </main>
      </div>
    </div>
  )
}

export default Home