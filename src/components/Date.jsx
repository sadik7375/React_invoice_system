import React from 'react';

const Date = ({date,duedate}) => {
    return (
        <div>
            <article className="my-5 flex flex-col items-end justfy-end">
       <ul>
           <li><span className="font-bold">Invoice number:</span>1001</li>
           <li className='bg-gray-100' ><span className="font-bold">Invoicerdate:</span>{date}</li>
           <li className=''><span className="font-bold">Due Date:</span>{duedate}</li>
       </ul>
       </article>
        </div>
    );
};

export default Date;