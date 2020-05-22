const API_KEY = '46951f94eef54fb09ff5ad9a2f58fc62';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(API_KEY);

const fetchEverything = async (queryString) => {
    const news = await newsapi.v2.everything({
        q: queryString ,
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk,techcrunch.com',
        // from: '2017-12-01',
        // to: '2017-12-12',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
    });
    return news;
};

module.exports = {
    fetchEverything
};
