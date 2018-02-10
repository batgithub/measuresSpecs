<template>
  <div class="tree">
    <!-- <Folderlist v-for="folder in tree" :path="folder.path" :children="folder.children"></Folderlist> -->
    <li>{{ tree }}</li>
  </div>
</template>

<script>
import FoldersTree from '../services/FoldersTree'


export default {

  components: {

  },

  data () {
    return {
      tree: []
    }
  },

  mounted () {
    this.getTree('test2/')

  },

  methods: {
    async getTree (path) {
      const response = await FoldersTree.fetchFolders(path)
      this.tree = response.data
    }
  }
}
</script>
<style>
  li{
    margin-bottom: 24px;
  }
</style>
