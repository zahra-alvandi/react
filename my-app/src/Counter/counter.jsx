import React, { Component } from 'react'
import "./Counter.css"

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

        this.addToCounter = this.addToCounter.bind(this)
        this.minusFromCounter = this.minusFromCounter.bind(this)
    }

    addToCounter () {
        this.setState(prevState => {
            return {counter: prevState.counter + 1}
        })
    }

    minusFromCounter () {
         this.setState(prevState => {
            return {counter: prevState.counter - 1}
        })
    }

    render() {
        return(
            <div>
                <section id="main">
                    <div className="container">
                        <h2 id="title">Counter</h2>
                        <h3 id="counter">{this.state.counter}</h3>
                        <div className="btn-container">
                            <button id="increase" onClick={this.addToCounter}>Increase</button>
                            <button id="decrease" onClick={this.minusFromCounter}>Decrease</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}