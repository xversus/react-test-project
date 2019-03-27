import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "../Spinner";
import starIcon from "../../images/star.svg";
import watchIcon from "../../images/watch.svg";
import forkIcon from "../../images/fork.svg";
import "./GithubChecker.css";

export class GithubChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsCount: null,
      subscribersCount: null,
      forksCount: null,
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    const apiAddress = `https://api.github.com/users/${this.props.name}/repos`;

    this.setState({ loading: true });
    fetch(apiAddress)
      .then(response => {
        if (response.status === 404) {
          throw new Error("Такой пользователь не найден!");
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (!data || data.length === 0) {
          throw new Error("У пользователя отсутствуют репозитории!");
        }
        const { forks_count, stargazers_count, watchers_count } = data[0];
        this.setState({
          starsCount: stargazers_count,
          subscribersCount: watchers_count,
          forksCount: forks_count,
          loading: false
        });
      })
      .catch(error => this.setState({ loading: false, error: error.message }));
  }

  renderGithubData = () => {
    const { starsCount, subscribersCount, forksCount } = this.state;
    return (
      <React.Fragment>
        <h2 className="github-title">Немного статистики, {this.props.name}</h2>
        <div className="github-data">
          <img className="github-data__icon" src={starIcon} />
          {starsCount}
        </div>
        <div className="github-data">
          <img className="github-data__icon" src={watchIcon} />
          {subscribersCount}
        </div>
        <div className="github-data">
          <img className="github-data__icon" src={forkIcon} />
          {forksCount}
        </div>
      </React.Fragment>
    );
  };

  renderErrorMessage = error => <h2 className="github-title">{error}</h2>;

  render() {
    const { error, loading } = this.state;
    let content;
    if (loading) {
      content = <Spinner />;
    } else if (error) {
      content = this.renderErrorMessage(error);
    } else {
      content = this.renderGithubData();
    }
    return <div className="github-checker">{content}</div>;
  }
}

GithubChecker.propTypes = {
  name: PropTypes.string
};
