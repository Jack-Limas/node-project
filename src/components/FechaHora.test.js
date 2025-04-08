import { render, screen } from '@testing-library/react';
import FechaHora from './FechaHora';

describe('FechaHora', () => {
  it('debe mostrar el título y la fecha/hora actual', () => {
    render(<FechaHora />);
    expect(screen.getByText(/Fecha y Hora Actual/i)).toBeInTheDocument();
    expect(screen.getByText(/Fecha:/i)).toBeInTheDocument();
    expect(screen.getByText(/Hora:/i)).toBeInTheDocument();
  });
});
