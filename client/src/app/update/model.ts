export interface Customer {
    phoneNumber: number;
    billNumber: string;
    name?: string;
    date?: Date;
    items?: Item[];
    total?: number;
    dueDate?: Date;
  }
  
  export interface Item {
    name?: string;
    totalPieces?: number;
    finishedPieces?: number;
    damagedPieces?: number,
    status?: string;
  }