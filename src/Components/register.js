import React, { useState, useEffect } from 'react'
import { v4 as uuid4 } from 'uuid'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

const Register = ({
    inputTipoM,
    setInputTipoM,
    inputNombre,
    setInputNombre,
    inputCantidad,
    setInputCantidad,
    todos,
    setTodos,
    edit,
    setEdit,
    saldoFinal,
}) => {
    const [showGasto, setShowGasto] = useState(false)
    const [showSucess, setShowSucess] = useState(false)
    const [mensaje, setMensaje] = useState('')

    const handleClose = () => setShowGasto(false)
    const handleCloseSucess = () => setShowSucess(false)

    const registrar = (e) => {
        e.preventDefault()
        console.log(edit)

        if (inputTipoM === 'ingreso' || saldoFinal >= inputCantidad) {
            if (edit) {
                updateTodo(
                    edit.id,
                    inputTipoM,
                    inputNombre,
                    inputCantidad,
                    edit.completed
                )
            } else {
                const newtodo = {
                    id: uuid4(),
                    tipoMovimiento: inputTipoM,
                    nombre: inputNombre,
                    cantidad: inputCantidad,
                    completed: false,
                }
                setTodos([...todos, newtodo])
                setInputNombre('')
                setInputCantidad('')
                setInputTipoM('')
                setShowSucess(true)
                setMensaje(newtodo.tipoMovimiento)
            }
        } else {
            setShowGasto(true)
        }
    }
    const updateTodo = (id, tipoMovimiento, nombre, cantidad, completed) => {
        const newTodos = todos.map((todo) =>
            todo.id === id
                ? { id, tipoMovimiento, nombre, cantidad, completed }
                : todo
        )
        setTodos(newTodos)
        setEdit(null)
    }

    const handleChangeTM = ({ target }) => {
        setInputTipoM(target.value)
    }
    const handleChangeName = ({ target }) => {
        setInputNombre(target.value)
    }
    const handleChangeCantidad = ({ target }) => {
        setInputCantidad(target.value)
    }
    const handleChangeCancelar = () => {
        setInputCantidad('')
        setInputNombre('')
    }
    useEffect(() => {
        if (edit) {
            setInputNombre(edit.nombre)
            setInputCantidad(edit.cantidad)
            setInputTipoM(edit.tipoMovimiento)
        } else {
            setInputNombre('')
            setInputCantidad('')
            setInputTipoM('')
        }
    }, [edit, setInputNombre])

    return (
        <div className='min-h-full flex items-left justify-left'>
            <div className='max-w-md w-full space-y-8n border'>
                <div>
                    <p className='mt-2 text-center text-sm text-gray-600'>
                        Registro
                    </p>
                </div>
                <form className='mt-8 space-y-6  px-12' onSubmit={registrar}>
                    <input type='hidden' name='remember' defaultValue='true' />
                    <div className='rounded-md shadow-sm -space-y-px'>
                        <div className='columns-2'>
                            <div>
                                <p className='mt-2 text-left text-sm text-gray-600'>
                                    Tipo Movimiento:
                                </p>
                            </div>
                            <select
                                name='tipoMovimiento'
                                id='tipoMovimiento'
                                onChange={handleChangeTM}
                                value={inputTipoM}
                                required
                                placeholder='Seleccionar'
                                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>
                                <option value='' selected='false'>
                                    Seleccionar
                                </option>
                                <option value='ingreso'>Ingreso</option>
                                <option value='gasto'>Gasto</option>
                            </select>
                        </div>
                        <br />
                        <div className='columns-2'>
                            <div>
                                <p className='mt-2 text-left text-sm text-gray-600'>
                                    Nombre:
                                </p>
                            </div>
                            <input
                                id='nombre'
                                name='nombre'
                                type='text'
                                value={inputNombre}
                                onChange={handleChangeName}
                                required
                                className='task-input appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                            />
                        </div>
                        <br />
                        <div className='columns-2'>
                            <div>
                                <p className='mt-2 text-left text-sm text-gray-600'>
                                    Valor:
                                </p>
                            </div>
                            <input
                                id='valor'
                                name='valor'
                                type='number'
                                min='1'
                                onChange={handleChangeCantidad}
                                required
                                value={inputCantidad}
                                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                            />
                        </div>
                    </div>

                    <div className='columns-2 flex column justify-center gap-[10px]'>
                        <button
                            onClick={handleChangeCancelar}
                            className='text-white font-bold py-2 px-4 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            Cancelar
                        </button>
                        <button
                            type='submit'
                            className='text-white font-bold py-2 px-4 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            {edit ? 'Editar' : 'Agregar'}
                        </button>
                    </div>
                </form>
                <Modal
                    show={showGasto}
                    onHide={handleClose}
                    backdrop='static'
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        No cuenta con saldo suficiente para realizar este
                        movimiento.
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            onClick={handleClose}
                            className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                            Cerrar
                        </button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={showSucess}
                    onHide={handleCloseSucess}
                    backdrop='static'
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registro Exitoso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {mensaje == 'ingreso' ? 'Ingreso ' : 'Gasto '}
                        fue agregado con éxito.
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            onClick={handleCloseSucess}
                            className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                            Cerrar
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Register
