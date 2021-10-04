import { useState } from "react";

const CardMoves = ({ transactions }) => {
  const [move, setMove] = useState("Entradas");
  const [products, setProducts] = useState("");
 

  const handleClick = () => {
    if (move === "Entradas") {
      setMove("Saídas");
    } else {
      setMove("Entradas");
    }
    filterProducts(move);
  };

  const filterProducts = (value) => {
    if (value === "Entradas") {
      setProducts(transactions.filter((item) => item.quantity > 0));
    } else {
      setProducts(transactions.filter((item) => item.quantity < 0));
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        Mostrar {move === "Entradas" ? "Entradas" : "Saídas"}
      </button>
      <ul>
        {products &&
          products.map((item, index) => (
            <li key={index}>
              Fruta: {item.name}: {item.quantity > 0 ? `Entrada:` : `Saída:`}{" "}
              {item.quantity}: Preço R${item.price},00
            </li>
          ))}
      </ul>
      <h3>
        Total de produtos em entradas
        : {transactions.reduce((acc, atual) => {
            if (atual.quantity > 0) {
              return acc + atual.quantity;
            }
            return acc;
          }, 0)}
      </h3>
      <h3>
        Total de produtos em saídas
        : {transactions.reduce((acc, atual) => {
            if (atual.quantity < 0) {
              return acc + atual.quantity * -1;
            }
            return acc;
          }, 0)}
      </h3>
    </div>
  );
};
export default CardMoves;
