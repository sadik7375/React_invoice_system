import { useState,useRef,useEffect } from 'react'

import './App.css'
import Header from './components/Header';
import Ownerdetails from './components/Ownerdetails';
import Clientdeatails from './components/Clientdeatails';
import Date from './components/Date';
import Table from './components/Table';
import Notes from './components/Notes';
import Footer from './components/Footer';
import TableForm from './components/TableForm';
import ReactToPrint from 'react-to-print';

function App() {
  const [showinvoice,setshowinvoice]=useState(true);
   const [name,setname]=useState("");
   const [address,setaddress]=useState("");
   const [email,setemail]=useState("");
   const [phonenumber,setphonenumber]=useState("");
   const [clientname,setclientname]=useState("");
   const [clientaddress,setclientaddress]=useState("");
   const [invoicenumber,setinvoicenumber]=useState("");
  
   const [date,setdate]=useState("");
   const [duedate,setduedate]=useState("");
   const [notes,setnotes]=useState("");
   const [description,setdescription]=useState("");
   const [quantity,setquantity]=useState("");
   const [price,setprice]=useState("");
   const [amount,setamount]=useState("25000");
   
   const [total,settotal]=useState(0);
  
   const componentRef=useRef();


const handleprint=()=>{
  window.print();
} 

//to get data
const getdata=()=>{
  let data=localStorage.getItem('data');

  if(data)
  {
    return JSON.parse(localStorage.getItem('data'));
  }
  else{
     return [];
  }

}
const [list,setlist]=useState(getdata());

//add to data local storeage

useEffect(()=>
{
   localStorage.setItem('data',JSON.stringify(list));
},[list]);



  return (
    <>
        <div className="header">
           <ul className='ul'>
            <li><a href="home">Home</a></li>
            <li><a href="history">History</a></li>
           </ul>
        </div>
      <main className=" m-5 p-5 md:max-w-xl  md:mx-auto lg:max-w-xl xl:mx-auto bg-white  rounded-shadow"  >
       
     <>
     <div className="flex flex-col justify-center">
                
                <>
                <article className="md:grid grid-cols-2 gap-10 ">
                <div className="flex flex-col">
                <label htmlFor="name"> Your full Name </label>
                <input  value={name} onChange={(e)=>setname(e.target.value)} type='text' name='text' id='text'  autoComplete='off' />
                </div>
                <div className="flex flex-col">
                <label htmlFor="address">Your Address </label>
                <input  value={address} onChange={(e)=>setaddress(e.target.value)} type='text' name='text' id='text'  autoComplete='off' />
                </div>
               </article>

               <article className="md:grid grid-cols-2 gap-10">
               <div className="flex flex-col">
                <label htmlFor="email"> Email</label>
                <input value={email} onChange={(e)=>setemail(e.target.value)} type='text' name='text' id='text'  autoComplete='off' />
                 </div>
                 <div className="flex flex-col">
                <label htmlFor="phonenumber">Phonenumber</label>
                <input value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} type='text' name='text' id='text'  autoComplete='off' />
                   </div>
                   </article>

                    <article className="md:grid grid-cols-2 gap-10">
                
                   <div className="flex flex-col">
                <label htmlFor="clientname"> Client name </label>
                <input value={clientname} onChange={(e)=>setclientname(e.target.value)} type='text' name='text' id='text'  autoComplete='off' />
                  </div>
                  <div className="flex flex-col">
                <label htmlFor="clientaddress"> Client address</label>
                <input value={clientaddress} onChange={(e)=>setclientaddress(e.target.value)} type='text' name='text' id='text'  autoComplete='off' />
                   </div>
                   </article>
                  
                   <article className="md:grid grid-cols-3 gap-10">
                 <div className="flex flex-col">
                <label htmlFor="Date"> Date</label>
                <input value={date} onChange={(e)=>setdate(e.target.value)} type='date' name='text' id='text'  autoComplete='off' />
                   </div>
                   <div className="flex flex-col">
                <label htmlFor="duedate"> Due Date</label>
                <input value={duedate} onChange={(e)=>setduedate(e.target.value)} type='date' name='text' id='text'  autoComplete='off' />

                 </div>
               
                 
                 
                 <div className="flex flex-col">
                <label htmlFor="invoicenumber"> Invoice number</label>
                <input value={invoicenumber} onChange={(e)=>setinvoicenumber(e.target.value)}  name='text' id='text' autoComplete='off' />
                 </div>
                 </article>
                 {/* {this is table start } */}


                       
                         <TableForm total={total} settotal={settotal} list={list} setlist={setlist} setdescription={setdescription} setquantity={setquantity} setprice={setprice} setamount={setamount} description={description} quantity={quantity} price={price} amount={amount} ></TableForm>
                       
                       


                   {/* {this is table end } */}

                 <div className="flex flex-col">
                <label htmlFor="notes"> Notes</label>
                <textarea value={notes} onChange={(e)=>setnotes(e.target.value)} type='text' name='text' className='notes'  autoComplete='off' />
              </div>

            




             </>
             </div>
           
        <ReactToPrint trigger={()=><button className="btn btn-download   bg-blue-400 text-white font- py-2 px-3 rounded-shadow border-2 border-blue-500 hover:bg-transparent hover:text-green-500 transition-all duration-300 ">Download Invoice</button>} content={()=>componentRef.current}  ></ReactToPrint>
        <div className="p-4" ref={componentRef}   >
       <Header handleprint={handleprint}></Header>
      
        <Ownerdetails name={name} address={address} ></Ownerdetails>
       <Clientdeatails clientname={clientname} clientaddress={clientaddress}    ></Clientdeatails> 
       <Date date={date} duedate={duedate}     ></Date> 
      <Table total={total} description={description} quantity={quantity} price={price} amount={amount} list={list} setlist={setlist}    ></Table>
       
      <Notes notes={notes} ></Notes>
       
      <Footer name={name} email={email} phonenumber={phonenumber}    ></Footer>
     
       
      </div>
       
      
      </>
      
     
     
            

      
       </main>

     
   
    </>
  )
}

export default App
