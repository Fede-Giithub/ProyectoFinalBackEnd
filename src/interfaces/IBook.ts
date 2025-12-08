interface IBook {
  name: string,
  description: string,
  stock: number,
  category: string
  price: number,
  image?: string,
  author:string
}

export default IBook