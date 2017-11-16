# Draft.js and Flow Errors

When using [Draft.js](https://draftjs.org)
in the simplest way possible,
you get [Flow](https://flow.org) errors.

## How to run the code

After checking out the code,
run the following in a terminal
within the code's directory:

```
yarn install
yarn run flow
```

## What you should see

```
Error: node_modules/draft-js/lib/DraftEditor.react.js.flow:245
245:             <DraftEditorContents blockRenderMap={this.props.blockRenderMap} blockRendererFn={this.props.blockRendererFn} blockStyleFn={this.props.blockStyleFn} customStyleMap={{ ...DefaultDraftInlineStyle, ...this.props.customStyleMap }} customStyleFn={this.props.customStyleFn} editorKey={this._editorKey} editorState={this.props.editorState} key={'contents' + this.state.contentsKey} textDirectionality={this.props.textDirectionality} />
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `DraftEditorContents`. This type is incompatible with
 44: class DraftEditorContents extends React.Component<Props> {
                                                       ^^^^^ object type. See: node_modules/draft-js/lib/DraftEditorContents.react.js.flow:44
  Property `blockRendererFn` is incompatible:
    245:             <DraftEditorContents blockRenderMap={this.props.blockRenderMap} blockRendererFn={this.props.blockRendererFn} blockStyleFn={this.props.blockStyleFn} customStyleMap={{ ...DefaultDraftInlineStyle, ...this.props.customStyleMap }} customStyleFn={this.props.customStyleFn} editorKey={this._editorKey} editorState={this.props.editorState} key={'contents' + this.state.contentsKey} textDirectionality={this.props.textDirectionality} />
                                                                                                      ^^^^^^^^^^^^^^^^^^^^^^^^^^ undefined. This type is incompatible with
     29:   blockRendererFn: Function;
                            ^^^^^^^^ function type. See: node_modules/draft-js/lib/DraftEditorContents.react.js.flow:29

Error: node_modules/draft-js/lib/DraftEditor.react.js.flow:245
245:             <DraftEditorContents blockRenderMap={this.props.blockRenderMap} blockRendererFn={this.props.blockRendererFn} blockStyleFn={this.props.blockStyleFn} customStyleMap={{ ...DefaultDraftInlineStyle, ...this.props.customStyleMap }} customStyleFn={this.props.customStyleFn} editorKey={this._editorKey} editorState={this.props.editorState} key={'contents' + this.state.contentsKey} textDirectionality={this.props.textDirectionality} />
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `DraftEditorContents`. This type is incompatible with
 44: class DraftEditorContents extends React.Component<Props> {
                                                       ^^^^^ object type. See: node_modules/draft-js/lib/DraftEditorContents.react.js.flow:44
  Property `blockStyleFn` is incompatible:
    245:             <DraftEditorContents blockRenderMap={this.props.blockRenderMap} blockRendererFn={this.props.blockRendererFn} blockStyleFn={this.props.blockStyleFn} customStyleMap={{ ...DefaultDraftInlineStyle, ...this.props.customStyleMap }} customStyleFn={this.props.customStyleFn} editorKey={this._editorKey} editorState={this.props.editorState} key={'contents' + this.state.contentsKey} textDirectionality={this.props.textDirectionality} />
                                                                                                                                                ^^^^^^^^^^^^^^^^^^^^^^^ undefined. This type is incompatible with
     30:   blockStyleFn: (block: ContentBlock) => string;
                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See: node_modules/draft-js/lib/DraftEditorContents.react.js.flow:30


Found 2 errors
```

## What I think is wrong

The `blockRendererFn` prop
for the `DraftEditor` component
[is marked as optional](https://github.com/facebook/draft-js/blob/v0.10.4/src/component/base/DraftEditorProps.js#L62),
but [it's given a default value](https://github.com/facebook/draft-js/blob/v0.10.4/src/component/base/DraftEditor.react.js#L72).

According to the [Flow documentation](https://flow.org/en/docs/react/components/#toc-using-default-props),
when using default props,
the prop should be marked as required,
as "Flow will make sure that [the prop]
is optional if you have a default prop for [it]."

The same goes for the `blockStyleFn` prop.
