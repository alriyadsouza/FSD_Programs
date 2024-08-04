import React from'react';
import CustomList from './CustomList';

const App=()=>{
  const animals=['dog', 'cat', 'bul','horse'];
  return(
    <div className='App'>
    <h1>Animal List</h1>
    <CustomList items={animals}/>
    </div>
  );
};export default App;