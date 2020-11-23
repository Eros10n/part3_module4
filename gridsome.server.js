// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// import request from '@/utils/request'

module.exports = function(api) {
    api.loadSource(({ addCollection }) => {
        // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
        // const collection = addCollection('Post')

        // const { data } = await axios.get('https://api.example.com/posts')

        // for (const item of data) {
        //     collection.addNode({
        //         id: item.id,
        //         title: item.title,
        //         content: item.content
        //     })
        // }
    })

    api.createPages(({ createPage }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })
}