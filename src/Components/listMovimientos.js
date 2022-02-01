import TodoItem from './TodoItem'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import constants from './constants'

const ListMovimientos = ({ todos, setTodos, setEdit }) => {
    const [movimientosList, setMovimientosList] = useState([])
    const [typeOptions, setTypeOptions] = useState(constants.TIPOS_MOVIMIENTO)
    const [optionSelected, setOptionSelected] = useState(
        constants.TIPOS_MOVIMIENTO[0]
    )
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const completed = (todo) => {
        const newTodos = todos.map((item) => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            } else {
                return item
            }
        })
        setTodos(newTodos)
    }

    const handleFilter = (e) => {
        const type = e.target.value
        setOptionSelected(typeOptions.find((e) => e.name === type))
    }

    const retrieveFilters = () => {
        return typeOptions.map((e) => (
            <div>
                <label for={e.name} className='mx-2 capitalize'>
                    {e.name}
                </label>
                <input
                    className='form-check-input'
                    type='radio'
                    name='flexRadioDefault'
                    id={e.name}
                    value={e.name}
                    checked={optionSelected.name === e.name}
                />
            </div>
        ))
    }

    useEffect(() => {
        if (!todos) return

        setMovimientosList(todos)
        setOptionSelected(constants.TIPOS_MOVIMIENTO[0])
    }, [todos])

    useEffect(() => {
        const copy = todos
        if (movimientosList.length <= 0) return

        if (optionSelected.name === constants.TIPOS_MOVIMIENTO[0].name) {
            setMovimientosList(copy)
            return
        }

        const filteredMovimientos = copy.filter(
            (e) => e.tipoMovimiento === optionSelected.name
        )
        setMovimientosList(filteredMovimientos)
    }, [optionSelected])

    return (
        <div className='justify-right w-full'>
            <div className='bg-indigo-600'>
                <div className='w-full mx-auto py-3 px-3 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between flex-wrap'>
                        <div className='w-0 flex-1 flex items-center'>
                            <p className='ml-3 font-medium text-white text-2xl'>
                                Listado Movimientos
                            </p>
                        </div>
                        <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
                            <button className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50'>
                                {movimientosList.length}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white shadow overflow-hidden sm:rounded-lg text-3xl'>
                <div className='px-4 py-5 sm:px-6'>
                    <div className='columns-2'>
                        <input
                            id='buscar'
                            name='buscar'
                            type='text'
                            required
                            placeholder='Buscar'
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        />
                        <div
                            onChange={handleFilter}
                            className='columns-3 appearance-none rounded-none relative block w-full px-3 py-2  border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>
                            {retrieveFilters()}
                        </div>
                    </div>
                </div>
                <table className='bold text-gray-900'>
                    <tr>
                        <td className='text-lg text-gray-1000 border'>
                            Acciones
                        </td>
                        <td className='text-lg text-gray-1000 border'>
                            Nombre
                        </td>
                        <td className='text-lg text-gray-1000 border'>Valor</td>
                    </tr>

                    {movimientosList.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleDelete={handleDelete}
                            completed={completed}
                            setEdit={setEdit}
                        />
                    ))}
                </table>
            </div>
        </div>
    )
}

export default ListMovimientos
