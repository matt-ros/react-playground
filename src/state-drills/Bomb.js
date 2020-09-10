import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
        display: 'tick'
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
                display: (this.state.count + 1) % 2 === 0 ? 'tick' : 'tock',
            })
            if (this.state.count >= 8) {
                this.setState({ display: 'BOOM!!!!' });
                clearInterval(this.interval);
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p>{this.state.display}</p>
            </div>
        )
    }
}

export default Bomb;