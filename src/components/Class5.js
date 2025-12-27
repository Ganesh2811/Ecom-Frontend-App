import React from 'react';


class Class5 extends React.Component {

    
    constructor(){
        
        
        super();
        console.log('constructor calld' ,this);

        this.state = {
            cart:0
        } 
    }

    myFunc(){
        this.setState({cart: this.state.cart + 10});
    }


    // useEffect(()=>{},[])
    componentDidMount(){
        console.log('did mount cycle called' , this.state.cart);
        
    }

     // useEffect(()=>{})
     // useEffect(()=>{},[count])
    componentDidUpdate(){
        console.log('did Update cycle called' , this.state.cart);
        
    }


    // useEffect(()=>{ return()=>{} },[])
    componentWillUnmount(){
        console.log('Will Unmount cycle called' , this.state.cart);

    }

    render(){
        console.log('render called' , this.state.cart);
        
        return(
            <div className='container'>
                <h1> Class 5 Component </h1>
                
                <p>{this.state.cart}</p>
                <button onClick={()=>{ this.myFunc()}}>Change</button>
            </div>
        )
    }
}

export default Class5;