import './app.scss';
import CardBigCell from './components/cardBigCell/cardBigCell';
import CardCell from './components/cardCell/cardCell';

// import classnames from 'classnames';
// const CardCell = props => {
//     const className = classnames('card-header', {
//       primary: props.type === 'primary',
//       danger: props.type === 'danger',
//       disabled: props.disabled,
//     });
//   return (
//     <div className={props.className} id={props.id}>
//       {props.text}
//     </div>
//   );
// };

const cards = [
  [
    [{ text: 'Безлимитный 300' }, { id: '300-1' }],
    [{ text: 'До 10 Мбит/сек' }, { id: '300-2' }],
    [{ text: 'Объем включенного трафика не ограничен' }, { id: '300-3' }],
    [
      { currency: 'руб' },
      { amount: '300' },
      { period: '/мес' },
      { id: '300-4' },
    ],
  ],
  [
    [{ text: 'Безлимитный 450' }, { id: '450-1' }],
    [{ text: 'До 50 Мбит/сек' }, { id: '450-2' }],
    [{ text: 'Объем включенного трафика не ограничен' }, { id: '450-3' }],
    [
      { currency: 'руб' },
      { amount: '450' },
      { period: '/мес' },
      { id: '300-4' },
    ],
  ],
  [
    [{ text: 'Безлимитный 550' }, { id: '550-1' }],
    [{ text: 'До 100 Мбит/сек' }, { id: '550-2' }],
    [{ text: 'Объем включенного трафика не ограничен' }, { id: '550-3' }],
    [
      { currency: 'руб' },
      { amount: '550' },
      { period: '/мес' },
      { id: '300-4' },
    ],
  ],
  [
    [{ text: 'Безлимитный 1000' }, { id: '1000-1' }],
    [{ text: 'До 200 Мбит/сек' }, { id: '1000-2' }],
    [{ text: 'Объем включенного трафика не ограничен' }, { id: '1000-3' }],
    [
      { currency: 'руб' },
      { amount: '1000' },
      { period: '/мес' },
      { id: '300-4' },
    ],
  ],
];

function App() {
  return (
    <div className="App">
      {cards.map((card, i) => (
        <div className="card" key={`card[0][1].id + ${i}`}>
          <CardCell
            text={card[0][0].text}
            id={card[0][1].id}
            className="card-header"
          />
          <CardBigCell
            currency={card[3][0].currency}
            amount={card[3][1].amount}
            period={card[3][2].period}
          />
          <CardCell
            text={card[1][0].text}
            id={card[1][1].id}
            className="card-speed"
          />
          <CardCell
            text={card[2][0].text}
            id={card[2][1].id}
            className="card-options"
          />
        </div>
      ))}
    </div>
  );
}

export default App;
