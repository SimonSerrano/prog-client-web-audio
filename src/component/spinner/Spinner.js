import React, { PureComponent } from 'react';
import './spinner.css';


class Spinner extends PureComponent {


    render() {
        return (
            <div className="primary dark turntable">
                <i className="fas fa-compact-disc fa-spin disc margin"></i>
            </div>
        );
    }
}

export default Spinner;