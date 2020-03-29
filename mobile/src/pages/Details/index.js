import React from "react";
import {View,Image,TouchableOpacity,Text} from "react-native";
import style from "./style"
import { Feather} from "@expo/vector-icons"
import logoImg from "../../assets/logo.png"

export default function Details()
{

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={()=>{}}>
                    <Feather name="arrow-left" size={28} color={"#e82041"} />
                </TouchableOpacity>
            </View>

            <View style={style.incident}>
                        <Text style={style.incidentProperty}>ONG:</Text>
                        <Text style={style.incidentValue}>APAD</Text>

                        <Text style={style.incidentProperty}>Caso:</Text>
                        <Text style={style.incidentValue}>caso teste</Text>

                        <Text style={style.incidentProperty}>Valor:</Text>
                        <Text style={style.incidentValue}>120,00</Text>
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia</Text>
                <Text style={style.heroTitle}>Seja o heroi desse caso</Text>

                <Text style={style.heroDescription}>Entre em contato:</Text>
                <View style={style.actions}>
                    <TouchableOpacity style={style.actions} onPress={()=>{}}>
                        <Text style={style.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}