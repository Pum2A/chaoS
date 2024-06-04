export interface Items {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  product_url: string;
  quantity: number;
  loading?: boolean;
  weight: number;
  disk_size: string;
  release_date: number;
}
