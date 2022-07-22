export interface Product {
  id?: number;
  category : string;
  image : string;
  description : string;
  price : number;
  rating : {
    rate: number,
    count: number
  };
  title : string;
}
