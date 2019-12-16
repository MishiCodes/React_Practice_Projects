import React from 'react';
import './App.css';
import Form from './components/Form';
import RandomNumber from './components/RandomNumber';
import DocumentTitle from './components/DocumentTitle';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import HookFetchData from './components/HookFetchData';

function App() {
  return (
    <div className="App">
      <IntervalHookCounter />
      <MouseContainer />
      {/*<HookMouse />*/}
      <DocumentTitle />
      <Form />
      <RandomNumber />
      <HookFetchData />
    </div>
  );
}

export default App;
