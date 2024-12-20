import Link from 'next/link';
import React from 'react';

const Button = ({ href = "#", className = 'btn-primary', title = "Start free trial", ...props }) => {
    return (
        <Link href={href} className={`btn ${className}`} {...props}>
            {title}
        </Link>
    );
};

export default Button;