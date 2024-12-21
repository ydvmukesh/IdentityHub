import React from 'react'
interface HeadingProps {
  title?: string;   
  sectionClass?: string; 
  size?: string;      
  className?: string; 
  description?: string; 
  classDes?: string; 
}

const Title: React.FC<HeadingProps> = ({ title = "Heading Here", sectionClass = "text-center",  className= "" , classDes= "" , description }) => {
  return (
    <div className={`${sectionClass} max-w-3xl mx-auto section-head  gap-3 lg:gap-4`}>
       <h2
        className={`section-title   ${className}`}
        dangerouslySetInnerHTML={{ __html: title }} // Render HTML content
      />
      {description && <p className={` ${classDes}   descritpion `}>{description}</p>}
      
    </div>
  );
}

export default Title;