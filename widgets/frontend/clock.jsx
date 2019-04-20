import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = { date: new Date() }
    }

    render() {
        return (
            <div className="clock">
                <h2>{this.state.date.toLocaleTimeString('en-US')}</h2>
                <h2>{this.state.date.toLocaleDateString('en-US')}</h2>
            </div>
        )
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
} 

export default Clock;