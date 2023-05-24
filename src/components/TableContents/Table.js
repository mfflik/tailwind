import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/60.json');
      setData(response.data.chapter);
      console.log(response.data.chapter)
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left font-semibold uppercase">Chapter</th>
            <th className="px-6 py-3 text-left font-semibold uppercase">Verse</th>
            <th className="px-6 py-3 text-left font-semibold uppercase">Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            // <h1>Test</h1>
            <TableRow key={Math.random()} data={item}  />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
