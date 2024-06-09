import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './';

interface UseCryptoStoreMock {
  searchText: string;
  setSearchText: (text: string) => void;
}

const useCryptoStoreMock: UseCryptoStoreMock = {
  searchText: '',
  setSearchText: jest.fn(),
};

jest.mock('../../../store/cryptoStore', () => ({
  useCryptoStore: jest.fn(() => useCryptoStoreMock),
}));

describe('SearchBar component', () => {
  it('renders input field with placeholder', () => {
    render(<SearchBar />);
    
    const inputElement = screen.getByPlaceholderText('Search crypto in gecko');
    
    expect(inputElement).toBeInTheDocument();
  });

  it('calls setSearchText with input value on change', () => {
    render(<SearchBar />);
    
    const inputElement = screen.getByPlaceholderText('Search crypto in gecko');
    fireEvent.change(inputElement, { target: { value: 'Bitcoin' } });
    
    expect(useCryptoStoreMock.setSearchText).toHaveBeenCalledWith('Bitcoin');
  });

  it('updates input value on change', () => {
    useCryptoStoreMock.searchText = 'Ethereum';
    
    render(<SearchBar />);
    
    const inputElement = screen.getByPlaceholderText('Search crypto in gecko');
    
    expect(inputElement).toHaveValue('Ethereum');
  });
});
