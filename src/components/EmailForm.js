import React, { Component } from 'react';
import addToMailchimp from "gatsby-plugin-mailchimp"

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ message: 'Thank you!' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);

    addToMailchimp(email, {
      fields,
    }).then(data => {
      if (data.result === "error") {
        // if message mentioned already subcribed send user to auth page with email address matched to the mailchimp data.
        let subscribed = data.msg.match(/subscrib/g)
        let tooMany = data.msg.match(/too/g)
        if (subscribed) {

          this.setState({message: data.msg, email: email}) 
          // navigate("/user", {
           
          //   replace: true,
          // })
        }
        if (tooMany) {
        }

        this.setState({ message: data.msg })
      } else {
        // confirm
        this.setState({ message: data.msg })
        // navigate("/user", { state: { message: data.msg }, replace: true })
      }
    })

  }

  render() {
    const { message } = this.state;
    return (
      <form id="signup-form" onSubmit={this.onSubmit} method="post" action="#">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input type="submit" value="Sign Up" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
