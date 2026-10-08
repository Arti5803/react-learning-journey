

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMessege from './components/ErrorMessege'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from 'react'

function App() {
  let foodItems=["Dal",'Roti','Rice','Paneer','Fruits']
  const [textToShow,setTextToShow]=useState("Enter a food item");

  console.log("App component rendered");
  const handleInputChange=(event)=>{
    const inputValue=event.target.value;
    if(inputValue.length>0){
      setTextToShow(inputValue);
    }else{
      setTextToShow("Enter a food item");
    }
  }
 return(
  <>
  <Container>
 <div>
 <h1 className='food-heading'>Healthy Foods</h1>
 <FoodInput handleInputChange={handleInputChange} />
 <p>{textToShow}</p>
 <div>
  <FoodItems foodItems={foodItems} handleBuyButtonClick={ (item) => console.log(`You have bought ${item}`) } />
 < ErrorMessege foodItems={foodItems}/>
 </div>
 </div>
</Container>
{/* <Container>
  <p>These are the healthy food for your overall health and well being </p>
</Container> */}
</>

  )
}
export default App;
