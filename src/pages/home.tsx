import { useEffect, useState } from "react";
const API_BASE = "https://react-tailwind-shadcnui-backend.onrender.com";

// Get all products
export async function getAllProducts() {
  const response = await fetch(API_BASE + "/api/products");
  return await response.json();
}

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul className="space-y-3 flex  gap-2 ">
            {products.map((product) => (
              <li
                // @ts-ignore
                key={product.id}
                className="border p-4 rounded-md shadow-sm bg-white"
              >
                <img
                  src={product.image} // Retrieve image URL from the API response
                  alt={product.name} // Use the product name for the alt text
                  className="w-full h-auto rounded-md mb-2"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p
                  className={`text-sm ${
                    product.inStock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <ImageSlider images={images} /> */}
    </div>
  );
};

export default Home;
