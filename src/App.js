import React from 'react';
import  {Action, Horror, Orginals, Romanace} from'./urls'
import './App.css';
import Banner from './Component/NavBar/Banner/Banner';
import NavBar from './Component/NavBar/NavBar';
import RowPost from './Component/NavBar/RowPost/RowPost';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <RowPost url={Orginals} title='Netflix Orginals'/>
    <RowPost url={Action}  title='Actions' isSmall />
    <RowPost url={Horror} title='Horror'/>
    <RowPost url={Romanace}  title='Romanace' isSmall />
 
    </div>
  );
}

export default App;
