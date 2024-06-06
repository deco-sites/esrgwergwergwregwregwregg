import type { SectionProps } from "deco/mod.ts";
import { loader as ProductsLoader } from "site/loaders/ProductsLoader.tsx";

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: URL;
//   rating: {
//     rate: number;
//     count: number;
//   }
// }

// export interface Returns {
//   products: Product[]
// }

// export async function loader(
//   _req: Request,
// ): Promise<Returns> {
//   const products = (await fetch(
//     'https://fakestoreapi.com/products',
//   ).then((response) => response.json()));
//   return { products };
// }

export default function ProductsSection(
  { products }: SectionProps<typeof loader>,
) {
  return (
    <div class="p-4">
      <ul>
        {products.map((product) => <li>
          <div class="border">
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.image}</p>
            <p>{product.rating.rate}</p>
            <p>{product.rating.count}</p>
          </div>
        </li>)}
      </ul>
    </div>
  );
}