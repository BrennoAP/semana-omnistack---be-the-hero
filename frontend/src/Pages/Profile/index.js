import React from "react";
import "./style.css";
import {FiPower,FiTrash2} from "react-icons/fi";
import LogoImg from "../../Assets/logo.svg";
import {Link} from "react-router-dom";



export default function Profile(){

    return(
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt = "be the hero" />
                <span>Bem Vinda, APAD</span>

                <Link className="button" to="/Incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" /> 
                </button>
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>


                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>


                <li>
                    <strong>CASO</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    );


}