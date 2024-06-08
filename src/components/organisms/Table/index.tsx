import React, { useEffect, useState } from 'react';
import { useCryptoStore } from '../../../store/cryptoStore';
import { formatPrice } from '../../../utils/formatPrice';
import CryptoModal from '../CryptoModal';
import Filter from '../../molecules/Filter';
import SearchBar from '../../molecules/SearchBar';
import Pagination from './Pagination';

const Table: React.FC = () => {
    const { filteredCryptoCoins, fetchCryptocurrencies } = useCryptoStore();
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('all');
    const [selectedCrypto, setSelectedCrypto] = useState<{ id: string, name: string } | null>(null);
    const rowsPerPage = 10;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredCryptoCoins?.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(filteredCryptoCoins?.length / rowsPerPage);

    useEffect(() => {
        fetchCryptocurrencies('');
    }, [fetchCryptocurrencies]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const openModal = (id: string, name: string) => {
        setSelectedCrypto({ id, name });
    };

    const closeModal = () => {
        setSelectedCrypto(null);
    };

    useEffect(() => {
        if(filter === 'stablecoins' || filter === 'meme-token'){
            fetchCryptocurrencies(filter);
        } else if(filter === 'all'){
            fetchCryptocurrencies('')
        }
    }, [filter]);

    // const filteredCrypto:any[] = currentRows.filter((crypto:any) => filter === 'all' || crypto.name.toLowerCase() === filter.toLowerCase());
    return (
        <div className="w-full overflow-hidden rounded-lg sm:px-4 pb-4 md:px-0 mt-4">
            <div className="flex justify-between">
                <Filter activeFilter={filter} onFilterChange={setFilter} />
                <SearchBar />
            </div>
            <div className="w-full overflow-x-auto h-auto">
                <table className="min-w-full bg-white border border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700"><b><strong>#</strong></b></th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700"><b><strong>Coin</strong></b></th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">Price</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">24h High Price</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-[13px] font-normal text-gray-700">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows?.map((order) => (
                            <tr style={{ cursor: 'pointer' }} key={order.id} className="hover:bg-[#ef535026]" onClick={() => openModal(order.id, order.name)}>
                                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">{order.market_cap_rank}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">
                                    <div className="flex items-center">
                                        <img src={order.image} alt={order.name} width={25} height={25} className="mr-4" />
                                        <div>
                                            <h2 className="text-sm font-normal">{order.name} <small>{order.symbol.toUpperCase()}</small></h2>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">
                                    <p>${formatPrice(order.current_price)}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">${order?.high_24h ? formatPrice(order?.high_24h) : 0.0000}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-[13px] font-normal text-gray-900">${formatPrice(order.market_cap)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination 
                totalPages={totalPages} 
                currentPage={currentPage} 
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick} 
            />
            {selectedCrypto && (
                <CryptoModal
                    isOpen={true}
                    onClose={closeModal}
                    cryptoId={selectedCrypto.id}
                    cryptoName={selectedCrypto.name}
                />
            )}
        </div>
    );
};

export default Table;
