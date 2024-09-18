import ButtonRoundedSvg from "../assets/svg/ButtonRoundedSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonRoundedSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a className={classes} href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonRoundedSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
