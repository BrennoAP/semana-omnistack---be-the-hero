import React, { useState } from "react";
import './style.css' 
import  heroesImg from "../../Assets/heroes.png"
import  logoImg from "../../Assets/logo.svg"
import {FiLogIn} from "react-icons/fi"
import { Link,useHistory } from "react-router-dom"
import api from "../../services/api"


export default function Logon()
{
    const [id,setId] = useState("");
    const history = useHistory();

   async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post("session", {id});
            localStorage.setItem("ongId",id);
            localStorage.setItem("ongName",response.data.name);
            history.push("/profile");

        } catch (error) {
            alert("falha ao logar "+ error);
        }

    }
    return (
    <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="logo" />
        
        <form onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>
            <input 
            value ={id}
            onChange={e=>setId(e.target.value)}
            placeholder="Sua ID" />
            <button className="button"type="submit">Entrar</button>

            <Link className="backLink" to="/register">
                <FiLogIn size={16} color="#E02041"/>
                não tenho cadastro
            </Link>
        </form>
        </section>
        <img src={heroesImg} alt="hero"/>

    </div>
    );
}