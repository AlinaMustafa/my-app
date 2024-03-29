import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn React/i);
  expect(linkElement).toBeInTheDocument();
});

// test('URL is correct', () => {
//   render(<App />);
//   const linkElement = screen.getByTestId('learn-link');
//   expect(linkElement.href).toContain('ultimateqa.com');
// });
