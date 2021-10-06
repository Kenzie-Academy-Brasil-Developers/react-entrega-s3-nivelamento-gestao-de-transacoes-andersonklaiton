const MoviIn =({transactions, setShow})=>{
    const filterIn = transactions.filter((item)=> item.quantity >0)
    
    return(
        <div>
            <h1>Entradas:</h1>
            <ul>
                {filterIn.map((item, index)=>(
                    <li key={index}>
                        <p>Nome: {item.name} Entrada: {item.quantity} unidades preço: R${item.price}</p>
                    </li>
                ))}
                <button onClick={()=>setShow(false)}>Saídas</button>
            </ul>
        </div>
    )
}
export default MoviIn