export default function MenuButton({ children , image, onSelect }) {



    return (
        <div 
            className="list1" 
            onClick={onSelect}
        >
            <img className="menu-icon" alt="menu-icon" src={image} />
          {children}
          
        </div>

    );
  }