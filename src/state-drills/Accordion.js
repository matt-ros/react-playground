import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = { currentSectionIndex: null };

    handleButtonClick = (index) => {
        this.setState({ currentSectionIndex: index})
    }

    renderContent(index) {
        return this.props.sections[index].content;
    }

    renderLis() {
        return this.props.sections.map((sect, index) => (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>
                    {sect.title}
                </button>
                <p>{this.state.currentSectionIndex === index && this.renderContent(index)}</p>
            </li>
        ))
    }

    render() {
        return <ul>
            {this.renderLis()}
        </ul>
    }
}

export default Accordion;