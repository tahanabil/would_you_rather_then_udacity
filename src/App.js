/** @format */

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../src/components/Login';
import Main from '../src/components/Main';
import NewQuestion from '../src/components/NewQuestions';
import LeaderBoard from '../src/components/LeaderBoard';
import { Component } from 'react/cjs/react.production.min';
import { connect } from 'react-redux';
import { initiatedata } from '../src/actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initiatedata());
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/new" element={<NewQuestion />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
        </Routes>
      </div>
    );
  }
}

export default connect()(App);
