import React from 'react'


class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {value:''}
        this.handleChane = this.handleChane.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChane(event){
        this.setState({value:event.target.value})
    }

    handleSubmit(event){
        alert('A Name was submitted: '+this.state.value)
        event.preventDefault()
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit} >
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChane}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

const form = <NameForm/>
export default <NameForm/>