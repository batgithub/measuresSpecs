<template>
  <div class="tree">
    <div class="" v-for="folder in tree.childFoldersArray">
      <a :href=urlPath+folder.folderName>{{ folder.folderName }}</a>
      {{error.message}}

    </div>
  </div>
</template>

<script>
// import FoldersService from '@/services/FoldersService'
import axios from 'axios';

export default {
  data () {
    return {
      tree: [],
      error: [],
      urlPath:''
    }
  },

  mounted() {
    var urlPath = this.$route.path
    this.urlPath = urlPath
    var backPath = "http://localhost:8081/folders"+ urlPath
    axios.get(backPath)
    .then(response => {
      // JSON responses are automatically parsed.
      this.tree = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>
<style>
  li{
    margin-bottom: 24px;
  }
</style>
