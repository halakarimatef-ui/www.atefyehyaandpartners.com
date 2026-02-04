
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'monogram';
}

/**
 * Atef Yehya & Partners - "Fancy Font" Picture Logo
 * 
 * This version uses a high-contrast serif style for a more elegant, 
 * luxury-brand feel, while remaining a unified graphical asset.
 */
const Logo: React.FC<LogoProps> = ({ className = "h-16", variant = 'full' }) => {
  
  // The "Fancy" AY Monogram using a high-contrast serif aesthetic
  const fancyMonogram = (
    <g className="fill-current">
      {/* Letter A - Sophisticated Serif */}
      <path d="M45,0 L0,120 H12 L22,95 H68 L78,120 H90 L45,0 Z M25,85 L45,30 L65,85 H25 Z" transform="scale(1.8)" />
      {/* Letter Y - Sophisticated Serif, offset for elegant lockup */}
      <path d="M0,0 L35,60 V110 H45 V60 L80,0 H68 L40,48 L12,0 H0 Z" transform="translate(110, 0) scale(1.8)" />
      
      {/* Subtle connecting or underlining element for 'Fancy' flair */}
      <rect x="10" y="235" width="240" height="2" opacity="0.8" />
    </g>
  );

  if (variant === 'monogram') {
    return (
      <svg 
        viewBox="0 0 260 250" 
        className={`fill-current text-primary dark:text-white ${className} select-none`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="AY Fancy Monogram"
      >
        <g transform="translate(5, 10)">
          {fancyMonogram}
        </g>
      </svg>
    );
  }

  return (
    <svg 
      viewBox="0 0 800 650" 
      className={`fill-current text-primary dark:text-white w-auto ${className} select-none`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Atef Yehya & Partners Fancy Logo"
    >
      {/* Centered Fancy Monogram */}
      <g transform="translate(270, 40)">
        {fancyMonogram}
      </g>

      {/* Stylized Firm Name */}
      <g transform="translate(400, 420)">
        <text 
          x="0" 
          y="0" 
          textAnchor="middle" 
          style={{ 
            fontSize: '56px', 
            fontWeight: '700', 
            letterSpacing: '0.08em', 
            fontFamily: '"Playfair Display", serif',
            textTransform: 'uppercase',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          ATEF YEHYA & PARTNERS
        </text>
        
        {/* Sub-tagline */}
        <text 
          x="0" 
          y="48" 
          textAnchor="middle" 
          style={{ 
            fontSize: '18px', 
            fontWeight: '400', 
            letterSpacing: '0.45em', 
            fontFamily: '"Inter", sans-serif',
            textTransform: 'uppercase',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          CERTIFIED ACCOUNTANTS
        </text>
      </g>

      {/* Decorative accent line at the very bottom */}
      <line x1="250" y1="540" x2="550" y2="540" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
};

export default Logo;
