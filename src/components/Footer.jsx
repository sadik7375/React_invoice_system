

const Footer = ({name,email,phonenumber}) => {
    return (
        <div>
            <footer className="footer border-t-2 border-gray-300">
       
       <ul className="flex flex-wrap items-center justify-center   "   >
         <li><span className="font-bold">Your Name:</span>{name}</li>
         <li><span className="font-bold">Phone number:</span>{phonenumber}</li>
         <li><span className="font-bold">Email:</span>{email}</li>
       </ul>
      </footer>
        </div>
    );
};

export default Footer;