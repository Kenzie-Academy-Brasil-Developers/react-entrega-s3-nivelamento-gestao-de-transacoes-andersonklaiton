const MoveOut =({transactions, setShow})=>{
    const filterOut = transactions.filter((item)=> item.quantity <0)
    
    return(
        <div>
            <h1>Saídas:</h1>
            <ul>
                {filterOut.map((item, index)=>(
                    <li key={index}>
                        <p>Nome: {item.name} Saída: {item.quantity} unidades preço: R${item.price}</p>
                    </li>
                ))}
                <button onClick={()=>setShow(true)}>Entradas</button>
            </ul>
        </div>
    )
}

export default MoveOut