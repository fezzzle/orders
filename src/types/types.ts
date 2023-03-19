export interface Order {
  id: string;
  total: string;
  currency: string;
  quantity: string;
  status: "New" | "In transit" | "Delivered";
  date: string;
  [key: string]: any;
}

export type Orders = Order[];

export interface CurrencyMap {
    [key: string]: string;
}

export type Column = {
  label: string;
  accessor: string;
};

const orderTableColumns: Column[] = [
  {
    label: "Order ID",
    accessor: "id",
  },
  {
    label: "Total",
    accessor: "total",
  },
  {
    label: "Currency",
    accessor: "currency",
  },
  {
    label: "Quantity",
    accessor: "quantity",
  },
  {
    label: "Status",
    accessor: "status",
  },
  {
    label: "Date",
    accessor: "date",
  },
];

export default orderTableColumns;



