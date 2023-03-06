function Banner({ children, status }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;
