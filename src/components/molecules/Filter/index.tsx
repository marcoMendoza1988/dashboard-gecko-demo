import React from 'react';

type FilterProps = {
  activeFilter?: string;
  onFilterChange: (filter: string) => void;
};

const Filter: React.FC<FilterProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex justify-center items-center space-x-4 flex-wrap">
        <div className='flex justify-center items-center'>
            <button
                onClick={() => onFilterChange('all')}
                className={`text-[14px] ${activeFilter === 'all' && 'border border-[#e53935] text-[#e53935] rounded-[2rem]'} px-4 py-2 rounded-md focus:outline-none`}
                style={{borderRadius: '108px'}}
            >
                All
            </button>
            <button
                onClick={() => onFilterChange('stablecoins')}
                className={`text-[14px] ${activeFilter === 'stablecoins' && 'border border-[#e53935] text-[#e53935] rounded-[2rem]'} px-4 py-2 rounded-md focus:outline-none`}
                style={{borderRadius: '108px'}}
            >
                stablecoins
            </button>
            <button
                onClick={() => onFilterChange('meme-token')}
                className={`text-[14px] ${activeFilter === 'meme-token' && 'border border-[#e53935] text-[#e53935] rounded-[2rem]'} px-4 py-2 rounded-md focus:outline-none`}
                style={{borderRadius: '108px'}}
            >
                memecoins
            </button>
        </div>
    </div>
  );
};

export default Filter;
