import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    red: PropTypes.bool,
    clear: PropTypes.bool,
    clickHandler: PropTypes.func
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "btnNormal",
      this.props.operator ? "red" : "",
      this.props.clear ? "clear" : ""
    ];

    return (
      <div className={className.join(" ")}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;

/*

import React from "react";
import "./tabs.scss";

/*

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: 0,
      class: "tabItemStyling tabItem"
    };
  }

  selectTab = itemIndex => {
    this.setState({ selectedTabIndex: itemIndex });
  };

  renderTabTitles = () => {
    const { tabs } = this.props;
    return tabs.map(
      (item, index) => (
        <button
          className={this.state.class}
          onClick={() => this.selectTab(index)}
        >
          {item.title}
        </button>
      ),
      this
    );
  };

  renderSelectedTab = () => {
    const { tabs } = this.props;
    const { selectedTabIndex } = this.state;
    return <>{tabs[selectedTabIndex].content}</>;
  };

  renderDashboardTabs = () => {
    const { tabs } = this.props;
    let titles = tabs.map(function(item, index) {
      if (index === 0) {
        if (this.state.selectedTabIndex === index) {
          return (
            <button
              className={"tabItemActive tabItem tabCornerLeft"}
              onClick={() => this.selectTab(index)}
            >
              {item.title}
            </button>
          );
        } else {
          return (
            <button
              className={"tabItem tabCornerLeft"}
              onClick={() => this.selectTab(index)}
            >
              {item.title}
            </button>
          );
        }
      } else if (index === tabs.length - 1) {
        if (this.state.selectedTabIndex === index) {
          return (
            <button
              className={"tabItemActive tabItem tabCornerRight"}
              onClick={() => this.selectTab(index)}
            >
              {item.title}
            </button>
          );
        } else {
          return (
            <button
              className={"tabItem tabCornerRight"}
              onClick={() => this.selectTab(index)}
            >
              {item.title}
            </button>
          );
        }
      } else if (this.state.selectedTabIndex === index) {
        return (
          <button
            className={"tabItemActive tabItem"}
            onClick={() => this.selectTab(index)}
          >
            {item.title}
          </button>
        );
      } else {
        return (
          <button
            className={this.state.class}
            onClick={() => this.selectTab(index)}
          >
            {item.title}
          </button>
        );
      }
    }, this);
    return titles;
  };

  render() {
    return (
      <>
        <>
          <div>
            {this.props.dashboard
              ? this.renderDashboardTabs()
              : this.renderTabTitles()}
          </div>
        </>
        <>{this.renderSelectedTab()}</>
      </>
    );
  }
}

export default Tabs;


*/
