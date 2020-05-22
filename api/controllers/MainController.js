const fetchNews = async (req, res) => {
    try {
        const queryString = req.body.queryString;

        if (!queryString) {
            res.badRequest({
                success: false,
                message: "Input values are not set",
                data: {},
                error_code: 404
            });
        }

        const news = await News.fetchEverything(queryString);
        if (news) {
            res.ok({
                success: true,
                message: `Fetching the news with keyword ${queryString}`,
                data: news,
            });
        }
    } catch (err) {
        console.log(err);
        res.badRequest({
            success: false,
            message: "News could not be fetched",
            data: {},
            error_code: 404
        });
    }
};

module.exports = { fetchNews }