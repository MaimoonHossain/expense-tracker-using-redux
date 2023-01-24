import React, { Component } from "react";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
import TransactionsList from "../components/TransactionsList";
import IncomeExpense from "../components/IncomeExpense";

export default class Main extends Component {
  render() {
    // const { transactions, addTransaction, deleteTransaction } = this.props;
    return (
      <div>
          <div className="row">
              {/*<AddTransactions*/}
              {/*                 addTransaction={(transaction) => addTransaction(transaction)}*/}
              {/*                 id={transactions[0] ? transactions[0].id + 1 : 1}*/}
              {/*/>*/}
              <AddTransactions />
              {/*<TransactionsList className="column" transactions={transactions} deleteTransaction={(id) => deleteTransaction(id)}/>*/}
              <TransactionsList />
          </div>
          <Balance />
          <IncomeExpense />
          {/*<Balance transactions={transactions} />*/}
          {/*<IncomeExpense transactions={transactions}/>*/}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({ // Maps the store of the store to the props of the component
//   transactions: state.transactions, // Maps the transactions of the store to the props of the component
// });
//
// const mapDispatchToProps = (dispatch) => ({ // Maps the dispatch to the props of the component, contains properties that leads to different actions that you want to dispatch from the component
//   addTransaction: (transaction) => dispatch(addTransaction(transaction)),
//   deleteTransaction: (id) => dispatch(deleteTransaction(id)) // When these functions are called they dispatch an action to the store
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Main);
// // connects the React component Main to the redux store. The component will have access to the store and actions
// // from the store.