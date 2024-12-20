import React from 'react'

const SubTitle = ({ title = "Default Subtitle", alignment = "text-center" }) => {
    return (
        <div className={`${alignment} mb-5`}>
            <div className="subtile-title">{title}</div>
        </div>
    );
};

export default SubTitle
