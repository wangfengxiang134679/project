import React from 'react';
// import store from '../store';
import {connect} from 'react-redux';

class Province extends React.Component{
    constructor(){
        super();
    }

    // click(index){
    //     store.dispatch({
    //         type: 'CLICK_INDEX',
    //         text: index
    //     })

    //     store.dispatch({
    //         type: 'CHANGE_CITY',
    //         text: this.province[index].list
    //     })
    // }

    render(){
        // let province = this.province = store.getState().province.province;
        // let curIndex  = store.getState().province.index;

        console.log('province...', this.props);
        let province = this.props.province,
            curIndex = this.props.index;
        return <div>
            <ul>{
                province.map((item, index)=>{
                    return <li onClick={()=>this.props.click(index, province)} className={index===curIndex?'active':''} key={index}>{item.name}</li>
                })
            }</ul>
        </div>
    }
}

// 映射注入的state和ownProps
const mapStatetoProps = (state, ownProps)=>{
    return {
        province: state.province.province,
        index: state.province.index,
        ...ownProps
    }
}

const mapDispatchtoProps = dispatch=>{
    return {
        click: (index, province)=>{
            dispatch({
                type: 'CLICK_INDEX',
                text: index
            })
            dispatch({
                type: 'CHANGE_CITY',
                text: province[index].list
            })
        }
    }
}

// export default connect(mapStatetoProps, mapDispatchtoProps, mergeProps, option)(City);
export default connect(mapStatetoProps, mapDispatchtoProps)(Province);