import React from 'react';

const LanguageSelector = () => {
    const handleLanguageChange = (language) => {
        // Implement logic for changing the language
        console.log(`Language changed to: ${language}`);
    };

    return (
        <div>
            <h2>Select Language:</h2>
            <button onClick={() => handleLanguageChange('English')}>English</button>
            <button onClick={() => handleLanguageChange('Hindi')}>Hindi</button>
            <button onClick={() => handleLanguageChange('Telugu')}>Telugu</button>
        </div>
    );
};

export default LanguageSelector;