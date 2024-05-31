import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';


jest.mock('../src/utils/data', () => ({
  dataPanels: [
    {
      urlPanelDesing: '../public/demo.svg',
      srcIcon:'../public/iconTech1.svg',
      widthTitle: '200px',
      opacityText: '1',
      titleText: 'Understanding needs',
      mainText: `We identify who has the problem or need and provide a detailed description of what the problem entails`,
    },
    {
      urlPanelDesing: '../public/demo.svg',
      srcIcon:'../public/iconTech1.svg',
      widthTitle: '200px',
      opacityText: '0.5',
      titleText: 'Identifying opportunities',
      mainText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
    },
  ],
}));

describe('Home component', () => {
  it('should render the correct number of Panels', () => {
    render(<Home />);
    const panels = screen.getAllByRole('heading', { level: 2 });
    expect(panels).toHaveLength(2);
  });

  it('should display the correct content in Panels', () => {
    render(<Home />);
    const panelTitles = ['Understanding needs', 'Identifying opportunities'];
    const panelMainTexts = [
      `We identify who has the problem or need and provide a detailed description of what the problem entails`,
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`
    ];

    panelTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    panelMainTexts.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
