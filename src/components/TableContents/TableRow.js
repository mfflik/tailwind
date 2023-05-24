import React from 'react';

const TableRow = ({ data }) => {
  // console.log(chapter)
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4">{data.chapter}</td>
      <td className="px-6 py-4">{data.verse}</td>
      <td className="px-6 py-4">{data.text}</td>
    </tr>
  );
};

export default TableRow;
