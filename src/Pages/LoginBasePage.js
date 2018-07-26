import React, { Component } from "react";
import "../Styles/App.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class LoginBasePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_value: "",
      password_value: ""
    };
  }
  onSubmitHandler() {
    fetch("https://wtn.azurewebsites.net/api/user/login", {
      method: "post",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json-patch+json"
      },
      body: JSON.stringify({
        email: this.state.email_value,
        password: this.state.password_value
      })
    }).then(resp => {
      console.log(resp);
    });
  }
  render() {
    const buttonStyle = {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .30)",
      width: 250,
      marginTop: 50,
      align: "center"
    };
    return (
      <div className="page-login">
        <Grid container justify="center">
          <Grid item xs={12} md={8} lg={5}>
            <Card>
              <div className="card-content">
                <div className="login-image">
                  <img
                    src="https://images.pexels.com/photos/556664/pexels-photo-556664.jpeg?cs=srgb&dl=backlit-clouds-crescent-moon-556664.jpg&fm=jpg"
                    className="login-bg"
                  />
                  <img
                    src="https://in-api.asm.skype.com/v1/objects/0-cin-d2-ecc63edabd156321107908e1e6484b8c/views/imgpsh_mobile_save"
                    className="wtn-logo"
                  />
                </div>
                <div className="card-form">
                  <ValidatorForm
                    onSubmit={() => {
                      this.onSubmitHandler();
                    }}
                  >
                    <Typography variant="headline" gutterBottom>
                      Login
                    </Typography>
                    <hr className="login-hr" />
                    <br />

                    <br />
                    <br />
                    <TextValidator
                      label="Email"
                      className="login-field"
                      name="email"
                      validators={["required", "isEmail"]}
                      errorMessages={["this field is required"]}
                      fullWidth={true}
                      onChange={e => {
                        this.setState({
                          email_value: e.target.value
                        });
                      }}
                      value={this.state.email_value}
                    />
                    <br />
                    <br />
                    <br />

                    <TextValidator
                      label="Password"
                      name="password"
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                      fullWidth={true}
                      onChange={e => {
                        this.setState({
                          password_value: e.target.value
                        });
                      }}
                      value={this.state.password_value}
                    />
                    <br />
                    <br />
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      style={buttonStyle}
                    >
                      Login
                    </Button>
                  </ValidatorForm>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
