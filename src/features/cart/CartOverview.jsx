import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalQuantity) return null;

  return (
    <div className="bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 font-semibold sm:space-x-6 space-x-4">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>

      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
