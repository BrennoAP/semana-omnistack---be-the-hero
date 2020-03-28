import React from "react";
import "./style.css";
import {FiArrowLeft} from "react-icons/fi";
import {Link} from "react-router-dom";
import logoImg from "../../Assets/logo.svg"

export default function NewIncident(){

    return(
        <div className="newInciden-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="be the hero"/>
                <h1>Cadastrar novo caso </h1>
                <p>Descreva o caso detalhadamente
                     para encontrar um heroi para resolver isso
                </p>
                <Link className="backLink" to="/Profile">
                <FiArrowLeft size={16} color="#E02041"/>
                voltar para home
            </Link>
            </section>
            <form>
                <input placeholder="Titulo do caso"/>
                <textarea  placeholder="Descrição do caso"/>
                <input placeholder="valor em Reais"/>

                
                <button className="button" type="submit">Cadastrar</button>

            </form>

        </div>

    </div>
        )
}