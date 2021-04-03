import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends React.Component {
  static propTypes = {
    components: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    var activeTabVal = this.props.activeTab ? this.props.activeTab : this.props.components[0].props.label;

    this.state = {
      activeTab: activeTabVal
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { components },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {components.map((component) => {
            const { label } = component.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content" style={{maxHeight:'80vh',overflowY:'scroll'}}>
          {components.map((component) => {
            if (component.props.label !== activeTab) return undefined;
            return component;
          })}
        </div>
      </div>
    );
  }
}
export default Tabs;