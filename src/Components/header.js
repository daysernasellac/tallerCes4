import React from 'react'
import logo from '../img/logo.png'

const Header = ({
    inputSaldoIni,
    saldoIngresos,
    saldoFinal,
    handleClickSaldoInicial,
}) => {
    return (
        <div className='fixed w-screen h-28'>
            <div className='bg-white w-full h-full'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                    <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
                        <div className='flex justify-start lg:w-0 lg:flex-1'>
                            <a href='#'>
                                <span className='sr-only'>Workflow</span>
                                <img
                                    className='h-14 w-auto sm:h-16'
                                    src={logo}
                                    alt=''
                                />
                            </a>
                            <h6>Presupuesto</h6>
                        </div>
                        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-3'>
                            <a
                                href='#'
                                className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                                Saldo inicial
                            </a>
                            <input
                                value={inputSaldoIni}
                                type='number'
                                name='saldo_inicial'
                                onBlur={handleClickSaldoInicial}
                                className='mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                            />
                            <a
                                href='#'
                                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                                Saldo final
                            </a>
                            <input
                                type='number'
                                name='saldo_final'
                                value={saldoFinal}
                                className='mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                                placeholder='17,020,000'
                            />
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
                    <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                        <div className='pt-5 pb-6 px-5'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <img
                                        className='h-8 w-auto'
                                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                                        alt='Workflow'
                                    />
                                </div>
                                <div className='-mr-2'>
                                    <button
                                        type='button'
                                        className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                                        <span className='sr-only'>
                                            Close menu
                                        </span>
                                        <svg
                                            className='h-6 w-6'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            aria-hidden='true'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M6 18L18 6M6 6l12 12'
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='mt-6'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
