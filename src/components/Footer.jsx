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
    <div className="border-top-line mt-auto mx-5">
      <footer className="footer bg-white text-dark">
        <div className="pt-5 pb-3">
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
                        <Link className="text-muted custom-link" to="/services">
                          Alterations
                        </Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link className="text-muted custom-link" to="/services">
                          Pickup & Dropoff
                        </Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link className="text-muted custom-link" to="/services">
                          Speak to an Expert
                        </Link>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h6>Custom</h6>
                  <ul className="list-unstyled text-small">
                    <li>
                      <p>
                        <Link className="text-muted custom-link" to="/services">
                          Weddings
                        </Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link className="text-muted custom-link" to="/services">
                          Fabric Selection
                        </Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link className="text-muted custom-link" to="/services">
                          Loyalty Program
                        </Link>
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
    </div>
  );
}

export default Footer;
