export interface Rating {
   rate: number;
   count: number;
}

export interface Product {
   id: number;
   title: string;
   price: number;
   description: string;
   category: "men's clothing" | "women's clothing" | "jewelery" | "electronics";
   image: string;
   rating: Rating;
}
