import { v4 as uuidv4 } from "uuid";

const CardItem = (props) => {
  return (
    <article className="card-item">
      <div className="card-item-data">
        <h1 className="card-item-img">{props.emoji}</h1>
        <p className="card-item-info">{props.name}</p>
        <p className="card-item-info">{props.species}</p>
        <p className="card-item-info">{props.habitat}</p>
        <p className="card-item-info">{props.diet}</p>
        <p className="card-item-info">{props.lifespan} years</p>
      </div>

      <ul className="card-item-fun-facts">
        {props.funFacts.map((funFuct) => {
          return (
            <li className="card-item-fun-fact" key={uuidv4()}>
              {funFuct}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default CardItem;
