import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>API</title>
      </Helmet>
      <h1>5thdimension/h1>


      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
