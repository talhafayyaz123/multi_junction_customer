<template lang="html">
    <div class="ps-blog">
        <div class="ps-blog__header">
            <BlogLinks />
        </div>
        <div class="ps-blog__content">
            <div class="row">               
               <template v-if='blogs.blogs'>
                <div 
                    v-for="post in blogs.blogs.data"
                    class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                    :key="post.id"
                >
                    <PostGrid :post="post" />
                </div>
                </template>
            </div>
            <Pagination />
        </div>
    </div>
</template>

<script>
import Pagination from '../../elements/Pagination';
import BlogLinks from './modules/BlogLinks';
import { posts } from '~/static/data/blog-grid.json';
import PostGrid from '../../elements/post/PostGrid';
import { mapState } from 'vuex';

export default {
    name: 'BlogGrid',
    components: { PostGrid, BlogLinks, Pagination },
    data() {
        return {
            blogGridPosts:posts
        };
    },
        async fetch() {
         const reponse = await this.$axios.get(`customer/fetchBlogCategories`)
            .then(response => {
                 const blogs =response.data.data.blogs
                 this.$store.commit('blog/setCategories', blogs)
            })
            .catch(error => ({ error: JSON.stringify(error) }));
              
    },
    computed:{
        ...mapState({
         blogs: state => state.blog.categoryBlogs
        })
        
    },
    created(){
        this.$store.dispatch('blog/getCategoryBlogs','all')
    }
};
</script>

<style lang="scss" scoped></style>