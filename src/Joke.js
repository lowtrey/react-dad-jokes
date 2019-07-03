import React from 'react';
import './Joke.css';

class Joke extends React.Component {
  render() {
    return(
      <div className='Joke'>
        <div className='Joke-buttons'>
          <i className='fas fa-arrow-up' onClick={this.props.upvote}></i>
          <span className='Joke-votes'>{this.props.votes}</span>
          <i className='fas fa-arrow-down' onClick={this.props.downvote}></i>
        </div>
        <div className='Joke-text'>{this.props.text}</div>
        <div className='Joke-smiley'><i class="em em-rolling_on_the_floor_laughing"></i></div>
      </div>
    );
  }
}

export default Joke;