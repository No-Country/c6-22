import { useDispatch } from "react-redux";
import styles from "../cards/Cards.module.css";
import { Link } from "react-router-dom";
import { addProduct } from "../../features/cartSlice";
import { formatPrice } from "../../helpers/formatPrice";
import { alertAddCart } from "../alerts/alertAddCart";

const { cardProducts, productImg, productInfo, cart } = styles;

const Cards = (product) => {
  const { name, img, price, details, id } = product;

  const newDetail =
    details.length < 50 ? details : details.slice(0, 50) + "...";

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addProduct({ name, img, price, details, id }));
    alertAddCart();
  };

  return (
    <div className={cardProducts} style={{ width: "14rem" }}>
      <div className={productImg}>
        <img src={img} alt={name} />
      </div>
      <div className={productInfo}>
        <h2>{name}</h2>
        <p>{newDetail}</p>
        <br></br>
        <h5> {formatPrice(price)}</h5>
        <br></br>

        <div>
          <Link to={`${id}`}>Ver</Link>
        </div>
      </div>
      <button type="button" onClick={handleClick} className={cart}>
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7.75 7.75H19.25L17.6128 14.7081C17.4002 15.6115 16.5941 16.25 15.666 16.25H11.5395C10.632 16.25 9.83827 15.639 9.60606 14.7618L7.75 7.75ZM7.75 7.75L7 4.75H4.75"
          />
          <circle cx="10" cy="19" r="1" fill="currentColor" />
          <circle cx="17" cy="19" r="1" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
};

export default Cards;
