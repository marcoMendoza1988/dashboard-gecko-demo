import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useCryptoStore } from '../../../store/cryptoStore';
import { mediaMatch } from '../../../utils/lib/mediaquery';

const PieChart: React.FC = () => {
    const { cryptocurrencies } = useCryptoStore();
    const chartRef = useRef(null);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = (e: any) => setMatches(e.matches);
        mediaMatch.addListener(handler as any);
        return () => mediaMatch.removeListener(handler as any);
    });

    useEffect(() => {
        if (cryptocurrencies.length > 0) {
            drawChart();
        }
    }, [cryptocurrencies]);

    const drawChart = () => {
        const data = cryptocurrencies.slice(0, 10).map((crypto) => ({
                    name: crypto.name,
                    market_cap: crypto.market_cap,
                })
        );

        const width = !matches ? 260 : 450;
    const height = !matches ? 260 : 450;
    const margin = !matches ? 20 : 40;

    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.schemeCategory10);

    const pie = d3.pie<any>()
      .value(d => d.market_cap);

    const data_ready = pie(data);

    const arc = d3.arc<any>()
      .innerRadius(0)
      .outerRadius(radius);

    svg
      .selectAll('path')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d):any => color(d.data.name))
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.7);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center">
      <div className="flex flex-col items-start mr-4 mt-4">
        {cryptocurrencies.slice(0, 10).map((crypto, index) => (
          <div key={index} className="flex items-center mb-2">
            <span
              className="inline-block w-3 h-3 mr-2"
              style={{ backgroundColor: d3.schemeCategory10[index % 10] }}
            ></span>
            <span>{crypto.name}</span>
          </div>
        ))}
      </div>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default PieChart;
