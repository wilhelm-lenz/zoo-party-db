import "./App.css";
import CardList from "./assets/components/cardList/CardList";
import "./assets/components/cardList/CardList.scss";

function App() {
  return (
    <>
      <section className="section-animals">
        <h1 className="heading-primary">ZooPartyDB</h1>
        <p className="heading-secondary">
          Explore the fascinating world of zoo animals!
        </p>
        <CardList />
      </section>
    </>
  );
}

export default App;
