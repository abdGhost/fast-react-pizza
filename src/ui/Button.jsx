import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "text-sm bg-yellow-400 uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 translate-colors duration-300 focus:outline-none focus-ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5  text-xs",
    secondary:
      "text-sm bg-transparent border-2 border-stone-300 uppercase font-semibold text-stone-400  inline-block tracking-wide rounded-full hover:bg-stone-200 hover:text-stone-800 translate-colors duration-300 focus:outline-none focus-ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
