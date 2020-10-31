import React from 'react';
import Jumbotron from './components/jumbotron';
import jumbotronData from './fixtures/jumbotron.json';

function App() {
  return (
     <Jumbotron.Container>
       {jumbotronData.map(item => (
         <Jumbotron key={item.id} direction={item.direction}>
           <p>I am Jumbotron</p>
         </Jumbotron>
       ))}
     </Jumbotron.Container>
  );
}

export default App;
