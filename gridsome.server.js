// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const GistApi = require('./src/api/gist')

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const collection = addCollection('news')
    GistApi.list().then((response) => {
      let result = response.data
      if (!result || result.length == 0) {
        this.loading = false
        return
      }
      for (let key in result[0].files) {
        this.blog.id = result[0]['id']
        break
      }
      GistApi.single(this.blog.id).then((response) => {
        let result = response.data

        for (let key in result.files) {
          collection.addNode({
              title: key,
              // content: this.$markdown(result.files[key]['content']),
              description: description,
              // createTime:
            })
            // this.blog['title'] = key
            // this.blog['content'] = this.$markdown(result.files[key]['content'])
            // this.blog['description'] = result['description']
            // this.blog['createTime'] = this.$util.utcToLocal(result['created_at'])
            // this.blog['updateTime'] = this.$util.utcToLocal(result['updated_at'])
            // break
        }
      })
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

}