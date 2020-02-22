import React from 'react';
import './comment-list.css';
import CommentCard from '../comment-card/CommentCard';

class CommentList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                { this.props.comments ?
                <div className="flex-container align-start wrap">
                    {this.props.comments.map((comment, index) => {
                        return (<CommentCard key={index} comment={comment}></CommentCard>);
                    })}
                </div> : <div></div>
                }
            </>
        );
    }
}

export default CommentList;