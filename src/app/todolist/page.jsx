'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [count, setCount] = useState(0);

    const addNewTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);

            e.target.value = '';
        }
    }

    return (
        <div>

            <h3 className='text-center text-3xl font-bold'>Todo List</h3>
            <div className='max-w-[80%] mx-auto'>
                <p className='text-3xl'>{count}</p>
                <button className='border p-3'
                    onClick={() => { setCount(count +1); console.log(count); }} >Add Count</button>
                <div className='rounded border border-gray-300 shadow'>
                    <div className='p-5'>
                        <input
                            onKeyDown={addNewTask}
                            type="text"
                            className='w-full rounded bg-gray-200 p-3'
                        />
                    </div>
                    <div className='border-t border-gray-300 p-5'>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default TodoList;