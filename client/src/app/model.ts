export interface PeriodicElement {
  phoneNumber: string;
  billNumber: string;
  name?: string;
  date?: Date;
  iconName?: string;
  iconClass?: string;
  link?: string;
  items?: Item[];
  total?: number;
  dueDate?: Date;
}

export interface Item {
  seqNumber?: string,
  itemName?: string,
  ironOnly: string,
  itemPreviewIcon?: string,
  rate: number,
  totalCount: number,
  finishedCount?: number,
  returnCount?: number
  remarks?: string
}

export interface Customer {
  customerName: string,
  customerPhone?: string,
}
export interface Order {
  orderNumber: string,
  storeName: string,
  customer: Customer,
  orderDate: Date,
  dueDate?: Date,
  status: string,
  link?: string,
  items: Item[],
  orderStyle?: OrderStyle,
  estimatedCost?: number
}
export interface OrderStyle {
  statusIconName?: string,
  statusIconClass?: string,
}
export interface OrderModel {
  orders: Order[]
}

export interface OrderResponse {
  response: [{
    status: number,
    order: string
  }]
}