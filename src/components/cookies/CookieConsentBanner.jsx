"use client"

import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

function CookieConsentBanner() {
  const [cookies, setCookie, removeCookie] = useCookies(['consentGiven', 'marketing', 'analytics', 'statistics']);

  // Check if the consent component should be displayed
  const [showConsent, setShowConsent] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  // Consent state for UI elements
  const [consent, setConsent] = useState({
    marketing: cookies.marketing || false,
    analytics: cookies.analytics || false,
    statistics: cookies.statistics || false,
  });

  useEffect(() => {
    // Determine if the banner should be shown based on the consentGiven cookie
    if (cookies.consentGiven === undefined) {
      setShowConsent(true);
    } else {
      setShowConsent(false);
    }
  }, [cookies]);



  // handleConsentChange is called when the user changes the consent
  const handleConsentChange = (segment, event) => {
    const value = event.target.checked;
    setConsent(prevState => ({ ...prevState, [segment]: value }));
  };

  // acceptAllCookies is called when the user clicks the accept all button
  const acceptAllCookies = () => {
    for (const segment in consent) {
      setCookie(segment, true, { path: '/' });
    }
    setCookie('consentGiven', true, { path: '/' });
    setShowConsent(false);
  };





  const savePreferences = () => {
    for (const segment in consent) {
      setCookie(segment, consent[segment], { path: '/' });
    }
    setCookie('consentGiven', true, { path: '/' });
    setShowConsent(false);
  };

  const resetPreferences = () => {
    for (const segment in consent) {
      removeCookie(segment, { path: '/' });
    }
    removeCookie('consentGiven', { path: '/' });
    setShowConsent(true);
  };




  // If the consent component should not be initialy shown, return null
  if (showConsent === null || !showConsent) return null;
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', position: 'fixed', bottom: '10px', right: '10px', background: 
    '#fff', zIndex: '999' }}>
      <h4>Cookie Preferences</h4>
      <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
      <button onClick={acceptAllCookies}>Accept All</button>
      <button onClick={() => setShowSettings(!showSettings)}>Settings</button>

      {showSettings && (
        <div>
          <label>
            Marketing
            <input type="checkbox" checked={consent.marketing} onChange={(e) => handleConsentChange('marketing', e)} />
          </label>
          <br />
          <label>
            Analytics
            <input type="checkbox" checked={consent.analytics} onChange={(e) => handleConsentChange('analytics', e)} />
          </label>
          <br />
          <label>
            Statistics
            <input type="checkbox" checked={consent.statistics} onChange={(e) => handleConsentChange('statistics', e)} />
          </label>
          <br />
          <button onClick={savePreferences}>Save Preferences</button>
          <button onClick={resetPreferences}>Reset Preferences</button>
        </div>
      )}
    </div>
  );
}

export default CookieConsentBanner;
