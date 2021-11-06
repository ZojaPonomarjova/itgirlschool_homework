import { Fragment } from 'react';
import './stars.css';

function Stars(props) {
  return (
    <div className="rating">
      <div className="rating__items">
        {new Array(5).fill(0).map((el, i) => (
          <Fragment key={i}>
            <input
              type="radio"
              name={props.id + 'Rating'}
              id={props.id + '-rating__' + (i + 1)}
              className="rating__item"
              value={i + 1}
            />
            <label
              htmlFor={props.id + '-rating__' + (i + 1)}
              className="rating__label"
            ></label>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Stars;
