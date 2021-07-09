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

const App = () => {
  const data = [
    1,
    2,
    {},
    [],

    {
      label: "Going tovpukvpuk learn React",
      id: "sdawqd",
    },
    {
      label: "Going to learn React",
      id: "sdwqd",
    },
    {
      label: "Thats was good",
      id: "daqwdq",
    },
    {
      label: "I need a break...",
      id: "fwfa",
    },
  ];
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
