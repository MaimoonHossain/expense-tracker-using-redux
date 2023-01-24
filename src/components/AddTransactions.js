import React, { useState } from "react";
import { connect } from 'react-redux';
import { addTransaction } from "../redux/actions";

export function AddTransactions({id, addTransaction}) {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const onSubmit = (event) => {
      event.preventDefault()
      const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text: text,
          amount: amount,
          date: date
      }
      addTransaction(newTransaction)
      setText("")
      setAmount(0)
      setDate("")
  }

  return (
    <div className="column">
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Text..." type="text" />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Amount..." type="number" />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="Enter Amount..." type="date" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

// const mapStateToProps = (state) => ({ // Maps the store of the store to the props of the component
//     transactions: state.transactions, // Maps the transactions of the store to the props of the component
//     id: Math.floor(Math.random() * 100000000)
// });

const mapDispatchToProps = (dispatch) => ({ // Maps the dispatch to the props of the component, contains properties that leads to different actions that you want to dispatch from the component
    addTransaction: (transaction) => dispatch(addTransaction(transaction))
    // deleteTransaction: (id) => dispatch(deleteTransaction(id)) // When these functions are called they dispatch an action to the store
});

export default connect(null, mapDispatchToProps)(AddTransactions);
