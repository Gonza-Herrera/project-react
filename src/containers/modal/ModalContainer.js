import React, { Component } from "react";
import { connect } from "react-redux";
import LoginContainer from "../login/LoginContainer";
import NewGastoContainer from "../newGasto/NewGastoContainer";

class ModalContainer extends Component {
  renderModalView = () => {
    switch (this.props.modalView) {
      case "Login":
        return <LoginContainer />;

      case "NuevoGasto":
        return <NewGastoContainer />;

      default:
        return null;
    }
  };

  render() {
    return (
      <div className="modal-container">
        <div className="modal-container__header"></div>
        <div className="modal-container__body">{this.renderModalView()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ modalView: state.appReducer.modalView });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
