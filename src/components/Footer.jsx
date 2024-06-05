import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-between">
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
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <h6>Services</h6>
                <ul className="list-unstyled text-small">
                  <li>
                    <p>
                      <a className="text-muted custom-link" href="/services">
                        Alterations
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a className="text-muted custom-link" href="/services">
                        Pickup & Dropoff
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a className="text-muted custom-link" href="/services">
                        Speak to an Expert
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6>Custom</h6>
                <ul className="list-unstyled text-small">
                  <li>
                    <p>
                      <a className="text-muted custom-link" href="/services">
                        Weddings
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a className="text-muted custom-link" href="/services">
                        Fabric Selection
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a className="text-muted custom-link" href="/services">
                        Loyalty Program
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
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
