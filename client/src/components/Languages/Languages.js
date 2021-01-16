import React from "react";
import languagesSvg from "../../assets/svg/languages.svg";
import "./language-style.css";

const languages = props => {
  return (
    <a className="LangA" href={props.href}>
      <img src={languagesSvg} alt="languages" />
      <span className="LangSpan">Languages</span>
    </a>
  );
};

export default languages;
