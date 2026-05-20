import React from 'react';
import { cn } from '../../lib/utils';
import GoldDivider from './GoldDivider';

const SectionTitle = ({
  script,
  title,
  subtitle,
  centered = true,
  light = false,
  className
}) => {
  return (
    <div className={cn("flex flex-col gap-3", centered ? "items-center text-center" : "items-start text-left", className)}>
      {script && (
        <span className={cn("font-script text-2xl md:text-3xl text-gold")}>
          {script}
        </span>
      )}
      
      {script && <GoldDivider className={cn(!centered && "mx-0")} />}
      
      <h2 className={cn("font-serif text-3xl md:text-5xl mt-2", light ? "text-cream" : "text-brown-dark")}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn("font-sans max-w-2xl mt-4 text-base md:text-lg opacity-80", light ? "text-cream/80" : "text-brown")}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
