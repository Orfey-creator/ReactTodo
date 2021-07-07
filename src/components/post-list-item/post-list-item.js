import React from 'react';

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello world!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm">
                <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
            
        </li>
    )
}
export default PostListItem;