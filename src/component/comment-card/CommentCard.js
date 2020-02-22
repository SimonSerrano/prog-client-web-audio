import React from 'react';
import './comment-card.css';

class CommentCard extends React.Component {
    

    render() {
        return (
            <>
                <div className="wrapper-card">
                    <div className="top-card">
                        <div className="name-card">
                            {this.props.comment.author}
                        </div>
                        <div className="rate-card">
                            {this.props.comment.rate}
                        </div>
                    </div>
                    <div className="text-card">
                        {this.props.comment.text}
                    </div>
                </div>
            </>
        );
    }
}

export default CommentCard;