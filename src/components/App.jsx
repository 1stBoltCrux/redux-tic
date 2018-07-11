import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';
import Game from './Game';



class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='appWrapper'>
        <Game state={this.props.state}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
return {
state: state
}
};

export default withRouter(connect(mapStateToProps)(App));
