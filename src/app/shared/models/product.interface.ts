  //output
//   {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// }
interface Rating{
  rate: number;
  count: number;
}
export  interface  Products {
  id: number;
  title: string;
  price:number;
  category: string;
  description: string;
  image:string;
  rating:Rating;
  qty:number;
  subTotal: number;

}
