import "./App.css";
import { useState } from "react";

import CardProducts from "./conponents/CardProducts";
import CardRegister from "./conponents/CardRegister";
import CardMoves from "./conponents/cardMoves";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <CardMoves transactions={transactions}/>
        </div>
        <div>
          <CardProducts transactions={transactions} />
        </div>
        <div>
          <CardRegister
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
