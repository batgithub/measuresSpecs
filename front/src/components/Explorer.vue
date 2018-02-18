<template>
  <div class="tree">
    <div v-if="tree.iAmASpec === true">
      <measures :src="'../../../static'+urlPath.slice(2)+tree.theFolder+'/index.html'"></measures>
    </div>
    <div v-else>
      <div class="" v-for="folder in tree.childFoldersArray">
          <li><a :href="urlPath+folder.folderName+'/'">{{ folder.folderName }}</a></li>
        {{error.message}}
      </div>
    </div>
  </div>
</template>

<script>
// import FoldersService from '@/services/FoldersService'
import axios from 'axios';
import Measures from './Measures';

export default {
  components: {
    Measures
  },
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
    var backPath = "http://localhost:8081"+ urlPath

    axios.get(backPath)
    .then(response => {
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
