import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { CityModel } from '../../models';
import { MainPage } from './index';
import * as useDataModule from './useData';

const createMockCity = () =>
  new CityModel({
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

// // Mock the useData hook
jest.mock('./useData', () => ({
  useData: jest.fn(() => ({
    cities: [],
    error: null,
    onShowMore: jest.fn(),
    showMore: true,
    isFetching: false,
  })),
}));

describe('MainPage Integration Test', () => {
  test('should render top cities title', () => {
    render(<MainPage />);
    const title = screen.getByText('Top Cities to Live in The World');
    expect(title).toBeDefined();
  });

  it('should render loading skeleton when isFetching is true and cities are empty', () => {
    jest.spyOn(useDataModule, 'useData').mockReturnValue({
      cities: [],
      error: '',
      onShowMore: jest.fn(),
      showMore: true,
      isFetching: true,
    });

    render(<MainPage />);

    // Assert that the loading skeleton is displayed
    expect(screen.getByTestId('main-page-loading-skeleton')).toBeDefined();
  });

  it('should render cities and "Show More" button', () => {
    // Mock city data and isFetching false
    jest.spyOn(useDataModule, 'useData').mockReturnValue({
      cities: [createMockCity(), createMockCity(), createMockCity()],
      error: '',
      onShowMore: jest.fn(),
      showMore: true,
      isFetching: false,
    });

    render(<MainPage />);

    // Assert that "Show More" button is displayed
    expect(screen.getByRole('button', { name: 'Show More' })).toBeDefined();

    // Assert that cities are displayed
    expect(screen.getAllByTestId('city-card')).toHaveLength(3);
  });

  it('should render error message when there is an error', () => {
    // Mock error
    jest.spyOn(useDataModule, 'useData').mockReturnValue({
      cities: [],
      error: 'Test error message',
      onShowMore: jest.fn(),
      showMore: true,
      isFetching: false,
    });

    render(<MainPage />);

    const error = screen.getByText('Test error message');
    expect(error).toBeDefined();
  });

  it('should call onShowMore when "Show More" button is clicked', () => {
    const onShowMoreMock = jest.fn();

    // Mock onShowMore and isFetching false
    jest.spyOn(useDataModule, 'useData').mockReturnValue({
      cities: [createMockCity()],
      error: '',
      onShowMore: onShowMoreMock,
      showMore: true,
      isFetching: false,
    });

    render(<MainPage />);

    // Click "Show More" button
    screen.getByRole('button', { name: 'Show More' }).click();

    // Assert that onShowMore is called
    expect(onShowMoreMock).toHaveBeenCalledTimes(1);
  });
});
