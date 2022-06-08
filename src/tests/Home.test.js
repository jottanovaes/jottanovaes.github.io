import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';


test('renders learn react link', () => {
  render(<Home />);
  
  const logo = screen.getByText(/jj/i);
  const about = screen.getByText(/about me/i);
  const projects = screen.getByText(/projects/i);
  const contact = screen.getByText(/get in touch/i);

  expect(logo).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(projects).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
});
