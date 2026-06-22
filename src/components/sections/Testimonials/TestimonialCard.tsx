import React from 'react';

interface TestimonialCardProps {
  image: string;
  quote: string;
  store: string;
  isCenter?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, quote, store, isCenter = false }) => {
  return (
    <div className={`flex flex-col rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-100 transition-all duration-300 ${isCenter ? 'scale-105 shadow-lg z-10' : 'scale-95 opacity-80'}`}>
      <div className="w-full h-64 overflow-hidden">
        <img src={image} alt={store} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <p className="text-slate-600 text-sm leading-relaxed">
          "{quote}"
        </p>
        <span className="text-[#6B21E8] font-semibold text-sm">{store}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;