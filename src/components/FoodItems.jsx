const FoodItems = ({ foodItems, handleBuyButtonClick }) => {
  
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item kg-item">
          {item}
            <button className="btn btn-info button"
            onClick={() => handleBuyButtonClick(item)}
            >
              Buy
            </button>
        </li>
      
      ))}
    </ul>
  );
};

export default FoodItems;