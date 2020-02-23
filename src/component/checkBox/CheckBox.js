import React from 'react';
import './checkBox.css';

export const CheckBox = props => {
    return (
        <div className="checkbox">
            <input className="boxCategory" key={props.name} onClick={props.handleChange} type="checkbox" checked={props.isChecked} value={props.name} />
            <div className="nameCategory">{props.name}</div>
        </div>
    )
}

export default CheckBox;