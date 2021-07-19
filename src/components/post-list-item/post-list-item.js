import React from "react";

export default class PostListItem extends React.Component {
  

  render() {
    const { label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
    const date = new Date();
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
        classNames += " like";
    }
    return (
      <div className={classNames}>
        <span onClick={ onToggleLiked } className="app-list-item-label">{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <span>
            {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
          </span>
          <button onClick={onToggleImportant} className="btn-star btn-sm">
            <i className="fa fa-star"></i>
          </button>
          <button onClick={onDelete} className="btn-trash btn-sm">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
