export const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`dark:border-neutral-700 ${className}`}>{children}</div>
  );
};
