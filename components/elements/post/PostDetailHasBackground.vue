<template>
    <div class="ps-post--detail ps-post--parallax">
        <div class="ps-post__header bg--cover">
            <div class="container">
                
                <h4>{{category}}</h4>
               
                <h1>
                   {{post.meta_title}}
                </h1>
                <p> {{post.created_at | formatDate }}</p>
            </div>
        </div>
        <div class="container">
            <div class="ps-post__content">
               
                <p>
                   {{post.short_description}}
                </p>
                <blockquote class="ps-blockquote">
                    <p>
                       {{post.meta_description}}
                    </p>
                    <span class="ps-blockquote__author">JELLY CRISTIANA</span>
                </blockquote>
              
                <div class="row">
                   
                    
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <img
                            class="mb-30"
                            :src="`${post.meta_img}`"
                            alt="martfury"
                        />
                    </div>
                </div>
              
                 {{post.description}}
            </div>
            <div class="ps-post__footer">
                <p class="ps-post__tags">
                    Tags:  {{post.meta_keywords}}
                </p>
                <div class="ps-post__social">
                    <a class="facebook" href="#">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a class="twitter" href="#">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a class="google" href="#">
                        <i class="fa fa-google-plus"></i>
                    </a>
                    <a class="linkedin" href="#">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <a class="pinterest" href="#">
                        <i class="fa fa-pinterest"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostDetailHasBackground',
     data() {
        return {
            post:[],
            category:null
        };
    },
    mounted(){
     let blogs= this.$store.getters['blog/getBlogs'];     
       this.post=blogs.blogs.data.find(blog => blog.slug === this.$route.params.id);
       
       let blogCategory=this.$store.state.blog.categories.find(cat => cat.id ===this.post.category_id);
      this.category=(blogCategory.category_name);

    }
};
</script>

<style lang="scss" scoped>
.ps-post--parallax {
    .ps-post__header {
        background-image: url('/img/bg/blog-detail.jpg');
    }
}
</style>
