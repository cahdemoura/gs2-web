import Navbar from "@/components/Navbar";
import SigninMenu from "@/components/SigninMenu";
import React from "react";
import '../globals.css'
import Rodape from '@/components/Rodape/Rodape';

const page = () => {
  return (
    <div className='main'>
      <Navbar />
      <SigninMenu/>
      <Rodape/>
    </div>
  );
};

export default page;
