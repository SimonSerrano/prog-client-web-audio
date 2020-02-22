import React from 'react';
import './comment-card.css';

class CommentCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>
                    <div>
                        {this.props.comment.author}
                    </div>
                    <div>
                        {this.props.comment.rate}
                    </div>
                    <div>
                        {this.props.comment.text}
                    </div>
                </div>
            </>
        );
    }
}

export default CommentCard;