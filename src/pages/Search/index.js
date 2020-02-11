import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

const Search = () => {
  const [state, setState] = useState({
    search: "Wikipedia",
    title: "",
    description: "",
    url: "",
    error: ""
  });
// }

/* class Search extends Component {
  state = {
    search: "Wikipedia",
    title: "",
    description: "",
    url: "",
    error: ""
  };
*/

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    API.searchTerms(state.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setState({
          title: res.data[1],
          description: res.data[2][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setState({ error: err.message }));
  }, []);

  const handleInputChange = event => {
    setState({ search: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!state.search) {
      return;
    }
    API.searchTerms(state.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setState({
          title: res.data[1],
          description: res.data[2][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setState({ error: err.message }));
  };
    return (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For Anything on Wikipedia</h1>
          <Alert type="danger" style={{ opacity: state.error ? 1 : 0, marginBottom: 10 }}>
            {setState.error}
          </Alert>
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={state.search}
          />
          <SearchResults
            title={state.title}
            description={state.description}
            url={state.url}
          />
        </Container>
      </div>
    );

}

export default Search;
