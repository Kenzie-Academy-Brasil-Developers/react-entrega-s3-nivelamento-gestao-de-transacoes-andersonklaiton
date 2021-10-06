import { useForm } from "react-hook-form"

const CardRegister =({transactions, setTransactions})=>{
   

    const {register, handleSubmit}= useForm()

    const onSubmit=(data)=>{
        if(data.quantity<0){
            data.quantity = Number(data.quantity * -1)
        }
        if(data.entri==="Saída"){
            data.quantity  = Number(data.quantity * -1)
        }
        setTransactions([...transactions, data])
    }

    return(
        <div>
            <h2>Cadastrar novas Frutas</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Fruta" {...register("name")}/>
                <input placeholder="Quantidade" {...register("quantity")}/>
                <input placeholder="Valor" {...register("price")}/>
                <select name=""{...register("entri")}>
                    <option defaultValue value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </select>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
export default CardRegister