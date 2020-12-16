import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from 'react-router-dom'

class CreatingProjects  extends Component{
    state = {
      title: '',
      content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render () {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
     return(
      <div className ="container">
       <form onsubmit={this.handleSubmit} className="light-green">
        <h5 className ="white-text"> Create Project </h5>
        <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
        </div>
        <div className ="input-field">
       <label htmlFor="content">Project Content </label>
        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea><textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
        </div>
        <div className ="input-field">
        <button className= "btn red lighten-1 z-depth-0">Create</button>
      </div>
       </form>
     </div>
     )
    }
  }


  const mapStateToProps = (state) => {
      return {
          auth: state.firebase.auth
      }
  }

  const mapDispatchToProps = (dispatch) => {
    return{
     createProject: (project) => dispatch(createProject(project))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CreatingProjects) ;

