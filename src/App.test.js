import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  /* test('renders App link', () => {
    render(<App />);
    const linkElement = screen.getByText(/App/i);
    expect(linkElement).toBeInTheDocument();
  }); */

  test('money value default is 0', () => {
    render(<App />);

    const element = screen.getByText(/Money selected: 0 €/i);
    expect(element).toBeInTheDocument();
  })

  test('changing money value is reflected in the app', () => {
    render(<App />);
    const input = screen.getByTestId(/money-selector/i);
    fireEvent.change(input, {target: { value: 100 }})

    const moneyElement = screen.getByText(/Money selected: 100 €/i);
    expect(moneyElement).toBeInTheDocument();

    const interestElement = screen.getByText(/Interests: 16%/i);
    expect(interestElement).toBeInTheDocument();

    const moneyMonthElement = screen.getByText(/Money to give per month: 19.3 €/i);
    expect(moneyMonthElement).toBeInTheDocument();
  })

  test('month value default is 6', () => {
    render(<App />);

    const element = screen.getByText(/Months selected: 6/i);
    expect(element).toBeInTheDocument();
  })

  test('changing month value is reflected in the app', () => {
    render(<App />);
    const input = screen.getByTestId(/month-selector/i);
    fireEvent.change(input, {target: { value: 24 }})

    const element = screen.getByText(/Months selected: 24/i);
    expect(element).toBeInTheDocument();
  })
})
