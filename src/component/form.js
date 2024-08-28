import { useState } from "react";


export default function Form({ onAddItem }) {
  //new(controlled element):All html form has oun state on the DOM but we do not want that,we want that in the react
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // //cm(items state)
  // const [items,setItems]=useState([])
  // function handleAddItems(item){
  //   //cm(i can not change something i react because the react is immutable)
  //   // setItem(items => items.push(item))
  //   setItems(items => [...items,item])
  // }

  function handleSubmit(e) {
    e.preventDefault();

    //cm:guard
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    //cm(passing the items)
    onAddItem(newItem);

    //cm:make default
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need fro your 😍trip?</h3>
      <select
        value={quantity}
        onChange={
          (e) => setQuantity(+e.target.value)
          // console.log(e.target.value)
        }
      >
        {/* //cm:For making an empty array whit 20 length from 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
            {/* {console.log(option)} */}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items...."
        //CM(Set the value)
        value={description}
        //cm(changing the value)
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
