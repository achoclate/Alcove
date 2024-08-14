// src/pages/transactions/Transactions.js
import "./transactions.css";

export default function Transactions() {
  return (
    <div className="transactions">
      <h1 className="transactionsTitle">Transactions</h1>
      <div className="transactionsTableContainer">
        <table className="transactionsTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Add rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
