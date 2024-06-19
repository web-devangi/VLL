// apiService.ts

import axios from 'axios';
import { getApiUrl, API_ROUTES } from '../../config/global'; // Importing from updated global.ts

interface Product {
  id: string;
  productTitle: string;
  Product_Name: string;
  productLongName: string;
  Product_Code: string;
  Brand: string;
  Category: string;
  Gtin: string;
  productFamily: string;
  productSeries: string;
  Info_Modified_On: string;
  Icecat_Product_Id: string;
  longDescription: string;
  warrantyInfo: string;
  releaseDate: string;
  endOfLifeDate: string;
  brandLogo: {
    id: string;
    filename: string;
    url: string;
  };
  productRelated: {
    id: string;
    Gtin: string;
  }[];
  productStory: {
    productStory: string;
    preview: string;
  };
}

const axiosInstance = axios.create({
  timeout: 10000, // Adjust as needed
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-API-Key': '31c509e78c69b9bad8d47b78a0d45fe6',
    // Add other headers if necessary
  },
});

const apiService = {
  getProductsByCategoryId: async (categoryId: string, offset: string, limit: string, lang: string): Promise<any> => {
    try {
      const response = await axiosInstance.post(getApiUrl(API_ROUTES.GET_PRODUCTS), {
        query: `mutation {
          performCustomCategoryFilter(input: {
            categoryId: "${categoryId}"
            offset: "${offset}"
            limit: "${limit}"
            lang: "${lang}"
          }) {
            edges {
              node {
                id
                productTitle
                Product_Name
                productLongName
                Product_Code
                Brand
                Category
                Gtin
                productFamily
                productSeries
                Info_Modified_On
                Icecat_Product_Id
                longDescription
                warrantyInfo
                releaseDate
                endOfLifeDate
                brandLogo {
                  id
                  filename
                  url
                }
                productRelated {
                  id
                  Gtin
                }
                productStory {
                  productStory
                  preview
                }
              }
            }
            message
            response_code
          }
        }`,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add other API functions similarly for other endpoints
};

export default apiService;
