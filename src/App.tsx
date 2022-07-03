import { useState } from 'react';
import './App.css';

function App() {

  const  [subs, setSubs] = useState ([
    {
      nick: "dapelu",
      subMonths: 3,
      avatar: "https://i.pravatar.cc/150?u=dapelu",
      description: "Dapelu hace de moderador a veces"
    },
    {
      nick: "sergio_serrano",
      subMonths: 7,
      avatar: "https://i.pravatar.cc/150?u=sergio_serrano"
    }
  ]);
 
  return (
    <div className="App">
      <h1>Subscriptors List:</h1>
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
