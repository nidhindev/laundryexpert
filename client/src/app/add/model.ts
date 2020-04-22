export interface Shop {
    date?: Date;
    invoice?: string;
    shopName?: string;
}
export interface Customer {
    name?: string,
    phoneNumber?: string
}
export interface Item {
    name?: string;
    quantity?: number;
    rate?: number;
    remark?: string,
}

export interface Sheet {
    store?: string,
    values?: Array<Array<string>>
}
