// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css'

class MyEditor extends React.Component<{}, {
  editorState: EditorState
}> {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState: EditorState) => {
    this.setState({
      editorState
    })
  }

  render () {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
      />
    )
  }
}

const el = document.createElement('div')
document.body && document.body.append(el)

ReactDOM.render(
  <MyEditor />,
  el
)
