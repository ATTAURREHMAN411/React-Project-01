import "../App.css"


function Buttons(prop){
    return(
        <>
        <button style={{ 
         backgroundColor : prop.bgColor ? prop.bgColor : "transparent",
         padding: "6px 16px",
         height: "32px",
         color: prop.bgColor ? "white" : "black",
         fontWeight: "500",
         border: prop.bgColor ? "none" : "1px solid black",
         borderRadius: "3px"
        }}>{prop.tittle}</button>
        </>
    )
}

export default Buttons
















