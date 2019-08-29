import './GalleryPreview.scss';
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class GalleryPreview extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    clickOff: PropTypes.func,
    title: PropTypes.string,
    url: PropTypes.string.isRequired
  };

  constructor() {
    super();
    this.el = document.createElement('div');
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    document.getElementById('root').appendChild(this.el);
    document.body.classList.add('modal-open');
    disableBodyScroll(this.el);
    setTimeout(() => {
      this.setState({
        isOpen: true
      });
    }, 10);
  }

  componentWillUnmount() {
    document.getElementById('root').removeChild(this.el);
    document.body.classList.remove('modal-open');
    enableBodyScroll(this.el);
  }

  render() {
    const { className, clickOff, title, url } = this.props;
    const { isOpen } = this.state;

    return ReactDOM.createPortal(
      <div className={classNames('GalleryPreview', { open: isOpen }, className)}>
        <div className="GalleryPreview-backdrop"></div>
        <figure className="GalleryPreview-figure" onClick={clickOff}>
          <img className={classNames({ visible: isOpen })} src={url} alt={title} />
        </figure>
      </div>,
      this.el
    );
  }
}

export default GalleryPreview;
