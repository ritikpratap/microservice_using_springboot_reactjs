import React from 'react'

function NewTodoForm() {
    return (
        <div className='mt-5'>
            <form >
                <div className='mb-3'>
                    <label className='form-lable'>Description</label>
                    <textarea className='form-control' rows={3} required></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Assigned To</label>
                    <input className='form-control' required></input>
                </div>
                <button type='button' className='btn btn-primary mt-3'>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm