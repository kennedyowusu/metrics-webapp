import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Test Components', () => {
  test('Components should match with snapshot', () => {
    const AppTest = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(AppTest).toMatchSnapshot();
  });
});
