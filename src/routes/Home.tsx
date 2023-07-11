import { useState } from "react";
import Search from "../componentes/Search";
import User from "../componentes/User";
import Error from "../componentes/Error";
import Loader from "../componentes/Loader";

import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [loading,setLoading] = useState(false);

  const errorMessage = 'Oops! Algo deu errado.';

  const loadUser = async (userName: string) => {
    setLoading(true);
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    setLoading(false);

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  }

  return (
    <div>
      <Search loadUser={loadUser} />
      
      {loading &&
         <Loader />
      }
     
      {user &&
        <p> <User {...user} /> </p>
      }

      {error && 
      <p> <Error error={errorMessage} /> </p>}
    </div>
  );
};

export default Home;