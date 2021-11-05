import './stars.css';


function Stars(props) {
    return (
        <div className="rating">
            <div className="rating__items">
                <input type="radio" name={props.id + "Rating"} id={props.id + "-rating__5"} className="rating__item" value="5" />
                <label htmlFor={props.id + "-rating__5"} className="rating__label"></label>
                <input type="radio" name={props.id + "Rating"} id={props.id + "-rating__4"} className="rating__item" value="4" />
                <label htmlFor={props.id + "-rating__4"} className="rating__label"></label>
                <input type="radio" name={props.id + "Rating"} id={props.id + "-rating__3"} className="rating__item" value="3" />
                <label htmlFor={props.id + "-rating__3"} className="rating__label"></label>
                <input type="radio" name={props.id + "Rating"} id={props.id + "-rating__2"} className="rating__item" value="2" />
                <label htmlFor={props.id + "-rating__2"} className="rating__label"></label>
                <input type="radio" name={props.id + "Rating"} id={props.id + "-rating__1"} className="rating__item" value="1" />
                <label htmlFor={props.id + "-rating__1"} className="rating__label"></label>
            </div>
        </div>
    );
}

export default Stars;