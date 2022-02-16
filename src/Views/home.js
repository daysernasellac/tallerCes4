import React, { useEffect, useState } from 'react'
import Header from '../Components/header'
import Register from '../Components/register'
import ListMovimientos from '../Components/listMovimientos'

const Home = () => {
    const [inputTipoM, setInputTipoM] = useState('')
    const [inputNombre, setInputNombre] = useState('')
    const [inputCantidad, setInputCantidad] = useState('')
    const [todos, setTodos] = useState([])
    const [edit, setEdit] = useState(null)
    const [saldoInicial, setSaldoInicial] = useState(0)
    const [saldoFinal, setsaldoFinal] = useState(0)

    const handleClickSaldoInicial = (event) => {
        const newSaldoInicial = parseInt(event?.target?.value)
        if (!newSaldoInicial || newSaldoInicial < 0) return

        setSaldoInicial(newSaldoInicial)
    }

    const calcularSaldoFinal = (saldoInicial, totalGastos, totalIngresos) => {
        const total = saldoInicial + totalIngresos - totalGastos
        return total
    }

    const retrieveTotal = (type) => {
        if (todos.length <= 0) return 0

        let total = 0

        todos.forEach((e) => {
            if (e.tipoMovimiento === type) {
                total += parseInt(e.cantidad)
            }
        })

        return total
    }

    useEffect(() => {
        const totalGastos = retrieveTotal('gasto')
        const totalIngresos = retrieveTotal('ingreso')

        setsaldoFinal(
            calcularSaldoFinal(saldoInicial, totalGastos, totalIngresos)
        )
    }, [todos, saldoInicial])

    return (
        <div className='text-3xl font-bold w-screen h-screen'>
            <Header
                saldoIngresos={saldoInicial}
                saldoFinal={saldoFinal}
                handleClickSaldoInicial={handleClickSaldoInicial}
            />
            <div class='flex flex-column sm:flex-row justify-center py-xl pt-32 h-full p-24'>
                <div className='flex column w-full align-middle'>
                    <Register
                        inputTipoM={inputTipoM}
                        setInputTipoM={setInputTipoM}
                        inputNombre={inputNombre}
                        setInputNombre={setInputNombre}
                        inputCantidad={inputCantidad}
                        setInputCantidad={setInputCantidad}
                        todos={todos}
                        setTodos={setTodos}
                        edit={edit}
                        setEdit={setEdit}
                        saldoFinal={saldoFinal}
                        saldoInicial={saldoInicial}
                    />
                    <ListMovimientos
                        todos={todos}
                        setTodos={setTodos}
                        setEdit={setEdit}
                        setinputSaldoFin={setsaldoFinal}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
