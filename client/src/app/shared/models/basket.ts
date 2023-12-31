import * as cuid from 'cuid';

export interface IBasketItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export interface IBasket {
    id: string;
    items: IBasketItem[];
}

export class Basket implements IBasket {
    id = cuid();
    items: IBasketItem[] = [];
    shippingPrice = 0;
}