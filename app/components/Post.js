import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Post extends React.Component {
  constructor(){
    super();
    this.state={
      value:'',
      color: "#fff",
      fontSize: '30px'
    }
  }

  onChange(e){
    e.preventDefault();

    this.setState({
      value:e.target.value,
    })
  }


  render() {
     var divStyle = {
        color: this.state.color,
        fontSize: this.state.fontSize
      };


    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>

        <div className="row">
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>Paste Your Post</h3>
                <form>
                  <textarea onChange = {this.onChange.bind(this)} className="form-control" rows="20"></textarea>
                </form>
                
              </div>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="panel">
              <div className="panel-body">
                <h3>Post View</h3>
                <div className="bb-post-container">
                  <div className="bb-post-container-inner">
                    <div style={divStyle} className="bb-post-text-start"> 
                      {this.state.value}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Post);
