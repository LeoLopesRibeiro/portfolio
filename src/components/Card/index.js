import './style.css';
import { Link } from 'react-router-dom';

function Card(props) {

    return(
        <div className='cardBody'>
        <div className="cardBox">
            <h3 className='tittle'>{props.tittle}</h3>
            <img src={props.img} alt="imagem" width={146} height={160}></img>
        </div>
        <div className='cardText'>
            <p>{props.text}</p>
            <Link className='link' to={props.navigation}>See more</Link>
        </div>
        </div>
    )
}

export default Card;