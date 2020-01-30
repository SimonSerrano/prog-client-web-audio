import React from 'react';
import './plugin-card.css';

class PluginCard extends React.Component {

    render() {
        return (
            <>
                <div className='lg4 flex-container margin'>
                    <div className='flex-container column primary light fill border-radius'>
                        <div className='flex-container justify-center margin'>
                            {this.props.plugin.title}
                        </div>
                        <div className='flex-container plugin image justify-center'>
                            <img alt="plugins' icon" src={"logo192.png"} />
                        </div>
                        <div className='flex-container justify-center'>
                            Catégorie : {this.props.plugin.type}
                        </div>
                        <div className='flex-container justify-center'>
                            Review : {this.props.plugin.review}
                        </div>
                    </div>
                </div>








{/*
                <div className='flex-container plugin-margin plugin-height'>
                    <div className='flex-container primary light border-radius fill'>
                        <div className='flex-container plugin-image margin'>
                            <img className='flex-container fill-height'  alt="plugins' icon" src={"logo192.png"} />
                        </div>
                        <div className='flex-container column fill plugin-border-left'>
                            <div className='flex-container fill-width plugin-border-bottom'>
                                <div className='flex-container plugin-title-padding'>
                                    {this.props.plugin.name}
                                </div>
                            </div>
                            <div className='flex-container fill'>
                                <div className='flex-container plugin-title-padding font12 wrap'>
                                    {this.props.plugin.content}
                                </div>
                            </div>
                        </div>
                    </div>
</div>*/}
            </>
        );
    }
}

export default PluginCard;