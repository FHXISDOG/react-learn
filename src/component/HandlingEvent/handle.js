import React from 'react'

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn:true}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(state=>({
            isToggleOn: !state.isToggleOn
        }))
    }
    
    render(){
        return (
            <button onClick={this.handleClick}> 
                {this.state.isToggleOn? 'ON' : 'OFF'}
            </button>
        )
    }
}

class LoginButton extends React.Component{
    handleClick(){
        console.log('this is ',this)
    }
    render (){
        return (
        <button onClick={()=>this.handleClick()}> 
            Click me
        </button>)
    }
}

const element = (<div><Toggle/> <LoginButton/></div>)

export default element 