import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import API from "../../utils/API";
import ArticleContext from "../../context/ArticleContext";

function Search() {
  const [search, setSearch] = useState("Wikipedia");
  const [error, setError] = useState("");

  const [articleState, setArticleState] = useState({
    title: "",
    description: "",
    url: ""
  });

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";
    console.log(search);
    if (!search) {
      return;
    }

    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setArticleState({
          title: res.data[1],
          description: res.data[2][0],
          url: res.data[3][0]
        });
        /* setTitle(res.data[1]);
        setDescription(res.data[2][0]);
        setUrl(res.data[3][0]); */
      })
      .catch(err => setArticleState(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <ArticleContext.Provider value={articleState}>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={search}
        />
        <SearchResults title={articleState.title} description={articleState.description} url={articleState.url} />
      </Container>
    </ArticleContext.Provider>
  );
}

export default Search;
