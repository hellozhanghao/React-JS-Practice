import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let InputText = ({ dispatch}) => {


    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addItem(input.value));
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add
                </button>


            </form>
        </div>
    )
};

InputText = connect()(InputText)

export default InputText