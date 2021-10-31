import './style/app1.css';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Мужчины младше 15 лет', 'Женщины младше 15 лет', 'Мужчины старше 14 и младше 65 лет', 'Женщины старше 14 и младше 65 лет', 'Мужчины старше 65 лет', 'Женщины старше 65 лет'],
  datasets: [
    {
      label: 'number of people',
      data: [11380762, 10791070, 49953037, 54826754, 5740739, 13270988],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: ['Распределение населения по возрастным группам'],
      font: {
        size: 50
      },
      position: 'top',
    }
  }
}



function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>Pie Chart</h1>
      </div>
      <div class="pie-chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default App;
