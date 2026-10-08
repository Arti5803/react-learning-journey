const ErrorMessege=({ foodItems })=>{
  
  return(
    <>
    {foodItems.length==0 && <h1>No healthy foods available</h1>}
  
    </>
  )
   
}

export default ErrorMessege;