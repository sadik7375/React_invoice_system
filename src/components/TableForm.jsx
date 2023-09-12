import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import collect from "collect.js";


// import {MdDelete} from "react-icons/ai"


// eslint-disable-next-line react/prop-types
const TableForm = ({ tax,settax,discount,setdiscount,shippingcost,setshippingcost, total, settotal, list, setlist, description, quantity, price, amount, setdescription, setquantity, setamount, setprice }) => {
console.log("setlist",list)
  const [isEditing, setIsEditing] = useState(false);
  const [previousTotal, setPreviousTotal] = useState(0);



  // const calculateTotal = () => {
  //   const allItems = list.map((item) => item.price);
  //   //question why do useffect here??
  //   settotal(collect(allItems).sum());
  // };

  // useEffect(() => {
  //   calculateTotal();
  // });


  const newitems = {
    id: Date.now(),
    description,
    quantity,
    price,
    amount
  }

  


  const handleClick=()=>{
   
    setlist([...list,newitems])
    setquantity("")
    setprice("")
    setamount("")
  

}
const handleChange=(e,i)=>{
  const { name, value } = e.target;
  const updatedList = [...list];
  updatedList[i][name] = value;   //create key with value.index 0 name key description value
  console.log(updatedList[i][name]);

  // Calculate amount based on the updated price and quantity
  updatedList[i].amount = parseFloat(updatedList[i].price) * parseInt(updatedList[i].quantity);

  let totalAmount = 0;
  updatedList.forEach(item => {
    totalAmount += item.amount || 0; // Ensure amount is a number or default to 0
  });

  settotal(totalAmount); // Assuming you have a state for totalAmount



  setlist(updatedList);




}
const handleDelete=(i)=>{

  if(i===0)
  { 

    setlist([
      // Default row
      { id: 0, description: '', quantity: '', price: '' ,tax:'', amount: 0 },
    ]);
    settotal("");
     
  }else{
    const deleteVal = [...list]
  deleteVal.splice(i,1)
  setlist(deleteVal)
  }
}

//add tax
  
  const handletax = (e) => {
    let value = 0;
    value=e.target.value.trim(); 
    // Remove leading and trailing spaces
    console.log(value)
   e.preventDefault();
    if (value ==='') {
      settax(''); // Update the tax value if needed
      settotal(total);  // Reset total to the previous value
      return;
    }
  
   
    settax(value);
     let totaltax=0;
     totaltax = (total * value) / 100;
     console.log(totaltax)
   let finalresult = total + totaltax;
    settotal( finalresult);
  };
  
  
  


 
  useEffect(() => {
    setPreviousTotal(total); // Update the previous total whenever total changes
  }, [total,tax]);
 



 



console.log(tax)
//add shipping cost
const handleshippingcost=(e)=>{
  const value=e.target.value;
  setshippingcost(value);
  
  


}
//add discount
const handlediscount=(e)=>{
  const value=e.target.value
  setdiscount(value);

  const totaldiscount=(total*value)/100

  const finaldiscounttotal=total-totaldiscount
  settotal(finaldiscounttotal)
   


}

console.log(tax)
console.log(shippingcost)
console.log(discount)

  return (
    <>
      


     <div>
       
      </div>
      <div className="mx-auto mt-10">
      <table>
      <tr className='bg-gray-200'>
          <td className="border border-gray-400 p-2 ">Description</td>
          <td className="border border-gray-400 p-2">Quantity</td>
          <td className="border border-gray-400 p-2">Price</td>
          <td className="border border-gray-400 p-2">vat</td>
          <td className="border border-gray-400 p-2">Amount</td>

        </tr>
        <tbody>
      {list.map((val, i) => (
        <tr key={val.id}>
          <td className=" p-2">
            <input
              className="w-full"
              name="description"
              placeholder=""
              value={val.description}
              onChange={(e) => handleChange(e, i)}
            />
          </td>
          <td className=" p-2">
            <input
              className="w-full"
              name="quantity"
              value={val.quantity}
              placeholder=""
              onChange={(e) => handleChange(e, i)}
            />
          </td>
          <td className=" p-2">
            <input
              className="w-full"
              name="price"
              value={val.price}
              placeholder=""
              onChange={(e) => handleChange(e, i)}
            />
          </td>
          <td className=" p-2">
            <input
              className="w-full"
              name="tax"
              value={val.tax}
              placeholder=""
              onChange={(e) => handleChange(e, i)}
            />
          </td>
          <td className=" p-2">{val.amount}</td>
          <td className=" p-2">
            <button
              className="bg-red-100 px-2 py-1 rounded"
              onClick={() => handleDelete(i)}
            >
              X
            </button>
          </td>
        </tr>
      ))}


      
    </tbody>
            </table>
            <label htmlFor="tax">Tax</label>
            <input
              className="w-full"
              name=""
              value={tax}
              placeholder=""
              onChange={(e)=>handletax(e)}
             
            />
            <label htmlFor="discount">Discount</label>
            <input
              className="w-full"
              name="price"
              value={discount}
              placeholder=""
              onChange={(e)=>handlediscount(e)}
             
            />

<label htmlFor="shipping cost">Shipping cost</label>
            <input
              className="w-full"
              name="price"
              value={shippingcost}
              placeholder=""
              onChange={(e)=>handleshippingcost(e)}

             
            />
            <p>{total}</p>
            <button className='bg-blue-100 mt-5 ' onClick={handleClick}>Add Items</button>
            
       

      </div>
      
              
      
       
    </>

  );
};

export default TableForm;