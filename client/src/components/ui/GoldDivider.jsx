import React from 'react';
import { cn } from '../../lib/utils';
import LotusIcon from './LotusIcon';

const GoldDivider = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-center w-[120px] mx-auto", className)}>
      <div className="h-[1px] flex-1 bg-gold opacity-50"></div>
      <div className="mx-2 text-gold">
        <LotusIcon size={16} />
      </div>
      <div className="h-[1px] flex-1 bg-gold opacity-50"></div>
    </div>
  );
};

export default GoldDivider;
