// import './App.css';

import { useState } from "react";
import ShoeForm from "./Component/ShoeForm";
import ShowShoeItem from "./Component/ShowShoeItem";

function App() {
  const [showItem, setShowItem] = useState([]);
  const showFormObj = (data) => {
    setShowItem(prev => {
      return [...prev, data]
    })
    // console.log(data);
  }
  return (
    <div className="App">
      <ShoeForm showFormObj = {showFormObj}/>
      <ShowShoeItem showItem = {showItem} />
    </div>
  );
}

export default App;
