import React, { Component } from "react";
import ImageResults from "../imageresults/ImageResults";
import "./Search.css";

class Search extends Component {
  state = {
    searchText: "",
    amount: 5,
    apiUrl: "https://pixabay.com/api",
    apiKey: "11829666-038b7b6a67a0d8e8e64857a66",
    images: []
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        fetch(
          `https://pixabay.com/api/?key=${this.state.apiKey}&q=${
            this.state.searchText
          }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
        )
          .then(res => {
            res.json().then(data => {
              this.setState({ images: data.hits });
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  onAmountChange = e => {
    this.setState({ amount: e.target.value });
  };

  render() {
    console.log(this.state.amount);
    console.log(this.state.images);
    return (
      <div className="search">
        <input
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          placeholder="Search For Images"
        />
        <br />
        <select
          name="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
