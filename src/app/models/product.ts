export interface Product {
    id: number;
    product: string;
    category: string;
}


export const MEAT_PRODUCTS: Product[] = [
  {id: 1, product: 'Beef', category: 'Frozen'},
   {id: 2, product: 'Lamb', category: 'Frozen'}
]

export const SPECIALTY_PRODUCTS: Product[] = [
    { id: 1, product: 'WRAPS', category: 'BAKERY' },
    { id: 2, product: 'PITA', category: 'BAKERY' }
]
export const COFFEE_PRODUCTS: Product[] = [
    { id: 1, product: '3-IN-1', category: 'BEVERAGES' },
    { id: 2, product: 'READY TO DRINK', category: 'BEVERAGES' }
]
