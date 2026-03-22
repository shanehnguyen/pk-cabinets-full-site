import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  breadcrumb?: { label: string; path: string };
  subline?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb, subline }) => {
  return (
    <header className="bg-white px-4 md:px-10 pt-8 pb-10 md:pb-12 font-sans border-b border-pk-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] mb-4">
          <Link to="/" className="text-pk-gold hover:text-pk-gold-dark transition-colors">HOME</Link>
          <span className="text-pk-muted">/</span>
          <span className="text-pk-dark">{breadcrumb ? breadcrumb.label.toUpperCase() : title.toUpperCase()}</span>
        </div>
        <h1 className="text-[32px] md:text-[48px] font-serif font-normal text-pk-dark leading-tight mb-6 md:mb-8">
          {title}
        </h1>
        {subline && (
          <div className="text-[15px] text-pk-muted max-w-2xl leading-relaxed">
            {subline}
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
