import React from 'react';
import List from './components/list/List';

const App = (props) => {
    return(
        <div className="App">
            <header className="App__header">
                <h1>tallysticks</h1>
            </header>
            <main>
                <List/>
            </main>
        </div>
    );
};

export default App;