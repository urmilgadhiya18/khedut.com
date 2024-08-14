// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Buy = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8 mt-12 w-[100vw]">
//       <h2 className="text-4xl font-bold mb-10 text-green-800">Available Products</h2>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-screen-lg">
//         {products.length > 0 ? (
//           products.map((product, index) => (
//             <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center transform transition hover:scale-105">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
//               <p className="text-gray-600">Price: ₹{product.price}</p>
//               <p className="text-gray-600">{product.description}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-2xl text-gray-600">No products available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Buy;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Buy = () => {
  const [products, setProducts] = useState([]);
  const [bestsellers, setBestsellers] = useState([]);
  const [popup, setPopup] = useState({ show: false, seller: '' });
  const [rating, setRating] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchBestsellers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/bestsellers');
        setBestsellers(response.data);
      } catch (error) {
        console.error('Error fetching bestsellers:', error);
      }
    };

    fetchProducts();
    fetchBestsellers();
  }, [rating,bestsellers]);

  const handleBuyNow = (sellername) => {
    setPopup({ show: true, seller: sellername });
  };

  const handleClosePopup = () => {
    setPopup({ show: false, seller: '' });
    setRating(0); // Reset rating when closing the popup
  };

  const handleSubmitRating = () => {
    axios.post('http://localhost:3000/ratings', {
      sellername: popup.seller,
      rating: rating,
    //   productname: productname,
    })
    .then(response => {
    //   console.log('Rating submitted:', response.data);
      //   seller.averageRating.toFixed(1)
      handleClosePopup(); // Close the popup after submission
      setRating([...rating,response.data.toFixed(1)])
    })
    .catch(error => {
      console.error('Error submitting rating:', error);
    });
  };

// const handleSubmitRating = () => {
//     axios.post('http://localhost:3000/ratings', {
//       sellername: popup.seller,
//       rating: rating,
//     })
//     .then(response => {
//       console.log('Rating submitted:', response.data);
      
//       // Assuming response.data contains the new rating value
//       const newRating = response.data.toFixed(1);
//       handleClosePopup(); // Close the popup after submission
      
//       setRating(prevRatings => [...prevRatings, newRating]);
//       // Update the rating state with a new array reference
  
//     })
//     .catch(error => {
//       console.error('Error submitting rating:', error);
//     });
//   };
  

  
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8 mt-12 w-[100vw]">
      <h2 className="text-4xl font-bold mb-10 text-green-800">Available Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-screen-lg">
        {products.length > 0 ? (
          products.map((product, index) => (
            // <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center transform transition hover:scale-105">
            //   <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.productname}</h3>
            //   <p className="text-gray-600">By {product.sellername}</p>
            //   <p className="text-gray-600 mb-2">{product.description}</p>
            //   <p className="text-gray-600">Price: ₹{product.price}</p>
            //   <p className="text-gray-600">Rating: {product.rating.toFixed(1)}</p>
            //   <button
            //     onClick={() => handleBuyNow(product.sellername)}
            //     className="mt-4 py-2 px-4 bg-green-500 text-white rounded-lg shadow-lg font-semibold transform transition hover:bg-green-600 hover:scale-105"
            //   >
            //     Buy Now
            //   </button>
            // </div>
            <div
            key={index}
            className="p-2 pb-0 w-100 bg-white rounded-lg shadow-lg text-left transform transition-transform hover:scale-105 hover:shadow-2xl">
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
              <p className="text-gray-600">rating: {product.rating.toFixed(1)}</p>
              <p className="text-lg font-semibold text-gray-800">price: ₹{product.price}</p>
            <button
            onClick={() => handleBuyNow(product.sellername)}
            className="mt-0 mb-2 py-2 px-4 bg-green-500 text-white rounded-lg shadow-lg font-semibold transform transition hover:bg-green-600 hover:scale-105">
                Buy Now
            </button>
            </div>
          </div>
          ))
        ) : (
          <p className="text-2xl text-gray-600">No products available.</p>
        )}
      </div>

      <h2 className="text-4xl font-bold mb-10 text-green-800 mt-12">Our Bestsellers</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg">
        {bestsellers.length > 0 ? (
          bestsellers.map((seller, index) => (
            <div key={index} className="p-6 pb-2 bg-white rounded-lg shadow-lg text-left fw-bolder">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">{seller.sellername}</h3>
              <p className="text-gray-600 fw-bold">product: {seller.productname}</p>
              <p className="text-gray-600 fw-bold">avg. Rating: {seller.rating.toFixed(1)}</p>
            </div>
          ))
        ) : (
          <p className="text-2xl text-gray-600">No bestsellers available.</p>
        )}
      </div>

      {popup.show && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Thank You!</h3>
            <p className="text-lg text-gray-800">Thanks for buying from {popup.seller}!</p>
            <div className="mt-4">
              <label className="block text-gray-700 mb-2">Rate the Seller (1-5 stars):</label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="border p-2 bg-white rounded w-full"
                >
                <option value="" disabled>Select a rating</option>
                <option value={1}>1 - Very Poor</option>
                <option value={2}>2 - Poor</option>
                <option value={3}>3 - Average</option>
                <option value={4}>4 - Good</option>
                <option value={5}>5 - Excellent</option>
              </select>

            </div>
            <button
              onClick={handleSubmitRating}
              className="mt-4 py-2 px-4 bg-green-500 text-white rounded-lg shadow-lg font-semibold transform transition hover:bg-green-600 hover:scale-105"
            >
              Submit Rating
            </button>
            <button
              onClick={handleClosePopup}
              className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg shadow-lg font-semibold transform transition hover:bg-red-600 hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buy;