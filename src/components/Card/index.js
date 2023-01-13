import './style.css';


function Card(props) {

    return(
        <div className="cardBox">
            <h1>{props.tittle}</h1>
            <img src={props.img} alt="imagem"></img>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;