<template>
    <Layout>
        <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="margin-bottom: 20px">
            <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
            <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
            <el-button @click="$share()" icon="el-icon-share" type="warning" style="margin-left: 10px" plain circle></el-button>
        </el-card>

        <div v-if="this.$page.projects.edges&&this.$page.projects.edges.length>0">
            <el-card shadow="hover" v-for="(item,index) in this.$page.projects.edges" :key="'pro'+index" style="margin-bottom: 20px" v-if="!item.node.hide">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <a style="text-decoration:none;cursor:pointer" @click="goDetails(item.node.name)">
                                    <i class="el-icon-service"></i>&nbsp;&nbsp; {{item.node.name}}
                                </a>
                            </span>
                        </el-col>
                        <el-col :span="8">
                            <div style="text-align: right;">
                                <el-button @click="goGithub(item.node.html_url)" style="padding: 3px 0" type="text" icon="el-icon-back">前往GitHub</el-button>
                                <el-button @click="$share('/details/'+item.node.name)" style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新 {{item.node.updated_at}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                    {{item.node.description}}
                </div>
                <div style="font-size: 1.1rem;color: #303133;padding: 10px 0px 0px 0px">
                    <el-row>
                        <el-col :span="16" style="padding-top: 5px">
                            <el-tooltip effect="dark" :content="'star '+item.node.stargazers_count" placement="bottom">
                                <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
                            </el-tooltip>
                            {{item.node.stargazers_count}}
                            <el-tooltip effect="dark" :content="'watch '+item.node.watchers_count" placement="bottom">
                                <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
                            </el-tooltip>
                            {{item.node.watchers_count}}
                            <el-tooltip effect="dark" :content="'fork '+item.node.forks_count" placement="bottom">
                                <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
                            </el-tooltip>
                            {{item.node.forks_count}}
                        </el-col>
                        <el-col :span="8" style="text-align: right;">
                            <el-tag size="small" type="danger" v-if="item.node.license">{{item.node.license.spdx_id}}</el-tag>
                            <el-tag size="small" type="success">{{item.node.language}}</el-tag>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
            <div style="text-align: center">
                <!-- <el-pagination @current-change="onSelect" background layout="prev, pager, next" :current-page.sync="$page.projects.pageInfo.currentPage" :page-size="5"
                    :total="$page.projects.pageInfo.totalPage*5">
                </el-pagination> -->
                <el-pagination @current-change="onSelect" background layout="prev, pager, next" :current-page.sync="$page.projects.pageInfo.currentPage"
                                    :page-size="6" :total="6*$page.projects.pageInfo.totalPages">
                                </el-pagination>
            </div>
        </div>

        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!$page.projects.edges||$page.projects.edges.length==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </div>
    </Layout>
</template>

<page-query>
query($page: Int) {
  projects :allRepos (perPage: 5, page: $page) @paginate {
    pageInfo {
      currentPage
      totalPages
    }
    edges {
      node {
        id
        name
        html_url
        description
        stargazers_count
        watchers_count
        forks_count
        language
        license {
          spdx_id
        }
        created_at
        updated_at
      }
    }
  }
}
</page-query>

<script>
export default {
    name: 'project',
    data() {
        return {
            loading: false,
            searchKey: ''
        };
    },
    created() {

    },
    mounted() {
    },
    methods: {
        search() {
            for (let i = 0; i < this.$page.projects.edges.length; i++) {
                this.$page.projects.edges[i].node.hide = this.$page.projects.edges[i].node.name.indexOf(this.searchKey) < 0
            }
            this.$forceUpdate()
        },
        goDetails(name) {
            this.$router.push("/user/project/details/" + name)
        },
        goGithub(url) {
            window.open(url)
        },
        onSelect(page) {
            if(page !== 1){
                this.$router.push(`/user/project/${page}`)
                this.$page.projects.pageInfo.currentPage = page
            } else {
                this.$router.push(`/user/project`)
                this.$page.projects.pageInfo.currentPage = 1
            }
        }
    }
};
</script>

<style scoped lang="less">

</style>
