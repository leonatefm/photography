import './GalleryFigure.scss';
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class GalleryFigure extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string.isRequired
  };

  render() {
    const { className, title, url } = this.props;

    return (
      <figure className={classNames('GalleryFigure', className)}>
        <img src={url} alt={title} />
      </figure>
    );
  }
}

export default GalleryFigure;
