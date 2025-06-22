import React, { useState } from 'react';

const SalesReport = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    qty: '',
    bill: '',
    payment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const newEntry = {
      date: formData.date,
      qty: Number(formData.qty),
      bill: Number(formData.bill),
      payment: Number(formData.payment),
    };
    setEntries([...entries, newEntry]);
    setFormData({ date: '', qty: '', bill: '', payment: '' });
  };

  let cumulativeBalance = 0;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sales Report</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input type="date" id="date" value={formData.date} onChange={handleChange} required />
        <input type="number" id="qty" placeholder="Quantity" value={formData.qty} onChange={handleChange} required />
        <input type="number" id="bill" placeholder="Bill Amount" value={formData.bill} onChange={handleChange} required />
        <input type="number" id="payment" placeholder="Payment" value={formData.payment} onChange={handleChange} required />
        <button type="submit">Add Entry</button>
      </form>

      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Quantity</th>
            <th>Bill</th>
            <th>Payment</th>
            <th>Cumulative Balance</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            cumulativeBalance += entry.bill - entry.payment;
            return (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.qty}</td>
                <td>{entry.bill}</td>
                <td>{entry.payment}</td>
                <td>{cumulativeBalance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;
