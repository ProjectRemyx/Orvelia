import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavbarPage from './components/layout/Shared/Nav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const nav = document.createElement('nav');
  ReactDOM.render(<NavbarPage />, nav);
  ReactDOM.unmountComponentAtNode(nav);
});
