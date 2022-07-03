import { useState, useEffect } from 'react';
import './App.css';

const INITIAL_STATE = [{
  nick: "dapelu",
  subMonths: 3,
  avatar: "https://i.pravatar.cc/150?u=dapelu",
  description: "Dapelu hace de moderador a veces"
},
{
  nick: "sergio_serrano",
  subMonths: 7,
  avatar: "https://i.pravatar.cc/150?u=sergio_serrano"
}]

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

function App() {
  const  [subs, setSubs] = useState <Array<Sub>> ([]);

  useEffect (()=>{
    setSubs(INITIAL_STATE)
  }, [])
 
  return (
    <div className="App">
      <h1>Subscribers List:</h1>
      <ul>
        {
          subs.map((eachSub)=>{
            return (
              <li key={eachSub.nick} >
                <img src={eachSub.avatar} alt={`Avatar for ${eachSub.nick}`} />
                <h4>{eachSub.nick} (<small>{eachSub.subMonths} months</small>) </h4>
                <p>{eachSub.description?.substring(0, 100)} </p>
              </li>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;
