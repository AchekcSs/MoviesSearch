const TypographyP = ({ children, className = "" }) => {
  return (
    <p className={`leading-7 not-first:mt-6 ${className}`}>
      {children}
    </p>
  );
};

export default TypographyP;
