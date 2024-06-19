export interface ProductCardUIProps {
  data: Product;
  onIncrementProductCount: () => void;
  onDecrementProductCount: () => void;
  cartQuantity?: number;
  params?: string;
  gallery?: ProductExpandedGallery[];
  selectedStock: Stock;
  onColorClick: (stock: Stock) => void;
  isSame: boolean;
  roundedColors?: boolean;
  cartDetailId?: number;
}

export interface Product {
  id: string;
  productTitle: string;
  longDescription: string;
  // Add more fields as needed
}

export interface ProductExpandedGallery {
  // Define your gallery interface here
}

export interface Stock {
  id: string;
  color: string;
  size: string;
  quantity: number;
}
