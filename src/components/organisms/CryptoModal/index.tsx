import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { getCandleData } from '../../../services/coingecko';

interface CryptoModalProps {
  isOpen: boolean;
  onClose: () => void;
  cryptoId: string;
  cryptoName: string;
}

const CryptoModal: React.FC<CryptoModalProps> = ({ isOpen, onClose, cryptoId, cryptoName }) => {
  useEffect(() => {
    if (isOpen) {
      const fetchData:any = async () => {
        const data = await getCandleData(cryptoId, '365');
        createChart(data);
      };

      fetchData();
    }
  }, [isOpen, cryptoId]);

  const createChart = (data: any[]) => {
    d3.select('#chart').selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const parseTime = d3.utcParse("%Q");
    data = data.map(d => ({
      date: parseTime(d[0]),
      open: d[1],
      high: d[2],
      low: d[3],
      close: d[4]
    }));

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date) as [Date, Date])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([d3.min(data, d => d.low) as number, d3.max(data, d => d.high) as number])
      .nice()
      .range([height, 0]);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));

    const candleWidth = (width / data.length) * 0.7;

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.date) - candleWidth / 2)
      .attr('y', d => y(Math.max(d.open, d.close)))
      .attr('width', candleWidth)
      .attr('height', d => Math.abs(y(d.open) - y(d.close)))
      .attr('fill', d => d.open > d.close ? 'red' : 'green');

    svg.selectAll('line.stem')
      .data(data)
      .enter()
      .append('line')
      .attr('class', 'stem')
      .attr('x1', d => x(d.date))
      .attr('x2', d => x(d.date))
      .attr('y1', d => y(d.high))
      .attr('y2', d => y(d.low))
      .attr('stroke', d => d.open > d.close ? 'red' : 'green');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">{cryptoName} - Candle Chart</h2>
        <button onClick={onClose} className="absolute top-4 right-4 text-xl font-bold">✕</button>
        <div id="chart"></div>
      </div>
    </div>
  );
};

export default CryptoModal;
