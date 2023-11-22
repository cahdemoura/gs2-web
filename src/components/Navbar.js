"use client";
import Link from "next/link";
import styled from "./styleModules/Navbar.module.css";
import { UserCircle2 } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [button, setButton] = useState(false);
  const [logado, setLogoado] = useState(true);

  return (
    <>
      <nav className={styled.navbar}>
        <div className={styled.title}>
          <Link href={"/"} className={styled.title}>
            {" "}
            skin<span>Guardian</span>
          </Link>
        </div>
        <div className={styled.menu}>
          {!logado && (
            <Link className={styled.link} href={"./SignIn"}>
              Sign In
            </Link>
          )}

          {!logado && (
            <Link className={styled.link} href={"./LogIn"}>
              Log In
            </Link>
          )}

          {logado && (
            <Link className={styled.link} href={"./SignIn"}>
              Inicio
            </Link>
          )}

          {logado && (
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
