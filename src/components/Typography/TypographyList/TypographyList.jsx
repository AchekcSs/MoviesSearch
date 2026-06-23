const TypographyList = ({ items }) => {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {items.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default TypographyList;
