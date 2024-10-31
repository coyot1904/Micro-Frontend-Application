export interface Product {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Order {
  id: number;
  userId: string;
  date: string; // Adjust date type as needed
  products: Product[];
  totalPrice: number;
}
