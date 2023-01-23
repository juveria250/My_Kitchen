import React from "react";
import Meal from "./Components/Meal";
import './Components/style.css'
import {Routes,Route} from "react-router-dom";
import RecipieInfo from "./Components/RecipieInfo";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Meal/>}/> 
      <Route path="/:MealId" element={<RecipieInfo/>}/> 
    </Routes>
    </>
  )
}

export default App;
