import { render, screen, fireEvent } from '@testing-library/react';
import Button from './';
import '@testing-library/jest-dom';

describe('Button component', () => {
    it('renders with correct label', () => {
        render(<Button label="Click Me" onClick={() => { }} />);
        const buttonElement = screen.getByText(/click me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const onClickMock = jest.fn();
        render(<Button label="Click Me" onClick={onClickMock} />);
        const buttonElement = screen.getByText(/click me/i);
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
