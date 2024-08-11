import React from 'react'; 
import schemeImage1 from '../assets/trac.jpeg'; 
import schemeImage2 from '../assets/trac.jpeg';   

const schemes = [
  {
    name: "Scheme 1",
    type: "Type 1",
    amount: "$5000",
    description: "This is a brief description of Scheme 1. It includes more details that might be truncated to fit in the card properly."
  },
  {
    name: "Scheme 2",
    type: "Type 2",
    amount: "$3000",
    description: "This is a brief description of Scheme 2. It includes more details that might be truncated to fit in the card properly."
  },
  {
    name: "Scheme 3",
    type: "Type 3",
    amount: "$2000",
    description: "This is a brief description of Scheme 3. It includes more details that might be truncated to fit in the card properly."
  }
];

const personalLoans = [
  {
    name: "Personal Loan 1",
    image: schemeImage1,
    description: "This is a brief description of Personal Loan 1. It includes more details that might be truncated to fit in the card properly."
  },
  {
    name: "Personal Loan 2",
    image: schemeImage2,
    description: "This is a brief description of Personal Loan 2. It includes more details that might be truncated to fit in the card properly."
  },
  {
    name: "Personal Loan 3",
    image: schemeImage2,
    description: "This is a brief description of Personal Loan 3. It includes more details that might be truncated to fit in the card properly."
  }
];

const Card = ({ name, image, description, type, amount }) => (
  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:border-2 hover:border-green-500 h-72">
    {image && <img src={image} alt={name} className="w-full h-32 object-cover" />}
    <div className="p-4 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        {type && <p className="text-gray-600">Type: {type}</p>}
        {amount && <p className="text-gray-600">Amount: {amount}</p>}
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </div>
      <div className="absolute bottom-4 right-4">
        <button className="bg-green-500 text-white py-1 px-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Apply
        </button>
      </div>
    </div>
  </div>
);

const Schemes = () => {
  return (
    <div className="p-6 bg-green-50 h-[130vh] w-full flex flex-col items-center">
      <div className="w-full max-w-screen-xl">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6 mt-12">Government Schemes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {schemes.map((scheme, index) => (
            <Card key={index} {...scheme} />
          ))}
        </div>

        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">Personal Loans</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-52">
          {personalLoans.map((loan, index) => (
            <Card key={index} {...loan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
