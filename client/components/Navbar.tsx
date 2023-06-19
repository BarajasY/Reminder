"use client"
import React, {useState} from "react";
import style from "../styles/navbar.module.css";
import { AiOutlineBlock } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [AddActive, setAddActive] = useState(false)
    const router = useRouter();

  return (
    <>
    <div className={style.navbarContainer}>
      <div className={style.navbarContent}>
        <AiOutlineBlock className={style.navbarIcon} id={style.browse} onClick={() => router.push("/browse")}/>
        <IoMdAdd  className={style.navbarIcon} id={style.add} onClick={() => setAddActive(!AddActive)}/>
      </div>
    </div>
    {AddActive
      ?
      <div className={style.navbarAddArticle}>
        <h1>Hola</h1>
      </div>
      :
      null
    }
    </>
  );
};

export default Navbar;
