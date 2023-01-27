import React, { useEffect } from "react";

const SamplePage = () => {
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'pt',autoDisplay: false, layout: window.google.translate.TranslateElement.FloatPosition.TOP_RIGHT }, 'google_translate_element')};
        
        
        useEffect(() => {
            const addScript = document.createElement('script');
            addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
            document.body.appendChild(addScript);
            window.googleTranslateElementInit = googleTranslateElementInit;
        }, [])


            return (
                <>
                <div id="google_translate_element"></div>
                </>
 )};
export default SamplePage;