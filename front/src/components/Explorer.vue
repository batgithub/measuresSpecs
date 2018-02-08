<template>
  <div class="tree">
    <!-- <Folderlist v-for="folder in tree" :path="folder.path" :children="folder.children"></Folderlist> -->
    <li>{{ tree }}</li>
  </div>
</template>

<script>
import FoldersTree from '../services/FoldersTree'
import Folderlist from './Folderlist'

export default {

  components: {
    Folderlist
  },

  data () {
    return {
      tree: [],
      test: []
    }
  },

  mounted () {
    this.getTree()

  },

  methods: {
    async getTree () {
      const response = await FoldersTree.fetchFolders()
      this.tree = response.data
      console.log(this.tree);

      for (var i=0; i < this.tree.length; i++){
        return data.path;
      }

    }
  }
}
</script>
<style>
  li{
    margin-bottom: 24px;
  }
</style>
