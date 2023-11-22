"use client";
import LoginMenu from '@/components/LoginMenu';
import styled from '../LogIn/page.module.css'
import Navbar from "@/components/Navbar";
import '../globals.css'
import { useState,useEffect } from 'react';

const LogIn = () => {
  const [logado, setLogado] = useState(false)
  const [user, setUser] = useState()

  const handleUser = (userActual, verificado) => {
    console.log("logado ainda é:",logado)
    if (logado===false) {
      console.log("Logado mudou para:",logado)
      setUser(userActual)
      setLogado(verificado)
    }
  }

  useEffect(()=>{
    console.log('PaginaLogin Verificando logado',logado)
  
  },[logado])
  
  return (
    <main className={'main'}>
      <Navbar perfillogado={logado} />
      <LoginMenu userNow={handleUser} />
    </main>
  );
};

export default LogIn;
