<template>
    <Layout>
        <div v-loading="loading">
        <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;">
            <div slot="header" class="clearfix">
                <span>{{githubUsername}}</span>
                <el-button @click="$router.go(-1)" style="float: right; padding: 3px 0" type="text" icon="el-icon-d-arrow-left">返回</el-button>
            </div>
            <el-row>
                <el-col :span="9" style="padding: 0px 10px 20px 0px">
                    <img :src="avatarUrl" style="width: 100%;border-radius:5px;">
                    <div style="padding: 10px">
                        <font style="font-size: 26px;line-height: 40px;font-weight: 600">{{name}}
                            <br>
                        </font>
                        <font style="font-size: 20px;font-style: normal;font-weight: 300;line-height: 35px;color: #666;">{{githubUsername}}
                            <br>
                        </font>
                        <font style="font-size: 14px;line-height: 20px;color:#606266;" v-if="location">
                            <i class="el-icon-location-outline"></i>&nbsp;&nbsp;{{location}}
                            <br>
                        </font>
                        <font style="font-size: 14px;line-height: 20px;color:#606266;" v-if="email">
                            <i class="el-icon-message"></i>&nbsp;&nbsp;{{email}}
                            <br>
                        </font>
                        <font style="font-size: 14px;color:#606266;" v-if="blog">
                            <i class="el-icon-edit-outline"></i>&nbsp;&nbsp;
                            <a :href="$util.addHttp(blog)" target="_blank">{{blog}}</a>
                            <br>
                        </font>
                    </div>

                </el-col>
                <el-col :span="15" style="padding: 0px 20px 20px 10px">
                    <div style="width: 100%;min-height: 300px; border-radius:5px; border: 1px solid #EBEEF5;padding: 10px;font-size: 16px;
                    color: #6a737d;" v-if="bio">
                        {{bio}}
                    </div>
                    <div style="width: 100%;min-height: 300px; border-radius:5px; border: 1px solid #EBEEF5;padding: 30px;text-align: center;
                    font-size: 30px;color:#dddddd" v-else>
                        <b>◔ ‸◔？没有简介</b>
                    </div>
                </el-col>
            </el-row>

        </el-card>
    </div>
    </Layout>
</template>

<script>
import axios from 'axios'
export default {
    data() {
            return {
                loading: false,
                githubUsername: this.$route.params.name,
                name: null,
                avatarUrl: null,
                htmlUrl: null,
                blog: null,
                location: null,
                email: null,
                bio: null,
                followers: null,
                following: null,
                publicRepos: null
            }
    },
    created() {

    },
    mounted() {
        this.getDetail(this.$route.params.id)
        console.log(this.$route.prams.id)
    },
    methods: {
        async getDetail(params) {
            this.loading = true
            try {
                const { data } = await axios.get(`https://api.github.com/users/${params}`)
                for (let key in data) {
                    this.name = data["name"]
                    this.avatarUrl = data["avatar_url"]
                    this.htmlUrl = data["html_url"]
                    this.blog = data["blog"]
                    this.location = data["location"]
                    this.bio = data["bio"]
                    this.email = data["email"]
                    this.followers = data["followers"]
                    this.following = data["following"]
                    this.publicRepos = data["publicRepos"]
                    break
                }
                this.loading = false                
            } catch (error) {
                this.loading = false
                this.$message({
                    message: error.message,
                    type: "error",
                });
            }
        },

    }
};
</script>

<style scoped lang="less">

</style>
