// Home.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page'; // Asegúrate de ajustar la ruta según la ubicación de tu componente Home
import { dataPanels } from '@/utils/data';

// Mockear los datos si es necesario
jest.mock('@/utils/data', () => ({
  dataPanels: [
    { titleText: 'Panel 1', mainText: 'Description 1' },
    { titleText: 'Panel 2', mainText: 'Description 2' },
  ],
}));

describe('Home component', () => {
  it('should render the correct number of Panels', () => {
    render(<Home />);
    
    // Verifica si el número de paneles es el esperado
    const panels = screen.getAllByText(/Panel/i);
    expect(panels).toHaveLength(dataPanels.length);
  });

  it('should display the correct content in Panels', () => {
    render(<Home />);
    
    // Verifica si el contenido de los paneles es el esperado
    dataPanels.forEach(panel => {
      expect(screen.getByText(panel.mainText)).toBeInTheDocument();
      expect(screen.getByText(panel.mainText)).toBeInTheDocument();
    });
  });
});
