// src/LoanApplication.js
import React, { useState } from 'react';

function LoanApplication({ auth }) {
  const [amountRequired, setAmountRequired] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/apply-loan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth.token,
      },
      body: JSON.stringify({ amount_required: amountRequired, loan_term: loanTerm }),
    });
    const data = await res.json();
    setMessage(`Loan Applied. Weekly Repayment: ${data.weekly_repayment}`);
  };

  return (
    <div>
      <h2>Loan Application</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Amount Required" value={amountRequired} onChange={(e) => setAmountRequired(e.target.value)} />
        <input type="number" placeholder="Loan Term (weeks)" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
        <button type="submit">Apply</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LoanApplication;
