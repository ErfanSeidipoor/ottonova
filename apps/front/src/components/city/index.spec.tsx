import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { CityCard } from '.';
import { CityModel } from '../../models';

describe('CityCard', () => {
  it('should render loading skeleton when loading is true', () => {
    render(<CityCard loading />);
    expect(screen.getByTestId('loading-skeleton')).toBeDefined();
  });

  it('should render city details when city object is provided', () => {
    const mockCity = new CityModel({
      continent: faker.word.noun({ length: 50 }),
      country: faker.location.country(),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      name_native: faker.word.noun({ length: 50 }),
      name: faker.word.noun({ length: 50 }),
      founded: faker.date.past().getFullYear(),
      landmarks: [
        { name: faker.word.noun({ length: 50 }) },
        { name: faker.word.noun({ length: 50 }) },
      ],
    });

    render(<CityCard city={mockCity} />);

    expect(screen.getByText(mockCity.getName())).toBeDefined();
    expect(screen.getByText(mockCity.getContinent())).toBeDefined();
    expect(screen.getByText(mockCity.getCountry())).toBeDefined();
    expect(screen.getByText(mockCity.getNameNative())).toBeDefined();
    expect(screen.getByText(`${mockCity.getFounded()}`)).toBeDefined();
    expect(screen.getByText(`${mockCity.getPopulation()}`)).toBeDefined();
    expect(
      screen.getByText(`${mockCity.getLandmarkModels()[0].getName()}`)
    ).toBeDefined();
    expect(
      screen.getByText(`${mockCity.getLandmarkModels()[1].getName()}`)
    ).toBeDefined();
  });
});
