<template>
  <div class="tree">
    <div class="" v-for="folder in tree.childFoldersArray">
      {{ folder.folderName }}
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
      error: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:8081/folders/`)
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
