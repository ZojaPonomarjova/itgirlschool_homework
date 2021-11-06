import './App.css';
import superHeroes from './components/json/jsonHeroes';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <h1 className="main__title">
        Ликбез по комиксам: все, что надо знать о 10 крутейших супергероях
      </h1>
      <div className="main__container">
        {superHeroes.map(hero => (
          <Card
            name={hero.name}
            universe={hero.universe}
            alterEgo={hero.alterEgo}
            occupation={hero.occupation}
            friends={hero.friends}
            superPower={hero.superPower}
            photoSrc={hero.photoSrc}
            key={hero.id}
            id={hero.id}
            details={hero.details}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
