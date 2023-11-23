"use client";
import { useState ,useEffect} from "react";
import style from "./styleModules/SigninMenu.module.css";

const url = 'http://localhost:3000/usuario';

const SigninMenu = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const[usuarios,setUsuarios]=useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setUsuarios(data)
    }
    fetchData()
  }, [])
  
  const handleLogin = async (e) => {
    e.preventDefault();

    const usuario = {
      nome,
      email,
      password
    }
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      })
      
      console.log(nome, email, password);
      const addUser = await res.json();
      setUsuarios((prevUsers)=>[...prevUsers,addUser])

      console.log(res);

      setNome("");
      setEmail("");
      setPassword("");
    }
    catch (error) {
      console.log('v')
    }
  }
  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
        <h2>Criar conta</h2>
        <form onSubmit={handleLogin}>
          <label className={style.input}>
            <span>Nome</span>
            <input
              type="text"
              placeholder="fernando"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
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
            value={"Criar"}
          ></input>
        </form>
      </div>
    </div>
  );
};
export default SigninMenu;
