import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <button className="counter" onClick={this.handleClick}>
                    {this.state.count}
                </button>
                { this.state.count > 3 ?
                    <button className="counter" onClick={this.handleClick}>
                        {this.state.count}
                    </button> : null }
            </div>
        );
    }
};

export default Counter;