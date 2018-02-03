/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContentPage.scss';

class ContentPage extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(this.props.title);
  }

  componentDidMount() {
    var workspacePlayground = Blockly.inject('blockly-div',
      {toolbox: document.getElementById('toolbox')});
  }


  render() {
    var baStyle = {
      width: '35%',
      float: 'left',
      height: '95%'
    };

    var bdStyle = {
      height: '95%'
    };

    return (
      <div className={s.root}>
        <div className="blockly-area" style={baStyle}> 
          <div id="blockly-div" style={bdStyle}> </div>
        </div>
        <div className={s.container}>
          {this.props.path === '/' ? null : <h1>{this.props.title}</h1>}
          <div dangerouslySetInnerHTML={{ __html: this.props.content || '' }} />
        </div>
        <xml id="toolbox" style={{display: 'none'}}>
          <block type="controls_if"></block>
          <block type="controls_repeat_ext"></block>
          <block type="logic_compare"></block>
          <block type="math_number"></block>
          <block type="math_arithmetic"></block>
          <block type="text"></block>
          <block type="text_print"></block>
        </xml>
      </div>
    );
  }

}

export default withStyles(ContentPage, s);

