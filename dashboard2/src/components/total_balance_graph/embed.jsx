import React, { useState, useEffect } from 'react';

const EmbeddedHTML = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('./aaa.html');
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    };

    fetchHtmlContent();
  }, []);


  return (
    <div>
      <h2>Embedded HTML</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};



  export default EmbeddedHTML;