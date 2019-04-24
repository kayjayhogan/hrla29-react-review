import React, { Component } from 'react';

var ListEntry = (props) => (

  <li onClick={() => props.onClick(props.item)}>
    {props.item}
  </li>

);

export default ListEntry;