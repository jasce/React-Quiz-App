import React from 'react';
import { Link } from 'react-router-dom';


const Button = (props) => (
    <Link to={props.to} >{props.text}</Link>
)


export default Button;