/** @format */

import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../src/components/Login';
import Main from '../src/components/Main';
import NewQuestion from '../src/components/NewQuestions';
import LeaderBoard from '../src/components/LeaderBoard';
import { Component } from 'react/cjs/react.production.min';
import { connect } from 'react-redux';
import { initiatedata } from '../src/actions/shared';
import LoadingBar from 'react-redux-loading';
import NavBar from '../src/components/NavBar';
import ViewPoll from './components/ViewPoll';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initiatedata());
  }

  render() {
    const IsLoged = Object.keys(this.props.authed).length === 1 ? true : false;
    // console.log(Object.keys(this.props.authed).length);
    // console.log(IsLoged);

    const unAuthorisedUser = () => (
      <Routes>
        <Route path="*" element={<Login />} />{' '}
      </Routes>
    );

    const logedCompmnenet = () => (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/NewQuestions" element={<NewQuestion />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/ViewPoll/:QID" element={<ViewPoll />} />
        </Routes>
      </div>
    );

    const RenderComponenet = () => {
      if (IsLoged) {
        return logedCompmnenet();
      }

      if (!IsLoged) {
        return unAuthorisedUser();
      }
    };

    return (
      <div className="App">
        <LoadingBar />
        {this.props.isLoading && RenderComponenet()}
      </div>
    );
  }
}

function mapStateToProps({ users, loadingBar, authed }) {
  // console.warn('isLoading mapping:', users === {});
  // console.warn('loadingBar mapping:', !loadingBar['default']);
  return { isLoading: !loadingBar['default'] ? true : false, ...users, authed };
}

export default connect(mapStateToProps)(App);
