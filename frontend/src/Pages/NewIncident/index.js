import React from "react";
import "./style.css";
import {FiArrowLeft} from "react-icons/fi";
import {Link, useHistory} from "react-router-dom";
import logoImg from "../../Assets/logo.svg"
import { useState } from "react";
import api from "../../services/api"

export default function NewIncident(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const ongId = localStorage.getItem("ongId");
    const history = useHistory();

    function handleNewIncident(e)
    {
        const data = 
        {
            title,
            description,
            value,
        }
       e.preventDefault();
        try {
            api.post("incidents", data,
            {
                headers: {
                    Authorization:ongId,
                }
            })
        history.push("/profile");
        } catch (error) {
            alert("erro ao cadastrar novo caso");
        }


    }

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
            <form onSubmit={handleNewIncident}>
                <input 
                placeholder="Titulo do caso"
                value={title}
                onChange={e=>setTitle(e.target.value)}
                />
                <textarea  
                placeholder="Descrição do caso"
                value={description}
                onChange={e=>setDescription(e.target.value)}
                />
                <input 
                placeholder="valor em Reais"
                value={value}
                onChange={e=>setValue(e.target.value)}
                />

                
                <button className="button" type="submit">Cadastrar</button>

            </form>

        </div>

    </div>
        )
}