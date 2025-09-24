import { useContext, useState } from "react";
import { StateContext } from "../StateProvider";
import { products } from "../../data/products";
import { BsBagPlusFill } from "react-icons/bs";
import {
  ShopSectionContainer,
  Title,
  GridProductsContainer,
  ProductCard,
  ImgContainer,
  Img,
  InfoProductContainer,
  Name,
  Artist,
  Price,
  PiecesNumber,
  AddToCart,
  RightContainer,
  ProductTextContainer
} from "./ShopSectionElements";

const ShopSection = () => {
  const [mouseOnImg, setMouseOnImg] = useState(false);
  const { cart, setCart, setShowCart } = useContext(StateContext);

  const onAdd = (product) => {
    const exist = cart.find((x) => x.name === product.name);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.name === product.name ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    setShowCart(true);
  };
  return (
    <>
      <ShopSectionContainer id="Shop">
        <Title>SHOP GOODFIT PUZZLES</Title>
        <GridProductsContainer>
          {products.map((product, i) => (
            <ProductCard key={i}>
              <ImgContainer
                onMouseEnter={() => setMouseOnImg([true, i])}
                onMouseLeave={() => setMouseOnImg(false)}
              >
                <Img
                  src={mouseOnImg[1] === i ? product.img[1] : product.img[0]}
                ></Img>
              </ImgContainer>

              <ProductTextContainer>
                <InfoProductContainer>
                  <Name>{product.name}</Name>
                  <Artist>{product.artist}</Artist>
                  <Price>
                    {"$"}
                    {product.price}
                  </Price>
                </InfoProductContainer>
                <RightContainer>
                  <PiecesNumber>
                    {"PIECES"}
                    {product.piecesNumber}
                  </PiecesNumber>
                  <AddToCart onClick={() => onAdd(product)}>
                    <BsBagPlusFill />
                  </AddToCart>
                </RightContainer>
              </ProductTextContainer>
            </ProductCard>
          ))}
        </GridProductsContainer>
      </ShopSectionContainer>
    </>
  );
};

export default ShopSection;
