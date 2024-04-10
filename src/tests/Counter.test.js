import {fireEvent, render, screen} from '@testing-library/react'
import Counter from '../components/Counter'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

beforeEach(() => {
  render(<Counter/>)
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(/0/i);
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByRole('button', { name: '+'}))
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(/1/i);
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByRole('button', { name: '-'}))
  fireEvent.click(screen.getByRole('button', { name: '-'}))
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(/\-2/i);
});
