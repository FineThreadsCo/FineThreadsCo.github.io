import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="footer text-dark border-top-line mt-auto mx-5">
      <div className="pt-5 pb-3">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-between mb-md-0 mb-4">
            <h6>Fine Threads co.</h6>
            <div className="icon-row">
              <Facebook
                color="black"
                size={20}
                style={{ opacity: 0.5, marginRight: "10px" }}
              />
              <Linkedin
                color="black"
                size={20}
                style={{ opacity: 0.5, marginRight: "10px" }}
              />
              <Twitter
                color="black"
                size={20}
                style={{ opacity: 0.5, marginRight: "10px" }}
              />
              <Instagram
                color="black"
                size={20}
                style={{ opacity: 0.5, marginRight: "10px" }}
              />
              <Youtube color="black" size={24} style={{ opacity: 0.5 }} />
            </div>
            <p className="text-muted">
              © 2001-2024, FineThreads.co, Inc. or its affiliates
            </p>
          </div>
          <div className="col-md-8 mb-md-0 mb-4">
            <div className="row">
              <div className="col-md-4 mb-md-0 mb-4">
                <h6>Services</h6>
                <ul className="list-unstyled text-small">
                  <li>
                    <p>
                      <Link
                        className="text-muted custom-link"
                        to="/services#clothing-alterations"
                      >
                        Alterations
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link
                        className="text-muted custom-link"
                        to="/services#vintage-restoration"
                      >
                        Vintage Restoration
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link
                        className="text-muted custom-link"
                        to="/services#online-consultation"
                      >
                        Online Consultation
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-md-0 mb-4">
                <h6>Custom</h6>
                <ul className="list-unstyled text-small">
                  <li>
                    <p>
                      <Link className="text-muted custom-link" to="/booking">
                        Weddings
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link className="text-muted custom-link" to="/booking">
                        Custom Fabrics
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link className="text-muted custom-link" to="/booking">
                        Speak to an Expert
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-md-0 mb-4">
                <h6>Contacts</h6>
                <ul className="list-unstyled text-small">
                  <li>
                    <p className="text-muted">1-800-THREADS</p>
                  </li>
                  <li>
                    <p className="text-muted">123 Road Dr, A1A 1A1</p>
                  </li>
                  <li>
                    <p>
                      <a
                        href="mailto:support@finethreads.co"
                        className="text-muted"
                        style={{ textDecoration: "none" }}
                      >
                        support@finethreads.co
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
