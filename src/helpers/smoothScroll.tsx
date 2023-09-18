import React, { ReactNode } from 'react';

interface SmoothScrollProps {
    target: string;
    children: ReactNode;
    className?: string; // Allow passing a className prop
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ target, children, className }) => {
    const smoothScroll = () => {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <a href={target} onClick={(e) => { e.preventDefault(); smoothScroll(); }} className={className}>
            {children}
        </a>
    );
};

export default SmoothScroll;
