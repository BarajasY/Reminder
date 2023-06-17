"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCaretRight } from "react-icons/ai";
import style from "../styles/home.module.css";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <motion.div
        className={style.nextButton}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <AiOutlineCaretRight className={style.nextButtonIcon} onClick={() => router.push("/browse")}/>
      </motion.div>
      <div className={style.homeContainer}>
        <div className={style.homeHeader}>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Reminder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Not just a ToDo App
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Home;
