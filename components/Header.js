// components/Header.js
const Header = ({ title, height, color, textColor }) => {
    return (
      <header className={`py-4 flex items-center justify-center`} style={{ height, backgroundColor: color }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl font-bold mb-2 text-center ${textColor}`}>{title}</h1>
        </div>
      </header>
    );
  };
  
  export default Header;