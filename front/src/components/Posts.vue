<template>
  <div class="posts">
    <span><b>{{ posts.title }}</b></span><br />
    <span>{{ posts.description }}</span>
  </div>
</template>

<script>

import PostsService from '../services/PostsService'
export default {

  name: 'posts',
  data () {
    return {}
  },
  data () {
    return {
        posts: []
    }
  },
  mounted () {
      this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data
    }
  }
}
</script>
