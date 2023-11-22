import LoginMenu from '@/components/LoginMenu';
import styled from '../LogIn/page.module.css'
import Navbar from "@/components/Navbar";

const LogIn = () => {
  return (
    <main className={styled.main}>
      <Navbar />
      <LoginMenu/>
    </main>
  );
};

export default LogIn;
