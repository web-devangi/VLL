// ExampleComponent.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_ROUTES, API_KEY } from '../config/global'; // Adjust based on your project structure
import { Product } from './product-card/types'; // Adjust based on your folder structure
import { promises } from 'dns';


interface ExampleComponentProps {
  // Define props for ExampleComponent if needed
}

const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}${API_ROUTES.GET_PRODUCTS}`,
          {
            query: `mutation {
              performCustomCategoryFilter(input: {
                categoryId: "123", // Example categoryId
                offset: "0",
                limit: "10",
                lang: "en"
              }) {
                edges {
                  node {
                    id
                    productTitle
                    longDescription
                    // Add more fields as needed
                  }
                }
              }
            }`,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-API-Key': API_KEY,
            },
          }
        );

        const fetchedProducts: Product[] = response.data.performCustomCategoryFilter.edges.map((edge: any) => ({
          data: {
            id: edge.node.id,
            productTitle: edge.node.productTitle,
            longDescription: edge.node.longDescription,
            // Add more fields from edge.node as needed
          },
          onIncrementProductCount: () => {}, // Implement as needed
          onDecrementProductCount: () => {}, // Implement as needed
          selectedStock: { id: '', color: '', size: '', quantity: 0 }, // Example stock object
          onColorClick: (stock: any) => {}, // Implement as needed
          isSame: false, // Example boolean value
        }));

        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render your products here */}
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.productTitle}</h3>
          <p>{product.longDescription}</p>
          {/* Render other product details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;
