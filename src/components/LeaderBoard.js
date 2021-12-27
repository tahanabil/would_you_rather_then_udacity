/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react/cjs/react.production.min';

class LeaderBoard extends Component {
  render() {
    const { leaders } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Leader Board</h1>
        {leaders.map((e) => {
          return (
            <div className="leaderContiners">
              <div>
                <img src={e.avatarURL} alt="" className="avaterlb" />
              </div>
              <div className="leaderBoardDetails">
                <h3>{e.name}</h3>
                <div>
                  <div className="detailsLine">
                    <div>Answered questions :</div>

                    <div className="detailsLine-score">{e.TotalAnswers}</div>
                  </div>

                  <div className="detailsLine">
                    <div>Created questions :</div>

                    <div className="detailsLine-score">{e.TotoalQuestios}</div>
                  </div>
                </div>
              </div>
              <div className="score">
                <div className="ScoreHeader">Score</div>
                <div className="scoreBody">{e.score}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToprop({ users }) {
  const leaders = Object.values(users)
    .map((x) => ({
      id: x.id,
      name: x.name,
      avatarURL: x.avatarURL,
      TotalAnswers: Object.values(x.answers).length,
      TotoalQuestios: x.questions.length,
      score: Object.values(x.answers).length + x.questions.length,
    }))
    .sort((a, b) => a.score - b.score)
    .reverse();

  return { leaders };
}

export default connect(mapStateToprop)(LeaderBoard);
