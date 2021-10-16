import axios from 'axios'
import React, { useEffect } from 'react'
import FormLogin from '../components/FormLogin'
import NavBar from '../components/NavBar'

const LoginPage = () => {

    useEffect(()=>{
        axios.get("/cadastro").then((response) => {
            console.log(response.data);
          });
    },[])  

    return (
        <>
            <NavBar/>
            <FormLogin/>
        </>
    )
}

export default LoginPage
