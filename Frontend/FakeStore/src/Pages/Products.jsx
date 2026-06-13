// import React, { useEffect, useState } from "react";

// import loading from "../assets/loading.gif";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true);

//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       setProducts(data);
//     } catch (error) {
//       setIsError(true);
//       setErrorMessage(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <div className="w-full h-[90vh] flex justify-center items-center">
//           <img src={loading} alt="" className="w-50" />
//         </div>
//       ) : (
//         <div className="p-10 grid grid-cols-4 gap-5">
//           {products.length > 0 &&
//             products.map((product, index) => (
//               <div className="w-75 border rounded h-100 p-3" key={index}>
//                 <div className="w-full h-40">
//                   <img
//                     src={product.image}
//                     alt=""
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-between h-50">
//                   <div>
//                     <p className="text-xl" title={product.title}>
//                       {product.title.length > 50 ? product.title.slice(0, 50) + "..." : product.title}
//                     </p>
//                     <p className="text-sm capitalize text-gray-500">
//                       {product.category}
//                     </p>
//                     <p>₹ {product.price * 100}</p>
//                     <p>{product.rating.rate}/5</p>
//                   </div>

//                   <button className="bg-orange-400 rounded-full px-4 py-2">
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";
import loading from "../assets/loading.gif";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <img src={loading} alt="Loading..." className="w-32" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        {errorMessage}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-200 flex justify-center items-center p-8">
      <div className="w-full max-w-6xl overflow-x-auto">
        <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-yellow-300 text-gray-800">
              <th className="p-4">Preview</th>
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-white" : "bg-yellow-50"
                }`}
              >
                <td className="p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 object-contain mx-auto"
                  />
                </td>

                <td className="p-4">
                  <h3 className="font-semibold">
                    {product.title.length > 40
                      ? product.title.slice(0, 40) + "..."
                      : product.title}
                  </h3>
                </td>

                <td className="p-4 capitalize text-gray-600">
                  {product.category}
                </td>

                <td className="p-4 font-medium">
                  ₹ {(product.price * 100).toFixed(0)}
                </td>

                <td className="p-4">⭐ {product.rating.rate}/5</td>

                <td className="p-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-full shadow-md transition">
                    Check Best Price
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
