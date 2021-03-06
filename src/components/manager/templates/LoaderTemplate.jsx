import React from "react";
import { Link } from "react-router-dom";
import Sidenav from "../Sidenav";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderTemplate = ({ title, isAdd, link, content }) => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidenav />
      </div>
      <div className="main-content">
        <div className="header">
          <div className="title">{title}</div>
          {isAdd && (
            <Link to={link}>
              <button type="button">
                Add <i className="material-icons">&#xe147;</i>
              </button>
            </Link>
          )}
        </div>
        <hr />
        <div className="content">
          <div className="loading">
            <Loader type="Audio" color="#897eff" height={100} width={100} />
            <p>
              {content} {title}s...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderTemplate;
