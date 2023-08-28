import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import collect from "collect.js";


// import {MdDelete} from "react-icons/ai"


// eslint-disable-next-line react/prop-types
const TableForm = ({ total, settotal, list, setlist, description, quantity, price, amount, setdescription, setquantity, setamount, setprice }) => {
console.log("setlist",list)
  const [isEditing, setIsEditing] = useState(false);
  //calculate amount function
  useEffect(() => {
    const calculateAmount = (amount) => {

      setamount(price * quantity)
    }

    calculateAmount(amount)

  }, [amount, price, quantity, setamount])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description === "" || price === "" || quantity === "") {
      alert("please Fill the Inputs")

    }
    else {

      const newitems = {
        id: Date.now(),
        description,
        quantity,
        price,
        amount
      }





      setdescription("");
      setamount("");
      setprice("");
      setquantity("");
      setlist([...list, newitems])

      setIsEditing(false);

    }


  }

  //Edit function

  const editingrow = (id) => {
    console.log(id);

    const editrow = list.find((row) => row.id === id);
    console.log(editrow);

    setlist(list.filter((row) => row.id !== id))
    setIsEditing(true);
    setdescription(editrow.description)
    setquantity(editrow.quantity)
    setprice(editrow.price)
    setamount(editrow.amount)



  }



  //delete function

  // eslint-disable-next-line react/prop-types
  const deleterow = (id) => {
    console.log(id);

    setlist(list.filter((row) => row.id !== id))
    // alert("Are you sure you want to delere")
  }

  //calculate total amount of items in table



  const calculateTotal = () => {
    const allItems = list.map((item) => item.price);
    //question why do useffect here??
    settotal(collect(allItems).sum());
  };

  useEffect(() => {
    calculateTotal();
  });






  return (
    <>
      <form onSubmit={handleSubmit} >


        <div  >
          <label className="mr-4" htmlFor="description">Item description</label>
          <input placeholder='' className="mt-8" type="text" name="desc" id="des" value={description} onChange={(e) => setdescription(e.target.value)} />
        </div>
        
        <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col qp" >
            <label htmlFor="quan">Quantity</label>
            <input type="text" name="desc" id="des" value={quantity} onChange={(e) => setquantity(e.target.value)} />
          </div>
          <div className="flex flex-col " >
            <label htmlFor="price">Price</label>
            <input type="text" name="desc" id="des" value={price} onChange={(e) => setprice(e.target.value)} />
          </div>
          <div className="flex flex-col " >
            <label htmlFor="price">Price</label>
            <input type="text" name="desc" id="des" value={price} onChange={(e) => setprice(e.target.value)} />
          </div>
          <div className="flex flex-col " >
            <label htmlFor="price">Price</label>
            <input type="text" name="desc" id="des" value={price} onChange={(e) => setprice(e.target.value)} />
          </div>
          <div className="flex flex-col " >
            <label htmlFor="amount">Amount</label>
            {/* <input type="text" name="desc" id="des" value={amount} onChange={(e)=>setamount(e.target.value) } /> */}
            <p className="amount" >{amount}</p>
          </div>
        </article>
        <button type="submit" className=' bg-blue-400 text-white py-2 px-3 mb-3 rounded-shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-7'>

          {isEditing ? "Edit Item" : "Add Item"}

        </button>
      </form>

      <table>
        <tr>
          <td>Description</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Amount</td>

        </tr>



        {list.map((item) => (


          <React.Fragment key={item.id}>

            <tbody>
              <tr>
                <td >{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td><button onClick={() => editingrow(item.id)} className="bg-green-500 text-white fonr p-1 font-size: 0.1rem" > Edit</button>
                  <button onClick={() => deleterow(item.id)} className="bg-red-500 text-white p-1"  > Delete</button></td>
               

              </tr>
            </tbody>

          </React.Fragment>


        ))}




      </table>
      <div>
        <p className="font-bold text-1xl mt-3 total ">TOTAL:{total}</p>
      </div>






    </>

  );
};

export default TableForm;