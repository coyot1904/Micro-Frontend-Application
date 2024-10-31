import { ADD_ORDER } from "./actions";
import { Order } from "../types";

interface Product {
  title: string;
  quantity: number;
  price: number;
  image: string;
}

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [
    {
      id: 1,
      date: "2024-10-01",
      products: [
        {
          name: "Product A",
          quantity: 2,
          price: 10.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TL4NSG_aA8uGLiaoVf-70ycqdAB-M_fRyA&s",
        },
        {
          name: "Product B",
          quantity: 1,
          price: 15.0,
          image:
            "https://s.alicdn.com/@sc04/kf/H78e165e128464ca3af2b27414d9d0ac6d.jpg_300x300.jpg",
        },
      ],
      totalPrice: 35.0,
      userId: "Tolga",
    },
    {
      id: 2,
      date: "2024-10-15",
      products: [
        {
          name: "Product C",
          quantity: 1,
          price: 20.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnd3OrchRNox9bWFjc3Ot0fsEfH1OOycB4w&s",
        },
        {
          name: "Product D",
          quantity: 3,
          price: 5.0,
          image:
            "https://image.made-in-china.com/201f0j00dvobmMPlQqkI/Low-Price-China-Mobile-Phone-2g-GSM-1-77-Inch-Phone-Wholesale-Sample-Phone-for-Elderly-Person.webp",
        },
      ],
      totalPrice: 35.0,
      userId: "Metin",
    },
  ],
};

const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export default orderReducer;
