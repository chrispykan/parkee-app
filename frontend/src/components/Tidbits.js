import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTidbit } from '../actions/tidbitActions';
import { deleteTidbit } from '../actions/tidbitActions';
import {Button} from 'reactstrap';

class Tidbits extends Component {
  render () {
    return (
      <div className="tidbit-list">
        
          {this.props.tidbits.map(tidbit => (
            
        
            <p key={tidbit.id}>
            
              <span className="toggle-span"
                onClick={() => this.props.toggleTidbit(tidbit.id)}>

                {tidbit.bit} <br></br> <b className="think">What do you think?</b>
                
                <Button>{tidbit.opinion.toString()} </Button>
              </span>


              <span 
                onClick={() => this.props.deleteTidbit(tidbit.id)}> 
                <br></br>
                <i class="far fa-trash-alt"></i> 
              </span>
              <hr/>
            </p>
          ))}
        
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