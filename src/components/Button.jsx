const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-3 px-4 bg-blue-gradient font-poppins ${styles} font-medium text-[18px] text-primary outline-none rounded-md`}
    >
      Get Started
    </button>
  );
};
export default Button;
