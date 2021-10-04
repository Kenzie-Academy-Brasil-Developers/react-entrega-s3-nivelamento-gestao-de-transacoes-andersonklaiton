const CardProducts = ({ transactions }) => {
  return (
    <div>
      <h2>Todos as entradas e saídas</h2>
      <ul>
        {transactions.map((item, index) => {
          return (
            <li key={index}>
              Fruta: {item.name} 
              : {item.quantity > 0 ? `Entrada:` : `Saída:`} {item.quantity}
              : Preço R${item.price},00
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CardProducts;
