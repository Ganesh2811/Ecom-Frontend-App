import React from 'react';

function Hoc(OldComponent,path) {

    class Newcomp extends React.Component {
        constructor(){
            super();
            this.state = {
                api:[]
            }
        }

        componentDidMount(){
            fetch(process.env.REACT_APP_API + path)
            .then(res=>res.json())
            .then(val=>{
                // console.log(val);
                // console.log(val.data);
                this.setState({
                    api:val.data
                })
            })
        }

        render() {

            return <OldComponent apidata={this.state.api} />
        }


    }

    return Newcomp;
}

export default Hoc;