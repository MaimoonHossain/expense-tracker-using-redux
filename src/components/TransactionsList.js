import React from "react";
import Transaction from "./Transaction";
import { connect } from "react-redux";
import { deleteTransaction } from "../redux/actions";

export function TransactionsList({ transactions, deleteTransaction }) {

  transactions = transactions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
  return (
    <div className="column">
      <h3>Transactions</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={(id) => deleteTransaction(id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ // Maps the store of the store to the props of the component
    transactions: state.transactions, // Maps the transactions of the store to the props of the component
});

const mapDispatchToProps = (dispatch) => ({ // Maps the dispatch to the props of the component, contains properties that leads to different actions that you want to dispatch from the component
    // addTransaction: (transaction) => dispatch(addTransaction(transaction)),
    deleteTransaction: (id) => dispatch(deleteTransaction(id)) // When these functions are called they dispatch an action to the store
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);