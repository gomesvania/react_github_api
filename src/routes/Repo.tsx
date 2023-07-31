// import RepoProps from "../types/repo";
import Loader from "../componentes/Loader";
import BackBtn from "../componentes/BackBtn"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./Repos.module.css";

const Repo = () => {
  const { username } = useParams();
  // const [repos, setRepos] = useState<RepoProps[] || [] || null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { 
    const loadRepo = async function (username: string) {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await res.json();

      setIsLoading(false);

      // setRepos(data);

      if (username) {
        loadRepo(username)
      }
    }
   },[]);

  return (
    <>
      <BackBtn />
      <h1>Repositórios</h1>
    </>
  );
};

export default Repo;