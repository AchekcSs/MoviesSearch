const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-360 my-0 mx-auto px-6 ${className}`}>
      {children}
    </div>
  )
}

export default Container
