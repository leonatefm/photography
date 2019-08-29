import './Contact.scss';
import * as React from 'react';
import icons from './icons';

class Contact extends React.PureComponent {
  render() {
    return (
      <div className="Contact">
        <a className="Contact-link" href="https://www.weibo.com/leonate" target="_blank" rel="noopener noreferrer">
          {icons.weibo}
        </a>
        <a
          className="Contact-link"
          href="https://www.instagram.com/aprilopus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {icons.instagram}
        </a>
      </div>
    );
  }
}

export default Contact;
