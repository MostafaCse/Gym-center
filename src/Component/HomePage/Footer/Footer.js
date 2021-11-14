import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="boxHighlight">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <h1>POWER <span style={{ color: 'yellow' }}>X</span></h1>
        </div>
        <div className="col-md-2 col-sm-6">
          <p style={{ fontWeight: '700' }}>Need Help?</p>
          <p><Link className="itemStranded" to="/">Help Center</Link></p>
          <p><Link className="itemStranded" to="/">Email Support</Link> </p>
          <p> <Link className="itemStranded" to="/">Live Chat</Link> </p>
          <p><Link className="itemStranded" to="/">Gift Certificates</Link></p>
          <p><Link className="itemStranded" to="/">Send Us Feedback</Link></p>
        </div>
        <div className="col-md-2 col-sm-6">
          <p style={{ fontWeight: '700' }}>Digital Resources</p>
          <p><Link className="itemStranded" to="/">Articles</Link></p>
          <p><Link className="itemStranded" to="/">E-Books</Link> </p>
        </div>
        <div className="col-md-2 col-sm-6">
          <p style={{ fontWeight: '700' }}>Connect With Us</p>
          <FontAwesomeIcon size='lg' icon={faYoutube} />{`  `}
          <FontAwesomeIcon size='lg' icon={faFacebook} />{` `}
          <FontAwesomeIcon size='lg' icon={faInstagram} />{` `}
          <FontAwesomeIcon size='lg' icon={faTwitter} />{` `}
          <FontAwesomeIcon size='lg' icon={faWhatsapp} />{` `}
          <p><Link className="itemStranded" to="/">Forum</Link> </p>
        </div>
        <div className="col-md-3 col-sm-6">
          <p style={{ fontWeight: '700' }}>Join Our Newsletter</p>
          <p>Get exclusive news, feature, and updates from The Shredder Weight Loss Academy </p>
        </div>
      </div>
      <footer style={{ color: 'grey', marginTop: '6%', textAlign: 'center', fontSize: 'small', paddingBottom: '1%' }}>
        <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>{` ${year} All Rights Reserved`}
      </footer>
    </div>
  );
};

export default Footer;