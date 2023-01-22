import './App.css';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux"
import Main from "./containers/Main"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;

// git remote add origin https://github.com/MaimoonHossain/expense-tracker-using-redux.git
// git branch -M main
// git push -u origin main