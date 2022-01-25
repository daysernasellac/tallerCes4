import { faTimes, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'

const TodoItem = ({ todo, handleDelete, completed, setEdit }) => {
    return (
        <tr className='text-lg text-gray-500'>
            <td>
                <button className='button-edit' onClick={() => setEdit(todo)}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                    className='button-delete'
                    onClick={() => handleDelete(todo)}>
                    <FontAwesomeIcon icon={faTimes} color='red' />
                </button>
            </td>
            <td>
                <input
                    disabled
                    type='text'
                    value={todo.nombre}
                    className={`list ${todo.completed ? 'complete' : ''}`}
                    onChange={(e) => e.preventDefault}
                />
            </td>
            <td>
                {todo.tipoMovimiento == 'gasto' ? (
                    <button className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-red-500 hover:bg-red'>
                        <input
                            disabled
                            type='text'
                            value={todo.cantidad}
                            className={`list ${
                                todo.completed ? 'complete' : ''
                            }`}
                            onChange={(e) => e.preventDefault}
                        />
                    </button>
                ) : (
                    <button className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-green-500 hover:bg-red'>
                        <input
                            disabled
                            type='text'
                            value={todo.cantidad}
                            className={`list ${
                                todo.completed ? 'complete' : ''
                            }`}
                            onChange={(e) => e.preventDefault}
                        />
                    </button>
                )}
            </td>
        </tr>
    )
}

export default TodoItem
