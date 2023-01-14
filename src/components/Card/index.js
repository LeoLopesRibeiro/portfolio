import './style.css';


function Card(props) {

    return(
        <div className='cardBody'>
        <div className="cardBox">
            <h3 className='tittle'>{props.tittle}</h3>
            <img src={props.img} alt="imagem" width={146} height={160}></img>
        </div>
        <div className='cardText'>
            <p>{props.text}</p>
        </div>
        </div>
    )
}

export default Card;