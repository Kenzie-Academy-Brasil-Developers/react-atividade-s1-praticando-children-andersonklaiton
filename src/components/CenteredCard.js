import "./style.css"

function CenteredCard({children}){
    return(
        <div className="cardInfo">
            <span>
               {children}
            </span>
        </div>
    )
}
export default CenteredCard