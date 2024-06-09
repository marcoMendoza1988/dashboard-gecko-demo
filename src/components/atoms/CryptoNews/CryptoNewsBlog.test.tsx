import { render, screen, within } from '@testing-library/react';
import CryptoNewsBlog from './';
import '@testing-library/jest-dom';

const mockNews = [
    {
        title: "Bitcoin hits new all-time high",
        description: "Bitcoin price reaches a new all-time high as markets react to positive news.",
        imageUrl: "https://example.com/bitcoin.jpg",
        sourceName: "Crypto News",
        publishedAt: "2023-06-08",
        url: "https://example.com/bitcoin-news",
    },
    {
        title: "Ethereum 2.0 launch",
        description: "Ethereum 2.0 is officially launched, bringing a new era of scalability and efficiency.",
        imageUrl: "https://example.com/ethereum.jpg",
        sourceName: "Crypto Updates",
        publishedAt: "2023-06-07",
        url: "https://example.com/ethereum-news",
    },
    {
        title: "Dogecoin surges",
        description: "Dogecoin price surges as Elon Musk tweets about it again.",
        imageUrl: "https://example.com/dogecoin.jpg",
        sourceName: "Altcoin Buzz",
        publishedAt: "2023-06-06",
        url: "https://example.com/dogecoin-news",
    }
];

describe('CryptoNewsBlog component', () => {
    it('renders news articles correctly', () => {
        render(<CryptoNewsBlog news={mockNews} />);

        mockNews.forEach((article) => {
            const articleElement = screen.getByText(article.title).closest('article');
            expect(articleElement).toBeInTheDocument();

            // Using within to scope the search to the articleElement
            const utils = within(articleElement!);

            expect(utils.getByText(article.title)).toBeInTheDocument();
            expect(utils.getByText(article.description)).toBeInTheDocument();
            expect(utils.getByText(article.publishedAt)).toBeInTheDocument();

            const linkElement = utils.getByText('Leer más');
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', article.url);
        });
    });

    it('renders the correct number of articles', () => {
        render(<CryptoNewsBlog news={mockNews} />);

        const articleElements = screen.getAllByRole('article');
        expect(articleElements).toHaveLength(mockNews.length);
    });
});
