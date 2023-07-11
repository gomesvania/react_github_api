import BackBtn from "../componentes/BackBtn"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./Repos.module.css";

const Repositorios = () => {
  const { username } = useParams();

  return (
    <>
      <BackBtn />
      <h1>Repositórios</h1>
    </>
  );
};

export default Repositorios;