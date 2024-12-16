interface CardProps {
    children: React.ReactNode;
    padding?: string;
    border?: boolean; // Toggle border
    shadow?: boolean; // Toggle shadow
    className?: string;
  }
  
  export const Card: React.FC<CardProps> = ({
    children,
    padding = "p-4",
    border = true,
    shadow = true,
    className,
  }) => {
    return (
      <div
        className={`
          ${padding} 
          ${border ? "border border-gray-200" : ""} 
          ${shadow ? "shadow-lg" : ""} 
          bg-white rounded-lg 
          ${className || ""}
        `}
      >
        {children}
      </div>
    );
  };
  
  export default Card;
  