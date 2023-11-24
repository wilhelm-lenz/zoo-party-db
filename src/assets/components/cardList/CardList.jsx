import CardItem from "../cardItem/CardItem";
import "../cardItem/CardItem.scss";
import animals from "../../data/data";
import { v4 as uuidv4 } from "uuid";

const CardList = () => {
  return (
    <section className="card-list">
      {animals.map((animal) => (
        <CardItem
          key={uuidv4()}
          name={animal.name}
          species={animal.species}
          habitat={animal.habitat}
          lifespan={animal.lifespan}
          diet={animal.diet}
          funFacts={animal.funFacts}
          emoji={animal.emoji}
        />
      ))}
    </section>
  );
};

export default CardList;
