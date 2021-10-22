import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FormLogin from '../components/FormLogin'
import NavBar from '../components/NavBar'

const LoginPage = () => {
    const [user, setUser] = useState({
        email:"",
        senha:""
    })

    const [validate, setValidate] = useState()

    const [route , setRoute] = useState("")

    useEffect(()=>{
        axios.get("/cadastro").then((res) => {
            
            setValidate(res.data)
            console.log(res.data)
          }).catch((e)=>{
            console.log(e)
          });
    },[]) 

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

    const validacao = () => {
    
        validate.forEach((validator)=>{

            if(user.email == validator.email && user.senha == validator.senha){
                if(validator.crp == null && validator.rm == null){
                    setRoute("/chatBot")
                }else{
                    setRoute("/chatPsi")
                }
            }else{
                return false
            }
            
        })
    }

    return (
        <>
            <NavBar/>
            <FormLogin 
            vlEmail={user.email} onChangeEmail={handleChange}
            vlSenha={user.senha} onChangePassword={handleChange}
            click={validacao}
            login={route}
            />
        </>
    )
}

export default LoginPage