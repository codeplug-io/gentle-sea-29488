import React from "react";
import { Copyright } from "@material-ui/icons";
import "./footer-classes.css";
import {
  ContactSupport,
  LaptopMac,
  DesktopMac,
  PhoneAndroid,
  Policy,
  Web,
  GitHub,
  Twitter,
  Instagram,
  Facebook,
  WhatsApp,
  Help,
  Email
} from "@material-ui/icons";
// Android, Apple,   Style,
import { StackOverflow } from "grommet-icons";

const footer = () => {
  return (
    <div>
      <div className="Social">
        <a href="/Instagram">
          <Instagram
            className="CopyrightIcon"
            style={{ width: "18px", height: "18px", color: "rgb(197 107 145)" }}
          />{" "}
          Instagram
        </a>

        <a href="/facebook">
          <Facebook
            className="CopyrightIcon"
            style={{ width: "18px", height: "18px", color: "rgb(35 167 161)" }}
          />{" "}
          Facebook
        </a>

        <a href="/whatsapp">
          <WhatsApp
            className="CopyrightIcon"
            style={{ width: "18px", color: "rgb(61 210 72)", height: "18px" }}
          />{" "}
          WhatsApp
        </a>
      </div>
      <div className="FooterNav">
        <div className="FooterNavItems">
          <h4>Perfect IO</h4>
          <ul>
            <li>
              <a href="/webApp">
                <Web
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                Web Applications
              </a>
            </li>
            <li>
              <a href="/mobileApp">
                <PhoneAndroid
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                Mobile Applications
              </a>
            </li>
            <li>
              <a href="/desktopApp">
                <LaptopMac
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                Desktop Application
              </a>
            </li>
            <li>
              <a href="unixAdmin">
                <DesktopMac
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                Unix Admin
              </a>
            </li>
          </ul>
        </div>
        <div className="FooterNavItems">
          <h4>Community</h4>
          <ul>
            <li>
              <a href="/gitHub">
                <GitHub
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                GitHub
              </a>
            </li>
            <li>
              <a href="/twitter">
                <Twitter
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                Twitter
              </a>
            </li>
            <li>
              <a href="/stackOverflow">
                <StackOverflow
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px", color: "red" }}
                />{" "}
                StackOverflow
              </a>
            </li>

            <li>
              <a href="/team">Team</a>
            </li>
          </ul>
        </div>
        <div className="FooterNavItems">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="/Support">
                <ContactSupport
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                Support
              </a>
            </li>
            <li>
              <a href="/partner">Partners</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="FooterNavItems">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/">
                <Policy
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                Policy
              </a>
            </li>
            <li>
              <a href="/">
                <Help
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                About
              </a>
            </li>
            <li>
              <a href="/">
                <Email
                  className="CopyrightIcon"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                Contact Us
              </a>
            </li>
            <li>
              <a href="/">Jobs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Copyright">
        Copyright{" "}
        <Copyright
          style={{ width: "16px", height: "16px" }}
          className="CopyrightIcon"
        />
        2020 {"  "}
        <a href="/">@darkteam.dev</a>
      </div>
    </div>
  );
};

export default footer;
