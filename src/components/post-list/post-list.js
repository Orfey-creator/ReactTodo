import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map((item) => {
        if (item.id && item.label) {
            return (
                <li key = {item.id} className="list-group-item">
                    <PostListItem 
                        { ...item }
                        onDelete = { () => onDelete(item.id)}
                        onToggleImportant = { () => onToggleImportant(item.id)}
                        onToggleLiked = { () => onToggleLiked(item.id)}
                    />
                </li>
            )
        }
        
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;