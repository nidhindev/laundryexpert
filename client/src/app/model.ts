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
    ironOnly: boolean,
    rate: number,
    totalCount: number,
    finishedCount?: number,
    returnCount?: number
    remark?: string
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
    totalPrice?: number
  }
  export interface OrderStyle {
    statusIconName?: string,
    statusIconClass? :string
  }
  export interface OrderResponse {
    orders: Order[]
  }