export default function TabButton({ children, isSelected, onSelect }) {
    return ( 
    <span>
        <button className={isSelected ? "active" : "secondary-button"} onClick={onSelect}>{children}</button>
    </span>
    );
  }