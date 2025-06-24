import { useState } from 'react';
import './App.css';

const API_FIELDS = [
  'status', 'message', 'continent', 'continentCode', 'country', 'countryCode', 'region', 'regionName', 'city', 'district', 'zip', 'lat', 'lon', 'timezone', 'offset', 'currency', 'isp', 'org', 'as', 'asname', 'reverse', 'mobile', 'proxy', 'hosting', 'query'
];

function App() {
  const [ip, setIp] = useState('');
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>API UX Exercise</h1>
      <input type="text" placeholder="Enter IP address" value={ip} onChange={e => setIp(e.target.value)} />
      <select>
        {API_FIELDS.map(field => (
          <option key={field} value={field}>{field}</option>
        ))}
      </select>
      <button>Fetch</button>
    </div>
  );
}

export default App
