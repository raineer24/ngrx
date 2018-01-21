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
export const FAVORITE_PRODUCTS: Product[] = [
    { id: 1, product: 'Beef', category: 'Frozen' },
    { id: 2, product: 'PITA', category: 'BAKERY' }
]
