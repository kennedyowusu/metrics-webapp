import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import so from '../store/configureStore';
import App from '../App';

describe('Test App Component', () => {
  test('App component should match with snapshot', () => {
    const AppTest = render(
      <Provider store={configureStore}>
        <App />
      </Provider>,
    );

    expect(AppTest).toMatchSnapshot();
  });
});
