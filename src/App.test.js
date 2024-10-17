import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';

test('Renders the Header heading', () => {
  render(<BrowserRouter><App /></BrowserRouter>)
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();
  const reserveButton = document.getElementById("reserve-btn");
  expect(reserveButton).toHaveTextContent("Reserve Table");
  fireEvent.click(reserveButton);
})

test('Render Reservations Form fiels ', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  const makeReserveBt = document.getElementById('make-reservation');
  expect(makeReserveBt).toHaveTextContent("Make Your Reservation");

})

