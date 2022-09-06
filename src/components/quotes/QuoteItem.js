import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <figcaption>{props.author}</figcaption>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
      </figure>
      <Link className="btn" to={`/quotes/${props.id}`}>View Fullscreen</Link>
    </li>
  );
};

export default QuoteItem;
