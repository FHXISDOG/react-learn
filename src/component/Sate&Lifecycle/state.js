import React from 'react'
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    
    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <div>
                <h1>Hello,Fuck</h1>
                <FormatDate date={this.state.date}/>
            </div>
        )
    }
}

function FormatDate(props){
                return (<h2>It is {props.date.toLocaleTimeString()}</h2>)
}
const element = <Clock/>

export default element