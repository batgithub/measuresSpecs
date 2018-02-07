<template>
  <div>
    <h1>Les features</h1>
    <li v-for="folder in tree ">{{ folder.path}}</li>
    <li>{{ folders.length  }}</li>
  </div>
</template>

<script>
import FoldersTree from '../services/FoldersTree'
export default {
  data () {
    return {
      tree: [],
      folders: []
    }
  },
  mounted () {
    this.getTree()

  },
  methods: {
    async getTree () {
      const response = await FoldersTree.fetchFolders()
      this.folders = response.data.children
      this.tree = response.data.children
    }
  }
}
</script>
<style>
  li{
    margin-bottom: 24px;
  }
</style>
