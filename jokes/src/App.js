import React from 'react';
import Joke from './jokes';

const App=()=>{
  const jokes=[
    {id:1,setup:'setup',punchline:'puchline'},
    {id:2,setup:'setup',punchline:'puchline'},
    {id:3,setup:'setup',punchline:'puchline'}
  ]
  return(
    <div>
      {jokes.map(joke =>(
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline}/>
      ))}
    </div>
  )
};
export default App;