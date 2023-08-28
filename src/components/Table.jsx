import React from 'react';

const Table = ({total,description,quantity,price,amount,list,setlist}) => {
    return (
        <div>
          <table width="100%">
            <tr className='bg-gray-100 p-1 '>
                <td  className="font-bold">
                    Item Description
                </td>
                <td className="font-bold">
                    Quantity
                </td>
                <td className="font-bold">
                    <>Price</>
                </td>
                <td className="font-bold">
                   <>Amount</> 
                </td>
            </tr>
            <tbody>
            { list.map(({id,description,quantity,price,amount})=>(
                   <>
                    <tr>
                   <td key={id}>{description}</td>
                  <td key={id}>{quantity}</td>
                  <td key={id}>{price}</td>
                  <td key={id} >{amount}</td>
                  </tr>
                </>
                
              ))}
            </tbody>
          </table>
          <div>
            <p className="font-bold text-1xl mt-3 mr-80  ">TOTAL:{total}</p>
          </div>
        </div>
        
    );
};

export default Table;