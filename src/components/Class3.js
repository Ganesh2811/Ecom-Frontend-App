import React from 'react';


class Class3 extends React.Component {

    
    constructor(){
        
        
        super();
        console.log('constructor calld' ,this);
        
        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
    }

    myFunc(){
        // console.log(this.x1);
        // console.log(this.x2);
        
        var data1 = this.x1.current.value;
        var data2 = this.x2.current.value;

        this.x3.current.innerHTML = data1*data2;
    }

    render(){
        console.log('render called');
        
        return(
            <div className='container'>
                <h1> Class 3 Component </h1>
                
                <input type='text' ref={this.x1} />
                <input type='text' ref={this.x2} />
                <button onClick={()=>{ this.myFunc()}}>Change</button>
                <p ref={this.x3}></p>
            </div>
        )
    }
}

export default Class3;