import React from 'react';
import '../CSS/footer.css'; // Import your CSS file for the footer

const Footer = () => {
  return (
    <footer className="footer-section bg-black">
      <div className="footer-header-section footer-no-top-padding">
        <div className="container">
          <div className="footer-header-wrapper footer-grow-faster">
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5001ea3eda_Asset%205.svg"
              loading="lazy"
              alt=""
              className="footer-bg"
            />
            <h6 className="h2 text-white">You can grow faster than you think!</h6>
            <p className="text-medium text-white custom-width text-align-center">
              Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.
            </p>
            <div className="button-wrapper">
              <div className="button-secondary slider" onClick={() => alert('Get started with Crest')}>
                <div className="btn-secondary-bg bg-black">
                  <div className="text-white">Get started with Crest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-small text-white footer-small-padding">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-links-wrapper">
              <a href="/" aria-current="page" className="w-inline-block w--current">
                <img
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326df120ea3eb2_logo-white.svg"
                  loading="lazy"
                  width="180"
                  alt=""
                  className="brand footer"
                />
              </a>
              <p className="text-medium text-white-light custom-width hide-from-tablet">
                Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.
              </p>
            </div>
            <div className="footer-links-wrapper">
              <div className="text-medium-bold">Explore</div>
              <a href="/product" className="text-medium text-white-light footer-link">Product</a>
              <a href="/pricing" className="text-medium text-white-light footer-link">Pricing</a>
              <a href="/customer-stories" className="text-medium text-white-light footer-link">Customer Stories</a>
              <a href="https://jobs.gohire.io/crest-4g9epqum/" className="text-medium text-white-light footer-link">Career</a>
            </div>
            <div className="footer-links-wrapper">
              <div className="text-medium-bold">Learn</div>
              <a href="/about-us" className="text-medium text-white-light footer-link">About us</a>
              <a href="/blog" className="text-medium text-white-light footer-link">Blog</a>
            </div>
            <div className="footer-links-wrapper">
              <div className="text-medium-bold">Contact Crest</div>
              <a href="mailto:support@getcrest.ai" className="text-medium text-white-light footer-link">sales@getcrest.ai</a>
              <a
                href="https://goo.gl/maps/yRWVGbr5v6A8bgiw7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medium text-white-light full-width"
              >
                Registered Office:<br />
                1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102
              </a>
              <a
                href="https://maps.app.goo.gl/Vz2jA9K9g1WxVg3D8?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medium text-white-light full-width"
              >
                Corporate Office:<br />
                291, All Time Space, 4th Floor,<br />
                15th A Cross, Sector - 6,<br />
                HSR Layout, Bengaluru,<br />
                India. 560102
              </a>
            </div>
            <div className="footer-bottom">
              <div className="footer-copyright">
                <div className="footer-bottom-links flex-horizontal columns-25">
                  <div className="text-white-light copy-right-text">
                    Copyright 2024 Crest
                  </div>
                  <a href="/terms-of-service" className="text-medium text-white-light footer-link">Terms of Service</a>
                  <a href="/privacy-policy" className="text-medium text-white-light footer-link">Privacy Policy</a>
                </div>
                <div className="text-white-light copy-right-text">
                  Conifer Innovations Private Limited<br />
                  CIN: U72900KA2022PTC163144
                </div>
              </div>
              <a href="#" className="scroll-top hide-from-tablet w-inline-block">
                <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d53d1ea3ece_go-to-top.svg" loading="lazy" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
