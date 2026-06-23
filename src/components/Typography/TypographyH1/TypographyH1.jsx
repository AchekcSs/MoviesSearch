const TypographyH1 = ({ children, className = "" }) => {
  return (
    <h1 className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight ${className}`}>
      {children}
    </h1>
  );
};

export default TypographyH1;
