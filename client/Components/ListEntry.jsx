import React, { Component } from 'react';

var ListEntry = (props) => (

  <li onClick={() => props.handleListEntry(props.item)}>
    {props.item}
    <button value='delete' onClick={() => props.handleDelete(props.index)}>Delete</button>
    <button value='edit' onClick={() => props.handleEdit(props.index)}>Edit</button>
  </li>

);

export default ListEntry;