// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function(api) {
    api.loadSource(async({ addCollection }) => {
        // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
        const news = addCollection('news')
        const article = addCollection('article')
        const { data } = await axios.get('https://api.github.com/users/GitHub-Laziji/gists')

        let info = [...data]
        for (const item of info) {
            let id = ""
            for (let key in item.files) {
                item.files = {
                    ...item.files[key],
                }
                break
            }
            news.addNode({...item })
        }
    })

    api.createPages(({ createPage }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })

}