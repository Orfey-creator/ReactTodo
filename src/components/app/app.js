import React from "react";
import "./app.css";
import "../../index.css";
import "../app-header/app-header.css";
import "../post-add-form/post-add-form.css";
import "../post-list/post-list.css";
import "../post-list-item/post-list-item.css";
import "../post-status-filter/post-status-filter.css";
import "../search-panel/search-panel.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data : [
        1,
        2,
        {},
        [],
        {
          label: "Going tovpukvpuk learn React",
          id: "1",
        },
        {
          label: "Going to learn React",
          id: "2",
        },
        {
          label: "Thats was good",
          id: "3",
        },
        {
          label: "I need a break...",
          id: "4",
        },
      ]
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 5;
  };

  deleteItem (id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id );

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];
      return {
        data : newArr
      }
    });
  }

  addItem ( body ) {
    const newItem = {
      label : body, 
      important : false,
      id : this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data : newArr
      }
    })
  }

  render () {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList 
          posts={this.state.data} 
          onDelete = { this.deleteItem }
        />
        <PostAddForm 
          onAdd = {this.addItem}
        />
      </div>
    );
  }
};


