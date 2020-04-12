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
    name?: string;
    totalPieces?: string;
    finishedPieces?: string;
    damagedPieces?: string,
    status?: string;
    iconName?: string;
    iconClass?: string;
  }