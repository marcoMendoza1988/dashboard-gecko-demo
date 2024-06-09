import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './';

describe('Card component', () => {
    it('renders title and JSX content correctly', () => {
        const title = 'Test Title';
        const content = <p>Test JSX Content</p>;

        render(<Card title={title} content={content} />);

        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();

        const contentElement = screen.getByText('Test JSX Content');
        expect(contentElement).toBeInTheDocument();
        expect(contentElement.tagName).toBe('P');
    });

    it('renders <p> tag if content is string', () => {
        const title = 'Test Title';
        const content = 'Test Content';

        render(<Card title={title} content={content} />);

        const contentElement = screen.getByText(content);
        expect(contentElement.tagName).toBe('P');
    });

    it('does not render <p> tag if content is a ReactNode', () => {
        const title = 'Test Title';
        const content = <p>Test JSX Content</p>;

        render(<Card title={title} content={content} />);

        const contentElement = screen.getByText('Test JSX Content');
        expect(contentElement.tagName).toBe('P');
    });
});
