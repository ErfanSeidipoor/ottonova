import { CityCard } from '../components';
import { CityModel } from '../models';
import './app.css';

import Button from '@mui/material/Button';

export function App() {
  return (
    <div>
      <h1>{'ottonova'}</h1>
      <Button>{'ottonova'}</Button>
      <CityCard
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
      />
    </div>
  );
}

export default App;
