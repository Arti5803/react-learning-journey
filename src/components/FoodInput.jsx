import style from "./FoodInput.module.css";

const FoodInput=({ handleInputChange })=>{


  return <input type="text" placeholder="Enter food item" className={style.input} 
  onChange={handleInputChange}/>
}

export default FoodInput;