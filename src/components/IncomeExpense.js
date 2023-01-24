import React from "react";
import { connect } from "react-redux";


export function IncomeExpense({ transactions }) {
  const amount = transactions.map((transaction) => Number(transaction.amount));
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);
  const expenses = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Total Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Total Expense</h4>
        <p className="money minus">${expenses}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ // Maps the store of the store to the props of the component
    transactions: state.transactions, // Maps the transactions of the store to the props of the component
});

export default connect(mapStateToProps)(IncomeExpense);
