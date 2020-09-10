import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false
    }

    handleClick = () => {
        this.setState({ spinningTheChamber: true });
        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            });
        }, 2000);
    }

    renderDisplay() {
        if (this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        }
        return this.state.chamber === this.props.bulletInChamber ? 'BANG!!!!' : 'you\'re safe!'

    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun;