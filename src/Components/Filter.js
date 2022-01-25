import React from 'react'

const Filter = ({ filterText, onFilter, onClear }) => {
    return (
        <div>
            <input
                id='buscar'
                name='buscar'
                type='text'
                required
                value={filterText}
                onChange={onFilter}
                placeholder='Buscar'
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
            />
            <button onClick={onClear}>X</button>
        </div>
    )
}

export default Filter
