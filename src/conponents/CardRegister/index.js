import { useForm } from "react-hook-form"

const CardRegister =({transactions, setTransactions})=>{
   

    const {register, handleSubmit}= useForm()

    const onSubmit=(data)=>{
        setTransactions([...transactions, data])
    }

    return(
        <div>
            <h2>Cadastrar novas Frutas</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Fruta" {...register("name")}/>
                <input placeholder="Quantidade" {...register("quantity")}/>
                <input placeholder="Valor" {...register("price")}/>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
export default CardRegister