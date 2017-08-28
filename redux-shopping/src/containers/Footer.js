import { connect } from 'react-redux'
import Summary from "../components/Summary";



const mapStateToProps = state => {

    let items = state.items.filter(t => !t.deleted);

    let count = 0;
    for(let i=0;i<items.length;i++){
        if (items[i].completed){
            count++
        }
    }

    return {
        count : count,
        total : items.length
    }
};


const Footer = connect(
    mapStateToProps,
)(Summary);

export default Footer