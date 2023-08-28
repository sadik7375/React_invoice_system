import React from 'react';

const Clientdeatails = ({clientname,clientaddress}) => {
    return (
        <div>
            <section >
      

      <h2 className="uppercase text-xl mt-5 ">{clientname}</h2>
      <p>{clientaddress}</p>

      
     </section>
        </div>
    );
};

export default Clientdeatails;