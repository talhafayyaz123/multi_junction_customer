<template lang="html">
    <ul class="ps-list--blog-links">
        <li class="active">
           
            <nuxt-link to="/blog">
                <a @click='getBlog("all")'>All</a>
            </nuxt-link>
        </li>
        <li v-for='item in categories' >
            <a @click='getBlog(item.id)'>
            {{item.category_name}}
            </a>
        </li>
       
       
    </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'BlogLinks',
    computed: {
        ...mapState({
            categories: state => state.blog.categories
        })
    },
    methods:{
        getBlog(id){
        this.$store.dispatch('blog/getCategoryBlogs',id)
        }
    },
    
};
</script>

<style lang="scss" scoped></style>
