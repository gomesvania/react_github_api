// import RepoProps from "../types/repo";
import Loader from "../componentes/Loader";
import BackBtn from "../componentes/BackBtn";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./Repos.module.css";
import { RepoProps } from "../types/repo";

const Repo = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepo = async function (username: string) {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await res.json();

      setIsLoading(false);

      let orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );

      orderedRepos = orderedRepos.slice(0, 5);

      setRepos(orderedRepos);

      if (username) {
        loadRepo(username);
      }
    };
  }, []);

  if (!repos && isLoading) return <Loader />;

  return (
    <div>
      <BackBtn />
      <h2>Explore os repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios</p>}
      {repos && repos.length > 0 && (
        <div>
          {repos.map((repos: RepoProps) => (
            <Repo key={repos.name} {...repos} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repo;
