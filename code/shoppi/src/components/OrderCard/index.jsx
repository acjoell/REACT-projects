export const OrderCard = (props) => {
  const { id, title, images, price, handleDelete } = props;
  return (
    <div className="flex justify-between items-center mt-4 gap-4" >
      <div className="flex items-center gap-4">
        <figure className="w-16 h-16">
          <img className="w-full h-full rounded-lg object-cover" src={images?.[0]} alt={title} />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <p className="text-lg font-medium">${price}</p>
      { handleDelete && 
        <div className="cursor-pointer" onClick={() => handleDelete(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      }
    </div>
  );
};