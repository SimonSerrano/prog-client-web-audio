import React from 'react';
import './navbar.css';

class Navbar extends React.Component {


    render() {
        return (
            <div className="item">
                <div className='flex-container space-between nowrap center navbar primary dark'>
                    <div className='grow col xs6 margin'>
                        <span className='primary light'>
                            <i class="fas fa-bars"></i>
                        </span>
                    </div>
                    <div className='grow col xs6'>
                        <div className='flex-container center nowrap'>
                            <div className='col grow xs6'>
                                <p>Michou</p>
                            </div>
                            <div className='col grow xs6'>
                                <span className='primary light'>
                                    <i class="fas fa-user-circle"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;