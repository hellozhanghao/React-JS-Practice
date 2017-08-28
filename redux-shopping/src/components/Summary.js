import React from 'react'

let Summary = ({ count=0, total=0}) => {


    return (
        <div style={style.summary}>
            Progress: {count} / {total}
        </div>
    )
};


export default Summary


const style ={
    summary:{
        padding: 15,
        display: 'flex',
        flexDirection: 'row-reverse',
        backgroundColor:'#1B95CC',
        margin:'0'
    }
};


