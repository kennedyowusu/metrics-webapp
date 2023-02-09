import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Test Components', () => {
  test('Components should match with snapshot', () => {
    const AppTest = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(AppTest).toMatchSnapshot();
  });
});
