import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    text: '',
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { addItem } = this.props;
    const { text } = this.state;
    addItem(text);
    this.setState({ text: '' });
  };

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="mt-3">
        <div className="form-group d-flex">
          <input value={text} onChange={this.onChange} type="text" className="form-control mr-1" placeholder="What needs to be done?" required />
          <button type="submit" className="btn btn-outline-secondary">Add</button>
        </div>
      </form>
    );
  }
}
