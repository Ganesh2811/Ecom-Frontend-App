import React from 'react';


class Class4 extends React.Component {

    
    constructor(){
        
        
        super();
        console.log('constructor calld' ,this);

        this.state = {
            name:'akshay',
            age:20,
            tech:['php','java'],
            info:{place:'malad' , hobby:'coding'}
        }
    }

    myFunc(){
        this.setState({
            age:30,
            tech:['javascript'],
            info:{...this.state.info , place:'mahim'}
        })
    }

    render(){
        console.log('render called' , this.state.age);
        
        return(
            <div className='container'>
                <h1> Class 4 Component </h1>
                
                <p>
                    {this.state.name}
                </p>
                <p>
                    {this.state.age}
                </p>
                <ul>
                    <li>{this.state.tech[0]}</li>
                    <li>{this.state.tech[1]}</li>
                </ul>
                <p>
                    {this.state.info['place']}
                    {this.state.info['hobby']}
                </p>
                <button onClick={()=>{ this.myFunc()}}>Change</button>
            </div>
        )
    }
}

export default Class4;