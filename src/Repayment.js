// src/Repayment.js
import React, { useState } from 'react';

function Repayment({ auth }) {
  const [loanId, setLoanId] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [message, setMessage] = useState('');

  const handleRepayment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/repay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': auth.token,
        },
        body: JSON.stringify({ loan_id: loanId, amount_paid: amountPaid }),
      });

      if (res.ok) {
        setMessage('Repayment successful!');
      } else {
        setMessage('Repayment failed.');
      }
    } catch (error) {
      setMessage('Repayment failed.');
    }
  };

  return (
    <div>
      <h2>Make a Repayment</h2>
      <form onSubmit={handleRepayment}>
        <input
          type="number"
          placeholder="Loan ID"
          value={loanId}
          onChange={(e) => setLoanId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount Paid"
          value={amountPaid}
          onChange={(e) => setAmountPaid(e.target.value)}
        />
        <button type="submit">Submit Repayment</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Repayment;
