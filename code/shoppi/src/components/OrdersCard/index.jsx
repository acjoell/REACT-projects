export const OrdersCard = (props) => {
  const { id, totalPrice, length } = props;
  return (
    <div className="w-200 flex flex-row items-start mt-4 gap-40 border-b pb-4 shadow-gray-200 shadow-md hover:shadow-lg rounded-lg p-4">
      <p className="text-sm font-light">Order #{id}</p>
      <p className="text-sm font-light">{length} items</p>
      <p className="text-lg font-medium">${totalPrice}</p>
      {/* Icon go ahead */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};