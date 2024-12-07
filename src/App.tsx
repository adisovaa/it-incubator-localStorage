import React from 'react';
import {LocalStorage} from "./LocalStorage";
import {LocalStorageWithUseEffect} from "./LocalStorageWithUseEffect";

function App() {

    return (
        <div className="App">
            <LocalStorage/>

            <LocalStorageWithUseEffect/>
        </div>
    );
}

export default App;