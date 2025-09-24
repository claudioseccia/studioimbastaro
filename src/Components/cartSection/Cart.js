import { useContext } from "react";
import { StateContext } from "../StateProvider";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import {
  ArticleCard,
  ArticleInfoContainer,
  ArticleNane,
  ArticleNumber,
  ArticlePrice,
  BtnAdd,
  CartFooter,
  CartHead,
  CheckoutBtn,
  Minitature,
  RemoveBtn,
  CartBody,
  Styledp
} from "./CartElements";

const customStyles = {
  overlay: {
    position: "fixed",
    zIndex: 1020,
    top: 0,
    left: 0,
    width: "98vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "flex-end"
  },
  content: {
    background: "white",
    top: "0",
    maxWidth: "calc(100vw - 2rem)",
    maxHeight: "calc(100vh - 2rem)",
    overflowY: "auto",
    position: "relative",
    border: "1px solid #ccc",
    borderRadius: "0.3rem"
  }
};

const Cart = () => {
  const { setShowCart, showCart } = useContext(StateContext);
  const { cart, setCart } = useContext(StateContext);
  const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  function openModal() {}

  function afterOpenModal() {}

  function closeModal() {
    setShowCart(false);
  }

  const onAdd = (product) => {
    const exist = cart.find((ele) => ele.name === product.name);
    if (exist) {
      setCart(
        cart.map((ele) =>
          ele.name === product.name ? { ...exist, qty: exist.qty + 1 } : ele
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
  const onMinus = (product) => {
    const exist = cart.find((ele) => ele.name === product.name);
    if (exist.qty === 1) {
      setCart(cart.filter((ele) => ele.name !== product.name));
    } else {
      setCart(
        cart.map((x) =>
          x.name === product.name ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onRemove = (product) => {
    setCart(cart.filter((ele) => ele.name !== product.name));
  };
  return (
    <div>
      <Modal
        isOpen={showCart}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CartHead>
          <h4>Cart</h4>
          <p onClick={() => setShowCart(false)}>
            <AiOutlineClose />
          </p>
        </CartHead>
        {cart.length > 0 ? (
          <>
            <CartBody>
              {cart.map((product, i) => (
                <ArticleCard key={i}>
                  <Minitature src={product.img[0]}></Minitature>
                  <ArticleInfoContainer>
                    <ArticleNane>{product.name}</ArticleNane>
                    <ArticlePrice>${product.price}</ArticlePrice>
                    <ArticleNumber>
                      <BtnAdd onClick={() => onMinus(product)}>-</BtnAdd>
                      <p>{product.qty}</p>
                      <BtnAdd onClick={() => onAdd(product)}>+</BtnAdd>
                    </ArticleNumber>
                  </ArticleInfoContainer>
                  <RemoveBtn onClick={() => onRemove(product)}>
                    Remove
                  </RemoveBtn>
                </ArticleCard>
              ))}
            </CartBody>

            <CartFooter>
              <h5>Add Order Note</h5>
              <p>Shipping & taxes calculated at checkout</p>
              <CheckoutBtn>Checkout . ${itemsPrice}</CheckoutBtn>
            </CartFooter>
          </>
        ) : (
          <Styledp>YOUR CART IS EMPTY</Styledp>
        )}
      </Modal>
    </div>
  );
};

export default Cart;
