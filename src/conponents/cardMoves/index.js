const CardMoves = ({ transactions }) => {
 
  return (
    <div>
      <h3>
        Valor de produtos de entradas
        : {transactions.reduce((acc, atual) => {
            if (atual.quantity > 0) {
              return (acc + Number(atual.price )*atual.quantity);
            }
            return acc;
          }, 0)}
      </h3>
      <h3>
        Valor de produtos de saídas
        : {transactions.reduce((acc, atual) => {
            if (atual.quantity < 0) {
              return (acc + Number(atual.price*-1)*atual.quantity);
            }
            return acc;
          }, 0)}
      </h3>
    </div>
  );
};
export default CardMoves;
