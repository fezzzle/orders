export interface Order {
  id: string;
  total: string;
  currency: string;
  quantity: string;
  status: "New" | "In transit" | "Delivered";
  date: string;
}

export type Orders = Order[];
