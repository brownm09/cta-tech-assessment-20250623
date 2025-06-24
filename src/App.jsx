import { useState } from 'react';
import './App.css';

const API_FIELDS = [
  'status',
  'country',
  'countryCode',
  'region',
  'regionName',
  'city',
  'zip',
  'lat',
  'lon',
  'timezone',
  'isp',
  'org',
  'as',
  'query'
];

function App() {
  const [ip, setIp] = useState('');
  const [field, setField] = useState('');

  const handleFetch = async () => {
    console.log(`Fetching data for IP: ${ip}`);
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      document.getElementById('fieldValue').innerText = data[`${field}`] || 'Field not found';
      // alert(`Data fetched successfully for IP: ${ip}`);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <div>
        <h1>API UX Exercise</h1>
      </div>
      <div>
      <input type="text" placeholder="Enter IP address" value={ip} onChange={e => setIp(e.target.value)} />
      </div>
      <div>

      <select onChange={e => {
        setField(e.target.value);
        document.getElementById('chosenField').innerText = `Chosen Field: ${e.target.value}`;
        document.getElementById('fieldValue').innerText = '';
        handleFetch();
      }}>
        <option value="">Select a field</option>
        {API_FIELDS.map(field => (
          <option key={field} value={field}>{field}</option>
        ))}
      </select>
        </div>
<div>
<p id="chosenField"></p>
<p id="fieldValue"></p>
</div>
      {/* <button onClick={handleFetch}>Fetch</button> */}
    </div>
  );
}

export default App
