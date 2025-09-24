import { useRef, useEffect, useState } from "react";
import { BorderBottomLink } from "../GlobalElements";
import { productsPresentation } from "../../data/products";
import {
  ProductsPresentationContainer,
  ProductInfoContainer,
  PriceAndLinkContainer
} from "./ProductsPresentationsElements";

const ProductPresentation = () => {
  const products = productsPresentation;
  const [currProduct, setCurrProduct] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrProduct((prevCurrProduct) =>
          prevCurrProduct === products.length - 1 ? 0 : prevCurrProduct + 1
        ),
      10000
    );

    return () => {
      resetTimeout();
    };
  }, [currProduct, products.length]);

  return (
    <>
      <ProductsPresentationContainer background={products[currProduct].img}>
        <ProductInfoContainer background={products[currProduct].color}>
          <p>{products[currProduct].name}</p>
          <p>{products[currProduct].artist}</p>
          <PriceAndLinkContainer>
            <p>{products[currProduct].price}</p>
            <BorderBottomLink>More info</BorderBottomLink>
          </PriceAndLinkContainer>
        </ProductInfoContainer>
      </ProductsPresentationContainer>
    </>
  );
};

export default ProductPresentation;
