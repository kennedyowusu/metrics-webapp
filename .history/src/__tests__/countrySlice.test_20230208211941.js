import { fetchCountries, countriesSlice } from '../redux/slices/countriesSlice';
import instance from 
jest.mock('../../utils/axios', () => ({
  get: jest.fn(),
}));

describe('countriesSlice', () => {
  it('dispatches actions correctly on successful fetch', async () => {
    const mockData = [{ name: 'Afghanistan' }, { name: 'Albania' }];

    instance.get.mockResolvedValue({ data: mockData });

    const dispatch = jest.fn();
    const getState = () => ({});

    await fetchCountries()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: countriesSlice.fulfilled.type,
      payload: mockData,
    });
    expect(instance.get).toHaveBeenCalledWith('/all');
  });
});
