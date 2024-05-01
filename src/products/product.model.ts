export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}
