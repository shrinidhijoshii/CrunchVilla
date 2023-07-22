import { UseSelector, useSelector, useDispatch } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="ml-auto mr-auto text-center p-2 shadow-md">
      <h1 className="font-bold text-2xl">Cart Items</h1>
      <strong>{cartItems.length} Items added</strong>
      <button
        className="bg-green-200 p-1 m-2"
        onClick={() => handleClearCart()}
      >
        Clear cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItems key={item.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
