import { Link } from "react-router-dom"
import { OrdersCard } from "../../components/OrdersCard"
import { useShoppingCart } from "../../hooks/useShoppingCart"

export const MyOrders = () => {
  const { order } = useShoppingCart()

  console.log('order', order)
  return (
    <section className="flex flex-col justify-center px-6 border-b-gray-300">
      <h1 className="font-medium text-2xl mb-6">My Orders</h1>
      <article className="flex flex-col items-center gap-3 py-4 ">
        {
          order.map((orderItem) => (
            <Link to={`/my-orders/${orderItem.id}`} key={orderItem.id}>
              <OrdersCard {...orderItem} />
            </Link>
          ))
        }

      </article>
    </section>
  )
}