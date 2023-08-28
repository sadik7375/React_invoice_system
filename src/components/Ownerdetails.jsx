

// eslint-disable-next-line react/prop-types
const Ownerdetails = ({name,address}) => {
    return (
        <div>
            <section className="flex flex-col items-end justfy-end" >
       
       <h2 className="uppercase text-xl font-bold ">{name}</h2>
       <p>{address}</p>
      
       </section>
        </div>
    );
};

export default Ownerdetails;