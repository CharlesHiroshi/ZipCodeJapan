import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logo from '../../assets/logo.svg'

const CreateUser = () => {
  return (
    <div id="page-create-user">
      <header>
        <img src={logo} alt="Zip Code Japan" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para página Home
        </Link>
      </header>
      <form>
        <h1>Cadastro de Usuário</h1>
        <fieldset>
          <legend><h2>Dados</h2></legend>
          <div className="field">
            <label htmlFor="name">Nome do usuário</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail do usuário</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="phone">Telefone do usuário</label>
              <input type="text" name="phone" id="phone" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="zipcode">Código Postal</label>
            <input type="text" name="zipcode" id="zipcode" />
            <p>Digite somente os números do código postal</p>
          </div>
          <div className="field">
            <label htmlFor="prefecture">Província</label>                  <input type="text" name="prefecture" id="prefecture" />
          </div>
          <div className="field">
            <label htmlFor="city">Cidade</label>
            <input type="text" name="city" id="city" />
          </div>
          <div className="field">
            <label htmlFor="complement">Complemento</label>
            <input type="text" name="complement" id="complement" />
          </div>
        </fieldset>
        <button type="submit">Cadastrar Usuário</button>
      </form>
    </div>
  )
}

export default CreateUser