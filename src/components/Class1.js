import React from 'react';

class Class1 extends React.Component {

    render(){
        console.log('render called');
        
        return(
            <div className='container'>
                <h1> Class 1 Component </h1>
            </div>
        )
    }
}

export default Class1;