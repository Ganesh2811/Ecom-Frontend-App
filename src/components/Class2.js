

import React,{Component} from 'react';


class Class2 extends Component {

    myfunction(){
        console.log('Called myfunction');
        this.props.name = 'ameya';
        
    }

    render(){
        // console.log('render called' , this);
        console.log('render called' , this.props);
        
        return(
            <div className='container'>
                <h1> Class 2 Component </h1>
                <p>{this.props.name}</p>
                <button onClick={()=>{ this.myfunction() }}>Change</button>
            </div>
        )
    }
}

export default Class2;