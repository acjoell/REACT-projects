import { Link, useParams } from "react-router-dom";
import { OrderCard } from "../../components/OrderCard";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { totalPrice } from "../../utils";

export const MyOrder = () => {
  const { orderId } = useParams();
  const { order } = useShoppingCart();

  let specificOrder;
  if (orderId) { // Orden específica por ID
    specificOrder = order.find((o) => o.id.toString() === orderId);
  } else { // Última orden (el array más reciente)
    specificOrder = order?.slice(-1)[0];
  }

  // Filtramos solo los productos válidos
  const products = typeof specificOrder === "object"
    ? Object.values(specificOrder).filter( (item) => item?.id ) : [];

  return (
    <main className="flex justify-center">
      <div className="flex flex-col p-4">
        <div className="flex gap-4 mb-4 ">
          <Link to="/my-orders" className="self-center">
            {/* Go back */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer mr-15 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <h1 className="font-medium text-2xl">My Order</h1>
        </div>
        {products.map((product) => {
          return <OrderCard key={product.id} {...product} />;
        })}
        {products.length > 0 && (
          <div className="mt-10">
            <p className="font-size-medium text-lg">
              Total: {totalPrice(products)} €
            </p>
          </div>
        )}
      </div>
    </main>
  );
};