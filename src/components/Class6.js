import React from 'react';


class Class6 extends React.Component {

    
    constructor(){
        
        
        super();
        console.log('constructor calld' ,this);

        this.state = {
            apidata:[]
        } 
    }



    // useEffect(()=>{},[])
    componentDidMount(){
        console.log('did mount cycle called' , this.state.cart);
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    apidata:json 
                });
            })
    }


    render(){

        const RESULT = this.state.apidata;
        console.log('render called' , this.state.cart);
        
        return(
            <div className='container'>
                <h1> Class 6 Component </h1>
                <div className='row'>
                {
                    RESULT && RESULT.map(val=>

                        <div className='col-md-3'>
                            <p>{val.title}</p>
                        </div>
                    )
                }
                </div>
                
            </div>
        )
    }
}

export default Class6;