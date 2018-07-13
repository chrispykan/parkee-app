import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTidbit } from '../actions/tidbitActions';
import { deleteTidbit } from '../actions/tidbitActions';

class Tidbits extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.tidbits.map(tidbit => (
            
        
            <li key={tidbit.id}>
              <span
                onClick={() => this.props.toggleTidbit(tidbit.id)}>
                {tidbit.bit}: {tidbit.opinion.toString()}  
              </span>


              <span 
                onClick={() => this.props.deleteTidbit(tidbit.id)}> 
                <i class="far fa-trash-alt"></i> 
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tidbits: state.tidbits
  }
}

export default connect(mapStateToProps, { toggleTidbit, deleteTidbit  } )(Tidbits)