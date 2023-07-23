import { CityCard } from '../components';
import { CityModel } from '../models';
import './app.css';

export function App() {
  return (
    <div>
      {/* <CityCard
        city={
          new CityModel({
            name: 'New York City',
            name_native: 'New York City',
            country: 'USA',
            continent: 'North America',
            latitude: 40.73061,
            longitude: -73.935242,
            population: 8419000,
            founded: 1624,
            landmarks: [
              { name: 'Chrysler Building' },
              { name: 'Brooklyn Bridge' },
              { name: 'Madison Square Garden' },
            ],
          })
        }
      />
      <CityCard
        loading
        city={
          new CityModel({
            name: 'New York City',
            name_native: 'New York City',
            country: 'USA',
            continent: 'North America',
            latitude: 40.73061,
            longitude: -73.935242,
            population: 8419000,
            founded: 1624,
            landmarks: [
              { name: 'Chrysler Building' },
              { name: 'Brooklyn Bridge' },
              { name: 'Madison Square Garden' },
            ],
          })
        }
      /> */}
    </div>
  );
}

export default App;
