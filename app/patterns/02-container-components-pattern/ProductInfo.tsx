"use client";

interface ProductInfoProps {
  product: {
    name: string;
    price: number;
    description: string;
    rating: number;
  };
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { name, price, description, rating } = product || {};

  // console.log(name, price);

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  );
};
