"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./styleModules/LoginMenu.module.css";

const url = 'http://localhost:3000/usuario';

const LoginMenu = ({ userNow }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [usuarios, setUsuarios] = useState([])
  const [autenticado, setAutenticado] = useState(false)
  const [actualUser, setActualUser] = useState('')
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setUsuarios(data)
    }
    fetchData()
  }, [])

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('nome');
    console.log(usuarios);
    for (let i = 0; i < usuarios.length; i++) {
      if (email == usuarios[i].email && password == usuarios[i].password) {
        const rNome =usuarios[i].nome;
        setNome(usuarios[i].nome)
        console.log(rNome)
        setAutenticado(true)
        setActualUser(rNome)
        userNow(actualUser,autenticado)
        console.log("atual user:",actualUser)
        return
      }
      else {
        console.log("errou")
        setAutenticado[false]
      }
    }
    
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    // ...

    if (autenticado) {
      // Redireciona para a página desejada se autenticado for true
      console.log('Esta autenticado')
      //router.push('./'); // Substitua '/outra-pagina' pelo caminho da sua outra página

    }
  }, [autenticado]);



  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label className={style.input}>
            <span>Email</span>
            <input
              type="text"
              placeholder="xxxxx@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={style.input}>
            <span>senha</span>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <input
            className={style.button}
            type="submit"
            value={"Entrar"}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default LoginMenu;
