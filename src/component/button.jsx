const Button=({onClick,text,customclass})=>{
return(
    <button className={customclass} onClick={onClick}>{text}</button>
)
}
export default Button
