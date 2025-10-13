export const StaticComponent = () => {
  const items = [1, 2, 3, 4];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
