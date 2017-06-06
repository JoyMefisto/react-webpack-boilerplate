import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import './styles.scss';

function App() {
    return (
        <div>
            <h1>React+Webpack</h1>
            <Counter />
        </div>
    );
}

ReactDOM.render( <App />, document.getElementById('root') );