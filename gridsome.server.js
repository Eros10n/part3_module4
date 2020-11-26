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
        const followers = addCollection('followers')
        const followings = addCollection('followings')
        const users = addCollection('users')
        const [articles, follows, userInfo, myFollowing] = await Promise.all([
            axios.get('https://api.github.com/users/GitHub-Laziji/gists'),
            axios.get('https://api.github.com/users/GitHub-Laziji/followers'),
            axios.get('https://api.github.com/users/GitHub-Laziji'),
            axios.get('https://api.github.com/users/GitHub-Laziji/following'),
        ])


        // 把文章注入进去
        let info = [...articles.data]
        for (const item of info) {
            for (let key in item.files) {
                item.files = {
                    ...item.files[key],
                }
                break
            }
            news.addNode({...item })
        }
        // 把followers注入进去
        for (const item of follows.data) {
            followers.addNode({...item })
        }
        // 把关注的人注入进去
        for (const item of myFollowing.data) {
            followings.addNode({...item })
        }
        // 把用户信息注入
        users.addNode({...userInfo.data })
    })

    api.createPages(({ createPage }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })

}