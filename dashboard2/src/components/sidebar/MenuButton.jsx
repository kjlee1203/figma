export default function MenuButton({ children , image, isSelected, onSelect }) {



    return (
        <div 
            className={isSelected ? "active-menu" : 'inactive-menu'} 
            onClick={onSelect}
        >
            <img className="menu-icon" alt="menu-icon" src={image} />
          {children}
          
        </div>

    );
  }