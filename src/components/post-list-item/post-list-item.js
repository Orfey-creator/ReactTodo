import React from "react";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(({ important }) => ({
      important: !important,
    }));
  }
  onLike() {
    this.setState(({ like }) => ({
      like: !like,
    }));
  }

  render() {
    const { label, onDelete} = this.props;
    const { important, like } = this.state;
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
        <span onClick={this.onLike} className="app-list-item-label">{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <span>
            {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
          </span>
          <button onClick={this.onImportant} className="btn-star btn-sm">
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
