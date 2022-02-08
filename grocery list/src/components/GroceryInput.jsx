import { useState } from "react";
import "./Grocery.css"; 

export const GroceryInput = ({getData}) => {
    const [grocery, setGrocery] = useState("");

    const handleChnage = (e) => {
        setGrocery(e.target.value);
    }
    const handleAdd = (e) => {
        getData(grocery);

}
    return (
        <div className="inputBoxSize">
        <p className="display-3 text-center">Grocery List</p>
        <div>
            <input type="text" className="form-control" placeholder="Enter Grocery Item" onChange={handleChnage} />
            <button className="btn btn-outline-success" onClick={handleAdd}>Add</button>
        </div>
        </div>
    )
}