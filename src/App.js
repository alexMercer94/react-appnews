import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Form from './components/Form';

class App extends Component {
    state = {
        news: []
    };

    componentDidMount() {
        this.getNews();
    }

    /**
     * Consult news from API
     */
    getNews = async (category = 'general') => {
        const URL = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=1227179dcc51439ab68790381a9bca3b`;

        const response = await fetch(URL);
        const news = await response.json();

        this.setState({
            news: news.articles
        });
    };

    render() {
        return (
            <Fragment>
                <Header title="Noticias REACT API" />

                <div className="container white contenedor-noticias">
                    <Form getNews={this.getNews} />
                    <NewsList noticias={this.state.news} />
                </div>
            </Fragment>
        );
    }
}

export default App;
