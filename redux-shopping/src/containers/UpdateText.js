import React from 'react'
import { connect } from 'react-redux'
import { updateItem } from '../actions'



let InputText = ({ dispatch, id}) => {

    let input;

    return (
        <div >
            <form
                style={styles.container}
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(updateItem(id,input.value));
                    input.value = ''
                }}
            >
                <input
                    className="textin"
                    style={styles.input}
                    ref={node => {
                        input = node
                    }}
                />
                <button
                    style={styles.button}
                    className="css_btn_class"
                    type="submit">
                    Apply
                </button>


            </form>
        </div>
    )
};

InputText = connect()(InputText)

export default InputText



const styles = {
    input:{
        display:"flex",
        flex: 7,
    },
    button:{
        display:"flex",
        flex: 1,
        justifyContent:'center',

    },
    container: {
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor:'#6ED2FF',
        margin:0
    },
    textEntry:{
        padding: 6,
        display: 'flex',
        flex:6,
        flexWrap: 'wrap'
    },
};