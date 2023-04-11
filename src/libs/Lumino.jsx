import React, { Component }  from 'react';
import { createPortal } from 'react-dom';

export class LuminoLayout extends Component {
  constructor(props) {
    super(props);
    this.luminoListeners = {};
    this.state = {
      context: {
        addWidget: this.addWidget,
      }
    }
  }

  addWidget() {
    console.log('addWidget')
  }

  render() {
    const { children } = this.props;

    console.log('LuminoLayout: ', this)
    return (
      <LuminoWidget.contextType.Provider value={this.state.context}>
        {children}
      </LuminoWidget.contextType.Provider>
    )
  }
}

export class LuminoWidget extends Component {
  constructor(props){
    super(props);
  }
  
  get domNode() {
    if(this._domNode) return this._domNode;
    this._domNode = document.createElement('div');
    return this._domNode;
  }

  render() {
    const { children } = this.props;

    console.log('LuminoWidget: ', this.context)

    return createPortal(children, this.domNode);
  }
}

LuminoWidget.contextType = React.createContext({})