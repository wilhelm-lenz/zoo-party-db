import CardItem from "../cardItem/CardItem";
import "../cardItem/CardItem.scss";
import animals from "../../data/data";

const CardList = () => {
  return (
    <section className="card-list">
      {animals.map((animal, index) => (
        <CardItem
          key={index}
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
