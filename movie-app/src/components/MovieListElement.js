import React, { Component } from 'react';


class MovieListElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.movieInfo.title,
      shown: false
    };
  } 
  
  toggleWatched() {
    this.props.watch(this.state.title);
  }
  
  toggleMovie() {
    this.setState({
      shown: !this.state.shown
    })
    
    if (this.props.movieInfo.runtime === undefined) {
      this.props.getDetails(this.props.movieInfo.id)
      
    }
  }
  
  render() {
    var buttonTitle = this.props.watched ? 'Watched' : 'Not Watched';
    var classes = this.state.shown ? 'expanded-info shown' : 'expanded-info';
    console.log('classes', classes)
    console.log('MVOIE PROPS', this.props.movieInfo)
    return (
      <div className="MovieListElement" onClick={this.toggleMovie.bind(this)}>
        {this.props.movieInfo.title}
        <div className={classes}>
          {this.props.movieInfo.description}
          {this.props.movieInfo.runtime}
          {this.props.movieInfo.year}
        </div>
        <button className="watch-button" onClick = {this.toggleWatched.bind(this)}>{buttonTitle}</button>
      </div>
    );
  }
}

export default MovieListElement;