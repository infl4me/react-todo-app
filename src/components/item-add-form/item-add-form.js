import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  render() {
    return (
      <form className="mt-3">
        <div class="form-group d-flex">
          <input type="text" className="form-control mr-1" placeholder="What needs to be done?" />
          <button type="submit" class="btn btn-outline-secondary">Add</button>
        </div>
      </form>
    );
  }
}