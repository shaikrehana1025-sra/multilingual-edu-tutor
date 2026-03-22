import React, { useState } from 'react';
import Avatar from './components/Avatar';
import ChatInterface from './components/ChatInterface';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC = () => {
    const [language, setLanguage] = useState('English');

    return (
        <div>
            <Avatar />
            <LanguageSelector selectedLanguage={language} onLanguageChange={setLanguage} />
            <ChatInterface language={language} />
        </div>
    );
};

export default App;