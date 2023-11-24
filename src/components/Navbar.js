"use client";
import Link from "next/link";
import styled from "./styleModules/Navbar.module.css";
import { UserCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = ({perfillogado}) => {
  const [button, setButton] = useState(false);
  const[logado,setLogado]=useState(perfillogado);

useEffect(()=>{
  console.log('Navbar Verificando logado',logado)

},[logado])

  return (
    <>
      <nav className={styled.navbar}>
        <div className={styled.title}>
          <Link href={""} className={styled.title}>
            {" "}
            skin<span>Guardian</span>
          </Link>
        </div>
        <div className={styled.menu}>
          {!perfillogado && (
            <Link className={styled.link} href={"./SignIn"}>
              Sign In
            </Link>
          )}

          {!perfillogado && (
            <Link className={styled.link} href={"./LogIn"}>
              Log In
            </Link>
          )}

          {perfillogado && (
            <Link className={styled.link} href={"./SignIn"}>
              Inicio
            </Link>
          )}

          {perfillogado && (
            <Link className={styled.link} href={"./SignIn"}>
              Logout
            </Link>
          )}

          <span
            className={styled.perfil}
            onMouseOver={() => setButton(true)}
            onMouseLeave={() => setButton(false)}
          >
            <UserCircle2 />
            {button && (
              <Link className={styled.linkButton} href={""}>
                Perfil
              </Link>
            )}
          </span>
        </div>
      </nav>
      <div className={styled.border}></div>
    </>
  );
};

export default Navbar;
