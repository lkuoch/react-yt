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
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="field">
                        {/*<label htmlFor="search-bar-input">Video Search</label>*/}
                        <input name="term" type="text" value={this.state.term}
                               onChange={this.handleChange}/>
                        <button className="button" type="submit" onClick={this.onFormSubmit}>Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
