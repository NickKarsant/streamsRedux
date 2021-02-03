import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      // <input
      // onChange={formProps.input.onChange}
      // value={formProps.input.value}
      // />
      // above input is equal to below input
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {

  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field
          name="description"
          label="Enter Description"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreate);
