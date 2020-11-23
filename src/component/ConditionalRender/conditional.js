import React from 'react'

class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isLoggedIn: false }

        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button
        // if (isLoggedIn) {
        //     button = <LogouButtion onClick={this.handleLogoutClick} />
        // } else {
        //     button = <LoginButtion onClick={this.handleLoginClick} />
        // }
        {
            isLoggedIn
                ? <LogouButtion onClick={this.handleLogoutClick} />
                : <LoginButtion onClick={this.handleLoginClick} />
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                { button}
            </div>
        )
    }
}

function LoginButtion(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogouButtion(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

function UserGreeting(props) {
    return (<h1>Welcome Back!</h1>)
}

function GuestGreeting(props) {
    return (<h1>Please sign up!</h1>)
}


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

const control = <LoginControl />

export default control