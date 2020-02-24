import React from 'react';
import './comment-list.css';
import CommentCard from '../comment-card/CommentCard';

class CommentList extends React.Component {

    

    render() {
        return (
            <>

                {this.props.comments ?
                    <div className="wrapper-list">
                        <div className="subtitle">
                            Commentaires
                        </div>
                        {this.props.comments.map((comment, index) => {
                            return (<CommentCard key={index} comment={comment}></CommentCard>);
                        })}
                    </div> : <div>
                        Aucun commentaire
                </div>
                }
            </>
        );
    }
}

export default CommentList;