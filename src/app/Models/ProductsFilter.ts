export interface ProductHTTP {
    id?: number;
    name: string;
    description: {
        short: string;
        long: string;
    }
    price: number;
    iva: number;
    sku: string;
    stock: number;
    category: {
        id?: number;
        name: string;
    }
   picture:string;
   
  
}