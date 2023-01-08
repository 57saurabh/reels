import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

function Feeds() {
  const {logout} = useContext(AuthContext);

  return (
    <div>
        <h1>Feeds</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Feeds
