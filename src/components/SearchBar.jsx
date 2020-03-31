import React, {Component} from "react";
import "../styles/SearchBar.scss";

class SearchBar extends Component {
    state = {
        term: "",
        order: ""
    };


    //* User hits enter on search
    onFormSubmit = event => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
    };

    //* Set the value of search bar
    handleChange = event => {
        const {name, value} = event.target;
        console.log(name, " - ", value)
        this.setState({
            [name]: value,
        });
    };


    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="search-bar-input">Video Search</label>
                        <input id="search-bar-input" name="term" type="text" value={this.state.term}
                               onChange={this.handleChange}/>
                        <button name="search" type="submit" onClick={this.onFormSubmit}>Search</button>
                        <label htmlFor="order">Order</label>
                        <select
                            name="order"
                            value={this.state.order}
                            onChange={this.handleChange}
                        >
                            <option value="">None</option>
                            <option value="relevance">Relevance</option>
                            <option value="date">Date</option>
                            <option value="rating">Rating</option>
                            <option value="title">Title</option>
                            <option value="videoCount">Video Count</option>
                            <option value="viewCount">View Count</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
