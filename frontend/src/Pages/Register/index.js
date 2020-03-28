import React, {useState} from "react";
import "./style.css";
import  logoImg from "../../Assets/logo.svg"
import  {Link, useHistory} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi"
import api from "../../services/api";




export default function Register()
{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [whatsapp,setWhatsapp] = useState("");
    const [city,setCity] = useState("");
    const [uf,setUF] = useState("");
    const history = useHistory();
   async function handleRegister(e)
   {
        
        e.preventDefault();
        const data = {name,email,whatsapp,city,uf};       
       try {
        const response = await api.post("ongs",data);
        //console.log(data);
        alert(`seu ID é ${response.data.id}`);
        history.push("/");
       } catch (error) {
           alert("erro "+ e)
       } 

   }

   return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="be the hero"/>
                <h1>Cadastro</h1>
                <p>Faça o seu cadastro,entre na plataforma
                    e ajude pessoas a encontrar os casos de sua ONG.
                </p>
                <Link className="backLink" to="/">
                <FiArrowLeft size={16} color="#E02041"/>
                já tenho cadastro
            </Link>
            </section>
            <form onSubmit={handleRegister}> 
                <input 
                value={name} 
                onChange={e=>setName(e.target.value)}
                placeholder="Nome da ONG"/>

                <input
                value={email} 
                onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email"/>

                <input 
                value={whatsapp} 
                onChange={e=>setWhatsapp(e.target.value)}
                placeholder="Whatsapp"/>

                <div className="input-group">
                    <input 
                    value={city} 
                    onChange={e=>setCity(e.target.value)}
                    placeholder="Cidade"/>

                    <input
                    value={uf} 
                    onChange={e=>setUF(e.target.value)}
                    placeholder="UF" style={{width:80}} />
                </div>
                <button className="button" type="submit">Cadastrar</button>

            </form>

        </div>

    </div>



   )
}