export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-neutral-800 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
