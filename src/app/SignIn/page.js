import Navbar from "@/components/Navbar";
import SigninMenu from "@/components/SigninMenu";
import React from "react";
import '../globals.css'

const page = () => {
  return (
    <div className='main'>
      <Navbar />
      <SigninMenu/>
    </div>
  );
};

export default page;
