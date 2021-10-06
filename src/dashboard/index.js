import { useState } from "react";
import MoviIn from "../conponents/moveIn";
import MoveOut from "../conponents/MoveOut";

const Dashboard = ({transactions, setTransactions}) => {
  const [show, setShow] = useState(true);
//   const [transactions, setTransactions] = useState([
//     { name: "banana", quantity: 100, price: 5 },
//     { name: "morango", quantity: -10, price: 2 },
//     { name: "laranja", quantity: 50, price: 6 },
//   ]);

  return (
    <div>
      {show ? (
        <MoviIn transactions={transactions} setShow={setShow} />
      ) : (
        <MoveOut transactions={transactions} setShow={setShow} />
      )}
      <h2>Todas as Entradas e Saídas:</h2>
      <ul>
        {transactions.map((item, index) => (
          <li key={index}>
            <p>
              Nome:{item.name}, {item.quantity>0? "Entrada" : "Saída"}: {item.quantity}, preco: R$ {item.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dashboard;
