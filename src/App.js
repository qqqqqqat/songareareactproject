import './App.css';
import AppHeader from './app-header';
import AppItem from './app-item';
import itemarray from './data/songinfo';
import { useState } from 'react';
import AppPost from './app-post';
import AppSearch from './app-search';


function App() {
  const [Selectsong, SetSelectsong] = useState(null);
  const [Search,SetSeach] = useState("") 

  function onclickopen(clicksong){
    SetSelectsong(clicksong)
  }
  function onclickclose(){
    SetSelectsong(null)
  }



  const arraytoobj = itemarray.filter((obj) => {
    return obj.titlesong.includes(Search);}).map((songitemobj,index) => {
    return <AppItem itemobj={songitemobj} key={index} event={onclickopen}></AppItem>;
  });

  let songpopup = null;
  if(!!Selectsong){
    songpopup = <AppPost itempopup={Selectsong} event={onclickclose}></AppPost>
  }

  return (
    <div className='app'>
      <AppHeader></AppHeader>
    <AppSearch eventsearch={SetSeach} ></AppSearch>
    <div className="container" >
        <div className="app-content">
          {arraytoobj}
        </div>
    </div>
    {songpopup}
  </div>
  );
}

export default App;
