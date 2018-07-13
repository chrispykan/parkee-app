// import React, { Component } from 'react';
// import TidbitModel from '../models/TidbitModel';
// import Tidbits from '../components/TidbitList.js'
// import CreateTidbitForm from '../components/CreateTidbitForm.js'


// class TidbitsContainer extends Component {
//   constructor(){
//     super()
//     this.state = {
//       tidbits: [],
//       editingTidbitId: null,
//       editing: false
//     }
//     this.createTidbit = this.createTidbit.bind(this);
//     this.deleteTidbit = this.deleteTidbit.bind(this);
//     this.updateTidbit = this.updateTidbit.bind(this);
//     this.editTidbit = this.editTidbit.bind(this);
    
//   }
//   componentDidMount(){
//     this.fetchData()
//   }
//   fetchData(){
//     TidbitModel.all().then( (res) => {
//       this.setState ({
//         tidbits: res.data.tidbits,
//         tidbit: ''
//       })
//     })
//   }
//   createTidbit(tidbit) {
//     let newTidbit = {
//       body: tidbit
//     }
//     TidbitModel.create(newTidbit).then((res) => {
//       let tidbits = this.state.tidbits
//       let newTidbits = tidbits.push(res.data)
//       this.setState({newTidbits})
//     })
//   }
//   deleteTidbit(tidbit) {
//     TidbitModel.delete(tidbit).then((res) => {
//       let tidbits = this.state.tidbits.filter(function(tidbit) {
//         return tidbit._id !== res.data._id
//       });
//       this.setState({tidbits})
//     })
//   }
//   updateTidbit(tidbitName) {
//     var tidbitId = this.state.editingTidbitId
//     function isUpdatedTidbit(tidbit) {
//       return tidbit._id === tidbitId;
//     }
//   TidbitModel.update(tidbitId, tidbitName).then((res) =>{
//     let tidbits = this.state.tidbits
//     tidbits.find(isUpdatedTidbit).body = tidbitName
//     this.setState({tidbits: tidbits, editingTidbitId: null, editing: false})
//   })
//   }
//   editTidbit(tidbit) {
//     this.setState({
//       editingTidbitId: tidbit._id,
//       editing: true
//     })
//   }
//   render(){
//     return (
//       <div className="tidbitsContainer" id="tidbitPage">
//         {/* <h2>This is the Tidbits Container</h2> */}
//           <Tidbits
//             tidbits={this.state.tidbits}
//             editingTidbitId={this.state.editingTidbitId}
//             onEditTidbit={this.editTidbit}
//             onDeleteTidbit={this.deleteTidbit} 
//             onUpdateTidbit={this.updateTidbit} />
//           <CreateTidbitForm
//             createTidbit={this.createTidbit}/>
          
//       </div>
//     )
//   }
//   }


// export default TidbitsContainer