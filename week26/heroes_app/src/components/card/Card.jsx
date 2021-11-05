import './card.css';
import Stars from '../stars/Stars'


function Card({ name, universe, alterEgo, occupation, friends, superPower, photoSrc, id, details }) {
    return (
        <div className="card" id={id}>
            <div className="card__background" style={{ backgroundImage: `url(${photoSrc})` }} ></div>
            <div className="card__text-container">
                <h2 className="card__title">{name}</h2>
                <p className="card__paragraph"><span className="card__subtitle">Вселенная: </span><span className="card__text">{universe}</span></p>
                <p className="card__paragraph"><span className="card__subtitle">Альтер Эго: </span><span className="card__text">{alterEgo}</span></p>
                <p className="card__paragraph"><span className="card__subtitle">Род деятельности: </span><span className="card__text">{occupation}</span></p>
                <p className="card__paragraph"><span className="card__subtitle">Друзья: </span><span className="card__text">{friends}</span></p>
                <p className="card__paragraph"><span className="card__subtitle">Суперсилы: </span><span className="card__text">{superPower}</span></p>
                <p className="card__paragraph"><span className="card__subtitle">Подробнее: </span><span className="card__text">{details}</span></p>
            </div>
            <Stars id={id} />
        </div >
    );
}

export default Card;