// import React, { useState } from 'react';

// const Sell = () => {
//   const [products, setProducts] = useState([
//     { name: 'Product 1', price: 100 },
//     { name: 'Product 2', price: 150 },
//   ]);
//   const [newProduct, setNewProduct] = useState({ name: '', price: '' });
//   const [showForm, setShowForm] = useState(false);
//   const [profitLoss, setProfitLoss] = useState(0);

//   const handleAddProduct = () => {
//     if (newProduct.name && newProduct.price) {
//       setProducts([...products, { ...newProduct, price: parseFloat(newProduct.price) }]);
//       setProfitLoss(profitLoss + parseFloat(newProduct.price));
//       setNewProduct({ name: '', price: '' });
//       setShowForm(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8 mt-12 w-[100vw]">
//       <h2 className="text-4xl font-bold mb-10 text-green-800">Your Products</h2>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-screen-lg">
//         {products.map((product, index) => (
//           <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center transform transition hover:scale-105">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
//             <p className="text-gray-600">Price: ₹{product.price}</p>
//           </div>
//         ))}
        
//         <div
//           onClick={() => setShowForm(true)}
//           className="p-6 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer text-center transform transition hover:scale-105"
//         >
//           <p className="text-2xl text-gray-600">+ Add More</p>
//         </div>
//       </div>

//       {showForm && (
//         <div className="w-full max-w-md mt-8 bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold mb-6 text-center text-green-800">Add New Product</h3>
//           <input
//             type="text"
//             placeholder="Product Name"
//             value={newProduct.name}
//             onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//             className="border p-3 rounded mb-4 w-full text-white"
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={newProduct.price}
//             onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//             className="border p-3 rounded mb-4 w-full text-white"
//           />
//           <button
//             onClick={handleAddProduct}
//             className="w-full py-3 bg-green-500 text-white rounded-lg shadow-lg font-semibold transform transition hover:bg-green-600 hover:scale-105"
//           >
//             Add Product
//           </button>
//         </div>
//       )}

//       <div className="w-full max-w-md mt-10 p-6 bg-green-100 rounded-lg shadow-lg text-center">
//         <h3 className="text-2xl font-semibold text-green-800">Profit/Loss</h3>
//         <p className="text-xl text-gray-800">₹{profitLoss}</p>
//       </div>
//     </div>
//   );
// };

// export default Sell;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sell = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', username: '',uri:''});
  const [showForm, setShowForm] = useState(false);
  const [profitLoss, setProfitLoss] = useState(0);

  // Fetch products from the database when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
        const initialProfitLoss = response.data.reduce((total, product) => total + parseFloat(product.price), 0);
        setProfitLoss(initialProfitLoss);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.description && newProduct.username && newProduct.uri) {
      axios.post('http://localhost:3000/products', {
        productname: newProduct.name,
        price: newProduct.price,
        description: newProduct.description,
        sellername: newProduct.username,
        uri: newProduct.uri
      })
        .then(response => {
          const updatedProducts = [...products, response.data];
          setProducts(updatedProducts);
          setProfitLoss(updatedProducts.reduce((total, product) => total + parseFloat(product.price), 0));
          setNewProduct({ name: '', price: '', description: '', username: '',uri:''});
          setShowForm(false);
        })
        .catch(error => {
          console.error("There was an error adding the product!", error);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8 mt-12 w-[100vw]">
      <h2 className="text-4xl font-bold mb-10 text-green-800">Your Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-screen-lg">
        {products.map((product, index) => (
          // <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center transform transition hover:scale-105">
          //   <img src={product.uri} alt="" />   
          //   <hr />         
          //   <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.productname}</h3>
          //   <p className="text-gray-600">By {product.sellername}</p>
          //   <p className="text-gray-600 mb-2">{product.description}</p>
          //   <p className="text-gray-600">Price: ₹{product.price}</p>
          // </div>
          <div
            key={index}
            className="p-2 pb-0 w-100 bg-white rounded-lg shadow-lg text-left transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative mb-2">
              <img
                src={product.uri}
                alt={product.productname}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30 rounded-t-lg"></div>
            </div>
            <div className="relative z-10 p-3 pb-2">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{product.productname}</h3>
              <p className="text-gray-500 mb-2 text-truncate fw-bold ps-3">by @{product.sellername}</p>
              <p className="text-gray-600 mb-2">about: {product.description}</p>
              <p className="text-lg font-semibold text-gray-800">Price: ₹{product.price}</p>
            </div>
          </div>
        ))}
        
        <div
          onClick={() => setShowForm(true)}
          className="p-6 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer text-center transform transition hover:scale-105"
        >
          <p className="text-2xl text-gray-600">+ Add More</p>
        </div>
      </div>

      {showForm && (
        <div className="w-full max-w-md mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-green-800">Add New Product</h3>
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="bg-slate-50 border p-3 rounded mb-4 w-full"
          />
          <input
            type="text"
            placeholder="Seller Name"
            value={newProduct.username}
            onChange={(e) => setNewProduct({ ...newProduct, username: e.target.value })}
            className="bg-slate-50 border p-3 rounded mb-4 w-full"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="bg-slate-50 border p-3 rounded mb-4 w-full"
          />
          <textarea
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className=" bg-slate-50 border p-3 rounded mb-4 w-full"
          />
          <input
            type="text"
            placeholder="Product Img Url"
            value={newProduct.uri}
            onChange={(e) => setNewProduct({ ...newProduct, uri: e.target.value })}
            className="bg-slate-50 border p-3 rounded mb-4 w-full"
          />
          <button
            onClick={handleAddProduct}
            className="w-full py-3 bg-green-500 text-white rounded-lg shadow-lg font-semibold transform transition hover:bg-green-600 hover:scale-105"
          >
            Add Product
          </button>
        </div>
      )}

      <div className="w-full max-w-md mt-10 p-6 bg-green-100 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-green-800">Profit/Loss</h3>
        <p className="text-xl text-gray-800">₹{profitLoss}</p>
      </div>
    </div>
  );
};

export default Sell;