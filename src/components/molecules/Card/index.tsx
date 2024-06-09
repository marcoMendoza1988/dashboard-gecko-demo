import React from 'react';

interface CardProps {
  title: string;
  content: React.ReactNode | string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-lg font-bold">{title}</h2>
      {typeof content === 'string' ? <p>{content}</p> : content}
    </div>
  );
};

export default Card;
