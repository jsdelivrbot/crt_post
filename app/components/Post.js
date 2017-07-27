import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';

class Post extends React.Component {
  constructor(){
    super();
    this.state={
      value:'',
      color: "#fff",
      fontSize: '30px',
      editorState: EditorState.createEmpty(),

    }
  }



  onEditorStateChange(editorState){
      this.setState({
        editorState,
      });
    };


  render() {
     var divStyle = {
        color: this.state.color,
        fontSize: this.state.fontSize
      };

      const { editorState } = this.state;
      var convertVar = convertToRaw(editorState.getCurrentContent());
      var convertValue = draftToHtml(convertVar);

    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>

        <div className="row">
          <div className="col-sm-5">
            <div className="panel">
              <div className="panel-body">
                <h3>Paste Your Post</h3>
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={this.onEditorStateChange.bind(this)}
                />
               
                
                
              </div>
            </div>
          </div>

          <div className="col-sm-7">
            <div className="panel">
              <div className="panel-body">
                <h3>Post View</h3>
                <div className="bb-post-container">
                  <div className="bb-post-container-inner">
                    <div style={divStyle} className="bb-post-text-start"> 
                      <p dangerouslySetInnerHTML={{__html: convertValue}} />
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
