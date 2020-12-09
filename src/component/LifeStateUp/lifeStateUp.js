import React from 'react'


function BoilingVerdict(prop) {
    if (prop.celsius >= 100) {
        return (<p>The water would boil.</p>)
    } else {
        return (
            <p>The water would not boil.</p>
        )
    }
}

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this)
    }

    handleTemperatureChange(event) {
        this.props.onTemperatureChange(event.target.value)
    }


    render() {
        const temperature = this.props.temperature

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}</legend>
                <input value={temperature} onChange={this.handleTemperatureChange} />
            </fieldset>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { temperature: '', scale: 'c' }
        this.handleCelsiusChane = this.handleCelsiusChane.bind(this)
        this.handleFahreheitChane = this.handleFahreheitChane.bind(this)
    }

    handleCelsiusChane(temperature) {
        this.setState(
            {
                scale: 'c',
                temperature
            }
        )
    }

    handleFahreheitChane(temperature){
        this.setState(
            {
                scale: 'f',
                temperature
            }
        )
    }



    render() {
        const temperature = this.state.temperature
        const scale = this.state.scale
        const celsius = this.state === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = this.state = 'c' ? tryConvert(temperature, toFahrenheit) : temperature

        return (
            <fieldset>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChane} />
                <TemperatureInput scale='c' temperature={fahrenheit} onTemperatureChange={this.handleFahreheitChane} />
                <BoilingVerdict celsius={celsius} />
            </fieldset>

        )
    }
}

export default <Calculator/>