import React, { useEffect, useState } from 'react';

const DeviceInfo = () => {
  const [browserInfo, setBrowserInfo] = useState({
    httpBrowserLanguage: "",
    httpBrowserJavaEnabled: false,
    httpBrowserJavaScriptEnabled: false,
    httpBrowserColorDepth: '',
    httpBrowserScreenHeight: '',
    httpBrowserScreenWidth: '',
    httpBrowserTimeDifference: '',
    userAgentBrowserValue: '',
  });

  useEffect(() => {
    // Retrieve browser information when the component mounts
    const retrieveBrowserInfo = () => {
      setBrowserInfo({
        httpBrowserLanguage: navigator.language,
        httpBrowserJavaScriptEnabled: true,
        httpBrowserJavaEnabled: navigator.javaEnabled(),
        httpBrowserColorDepth: window.screen.colorDepth || '',
        httpBrowserScreenHeight: window.screen.height || '',
        httpBrowserScreenWidth: window.screen.width || '',
        httpBrowserTimeDifference: new Date().getTimezoneOffset(),
        userAgentBrowserValue: navigator.userAgent || '',
       
     
      });
    };

    retrieveBrowserInfo();
    console.log(navigator)

    // Clean up the effect when the component unmounts
    // return () => {
    //   // Any cleanup code if needed
    // };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div>
      <h2>Browser Information:</h2>
      <ul>
        {Object.entries(browserInfo).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceInfo;
   // || '',
        // httpBrowserJavaEnabled: navigator.javaEnabled(),
        // httpBrowserJavaScriptEnabled: navigator.javaScriptEnabled,
        // httpBrowserColorDepth: window.screen.colorDepth || '',
        // httpBrowserScreenHeight: window.screen.height || '',
        // httpBrowserScreenWidth: window.screen.width || '',
        // httpBrowserTimeDifference: new Date().getTimezoneOffset(),
        // userAgentBrowserValue: navigator.userAgent || '',