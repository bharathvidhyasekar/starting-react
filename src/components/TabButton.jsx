export default function TabButton({children,select,isSelected}){
    
    return(
        <li><button className={isSelected ? "active" : undefined} onClick={select}>{children}</button></li>

    )
}