import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, handlePreviousPage, handleNextPage, handlePageClick }) => {
  // Calculate the pages to display
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const visiblePages = pages.slice(currentPage - 1, currentPage + 2);

  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-4 py-2 text-[#e53935] rounded disabled:opacity-50"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="hidden sm:flex">
        {pages.map((page) => (
          <button
            key={page}
            className={`px-3 py-1 mx-1 border rounded-2xl ${currentPage === page ? 'bg-white text-grey-700 border-[#e53935] text-[#e53935] font-semibold' : 'bg-white text-gray-700'}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="flex sm:hidden">
        {visiblePages.map((page) => (
          <button
            key={page}
            className={`px-3 py-1 mx-1 border rounded-2xl ${currentPage === page ? 'bg-white text-grey-700 border-[#e53935] text-[#e53935] font-semibold' : 'bg-white text-gray-700'}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="px-4 py-2 text-[#e53935] rounded disabled:opacity-50"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
