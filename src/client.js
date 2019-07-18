import React from "react";

import "./App.css";

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      month: "",
      year: ""
    };
  }
  nameChange = e => {
    if (e.target.value.match(/^[a-zA-Z]+$/)) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
  //   numberWithSpaces(x) {
  //     var result = "";
  //     var s = 4;

  //     while (x.length > 0) {

  //       result = result + " " + x.substring(0, s);
  //       x = x.substring(s);
  //     }
  //   }

  //   var sText = '9038352', sNewText;
  // for(var i=0; i<sText.length; i++) {
  //    sNewText += sText.charAt(i) + ' ';
  // }
  cardNumberChange(e) {
    if (e.target.value.match(/^[-+]?\d*$/)) {
      this.setState({
        [e.target.name]: e.target.value.replace(/(\d{4})/g, "$1 ")
      });
    }
  }

  cardYearChange(e) {
    if (e.target.value.match(/^[-+]?\d*$/)) {
      this.setState({
        [e.target.name]: e.target.value.replace(/(\d{2})/g, "$1/").slice(0, 5)
      });
    }
  }
  render() {
    return (
      <div>
        <div className="credit">
          <img className="bank" />

          <input
            className="card-number"
            type="text"
            defaultValue={this.state.number}
          />
          <input
            className="card-name"
            type="text"
            defaultValue={this.state.name}
          />

          <label className="date">{this.state.year}</label>
        </div>
        <div className="label">
          <label>
            NAME
            <input
              name="name"
              defaultValue={this.state.name}
              type="text"
              onChange={e => this.nameChange(e)}
            />
          </label>
          <label>
            NUMBER
            <input
              name="number"
              defaultValue={this.state.number}
              type="text"
              maxLength="16"
              onChange={e => this.cardNumberChange(e)}
            />
          </label>
          <p className="labeldate">
            <label>
              Year
              <input
                name="year"
                maxLength="4"
                defaultValue={this.state.year}
                type="text"
                onChange={e => this.cardYearChange(e)}
              />
            </label>
          </p>
        </div>
      </div>
    );
  }
}
export default Client;
