import React, { Component } from "react";
import Dropdown from "../../components/dropdown";

const obj = [
  {
    accountIdid: 1,
    description: "option 1",
  },
  {
    accountId: 2,
    description: "option 2",
  },
  {
    accountId: 3,
    description: "option 3",
  },
];

class NewGastoContainer extends Component {
  state = {
    description: "",
    amount: 0,
    accountId: 0,
    categoryId: 0,
    providerId: 0,
  };

  handleChangeAccount = (accountId) => {
    this.setState({ accountId });
    console.log("hand: ", accountId);
  };

  render() {
    return (
      <div className="newGastoContainer">
        <div className="header">
          <h3>Nuevo Gasto</h3>
        </div>
        <div className="body">
          <Dropdown
            title="test"
            onChangeValue={this.handleChangeAccount}
            value={this.state.accountId}
            object={obj}
          />
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default NewGastoContainer;
