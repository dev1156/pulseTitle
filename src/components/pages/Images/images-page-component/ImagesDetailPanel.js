import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PTButton from '../../../ui-elements/PTButton/PTButton';
import PluginDetailHeader from '../../../plugin-page-component/PluginDetailHeader';

export default class ImagesDetailPanel extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
    onShow: PropTypes.func,
    onExpand: PropTypes.func.isRequired,
    isBtnShowPanel: PropTypes.bool.isRequired,
    currentPanel: PropTypes.string.isRequired,
  };

  render() {
    const { name, title, children, isOpen, onShow, onExpand, currentPanel, isBtnShowPanel } = this.props;

    return (
      <div className={classNames('panel panel-secondary', { open: isOpen })}>
        <PluginDetailHeader onExpand={onExpand} name={name} title={title} onShow={onShow} currentPanel={currentPanel} isBtnShowPanel={isBtnShowPanel} />
        <div className="panel-body">
          {children}
          <div className="panel-control">
            <div className="control-group center">
              <PTButton id="play" type="button" className="btn btn-inverse btn-success btn-none-border btn-icon-normal disabled">
                <i className="btn-icon fa fa-play" />
              </PTButton>
              <PTButton id="stop" type="button" className="btn btn-inverse btn-success btn-none-border btn-icon-normal disabled">
                <i className="btn-icon fa fa-stop" />
              </PTButton>
              <div className="control-separate control-separate-sm" />
              <PTButton id="zoomIn" type="button" className="btn btn-inverse btn-success btn-none-border btn-icon-normal">
                <i className="btn-icon fa fa-search-minus" />
              </PTButton>
              <PTButton id="zoomOut" type="button" className="btn btn-inverse btn-success btn-none-border btn-icon-normal">
                <i className="btn-icon fa fa-search-plus" />
              </PTButton>
              <div className="control-separate control-separate-sm" />
              <PTButton id="arrows" type="button" className="btn btn-inverse btn-success btn-none-border btn-icon-normal">
                <i className="fa fa-arrows" />
              </PTButton>
              <PTButton id="verticalArrows" type="button" className="btn btn-inverse btn-success btn-none-border btn-icon-normal">
                <i className="fa fa-arrows-v" />
              </PTButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
