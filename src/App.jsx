import { useState } from 'react';
import './App.css';

const API_FIELDS = [
  'status', 'message', 'continent', 'continentCode', 'country', 'countryCode', 'region', 'regionName', 'city', 'district', 'zip', 'lat', 'lon', 'timezone', 'offset', 'currency', 'isp', 'org', 'as', 'asname', 'reverse', 'mobile', 'proxy', 'hosting', 'query'
];

function App() {
  const [ip, setIp] = useState('');

  const handleFetch = async (e) => {
    e.preventDefault();
    console.log(`Fetching data for IP: ${ip}`);
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      alert(`Data fetched successfully for IP: ${ip}`);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>API UX Exercise</h1>
      <input type="text" placeholder="Enter IP address" value={ip} onChange={e => setIp(e.target.value)} />
      <select>
        {API_FIELDS.map(field => (
          <option key={field} value={field}>{field}</option>
        ))}
      </select>
      <button onClick={handleFetch}>Fetch</button>
    </div>
  );
}

export default App
