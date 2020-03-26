import React from "react";
import './style.css' 
import  heroesImg from "../../Assets/heroes.png"
import  logoImg from "../../Assets/logo.svg"
import {FiLogIn} from "react-icons/fi"


export default function Logon()
{
    return (
    <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="logo" />
        </section>
        <img src={heroesImg} alt="hero"/>
        <form >
            <h1>faça seu logon</h1>
            <input placeholder="Sua ID" />
            <button type="submit">Entrar</button>
            <a href="/register">
                <FiLogIn size={16} color="#E02041"/>
                não tenho cadastro
            </a>
        </form>

    </div>
    );
}