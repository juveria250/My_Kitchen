import React, { useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";
import RecipieIndex from "./RecipieIndex";
const Meal=()=>{
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem]=useState();
    const [show,setshow]=useState(false);
    const [search,setSearch]=useState("")
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals)
            setItem(data.meals);
            setshow(true);
        })
    },[url])

    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipie=(evt)=>{
        if(evt.key=="Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }

    }

    return(
        <>
        <div className="main">
            <div className="heading">
                <h1>Search Your Food Recipie</h1>
                <h4>Make Your Delicious Food With Us!</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" 
                onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipie} />
            </div>
            <div className="container">
                 {
                    show ? <MealItem data={item}/>:"Not Found"
                 }
            </div>
            <div className="indexContainer">
                <RecipieIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>
        </>
    )
}
export default Meal;