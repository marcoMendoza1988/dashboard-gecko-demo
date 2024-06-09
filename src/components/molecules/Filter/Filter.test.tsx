import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from './';

describe('Filter component', () => {
  const mockOnFilterChange = jest.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  it('renders filter buttons correctly', () => {
    render(<Filter activeFilter="all" onFilterChange={mockOnFilterChange} />);
    
    const allButton = screen.getByText('All');
    const stablecoinsButton = screen.getByText('stablecoins');
    const memecoinsButton = screen.getByText('memecoins');
    
    expect(allButton).toBeInTheDocument();
    expect(stablecoinsButton).toBeInTheDocument();
    expect(memecoinsButton).toBeInTheDocument();
  });

  it('calls onFilterChange when clicking a button', () => {
    render(<Filter activeFilter="all" onFilterChange={mockOnFilterChange} />);
    
    const stablecoinsButton = screen.getByText('stablecoins');
    fireEvent.click(stablecoinsButton);
    
    expect(mockOnFilterChange).toHaveBeenCalledWith('stablecoins');
  });

  it('applies active style to activeFilter button', () => {
    render(<Filter activeFilter="stablecoins" onFilterChange={mockOnFilterChange} />);
    
    const stablecoinsButton = screen.getByText('stablecoins');
    
    expect(stablecoinsButton).toHaveClass('border border-[#e53935]');
    expect(stablecoinsButton).toHaveClass('text-[#e53935]');
    expect(stablecoinsButton).toHaveClass('rounded-[2rem]');
  });
});
