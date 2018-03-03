<template>
  <div class="explorer">
    <div v-if="isPreview === true">
      <MeasuresView :src="'../../../static'+urlPath.slice(9)+folderToPreview+'/'+tree.theFolder+'/index.html'"></MeasuresView>
    </div>
    <div v-else>
      <nav>
        <a href="/e/" class="link-title">Measures</a>
        <span class="separator" v-if="pathName !=''">
          <img src="../assets/separator.svg" alt="">
        </span>
        <span class="title">{{ pathName }}</span>
      </nav>
      <div class="container">
        <div class="folders">
          <div class="folder-wrapper" v-for="folder in tree.childFoldersArray">
            <a class="" v-if="folder.isSpec === true" :href="urlPath+'?preview='+folder.folderName">
              <div v-bind:class="{folder, specs:folder.isSpec}">
                {{ folder.folderName }}.spec
              </div>
              {{errors.message}}
            </a>
            <a class="" v-if="folder.isSpec === false" :href="urlPath+folder.folderName+'/'">
              <div v-bind:class="{folder, specs:folder.isSpec}">
                {{ folder.folderName }}
              </div>
              {{errors.message}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/services/api'
import MeasuresView from './measures/MeasuresView';

export default {
  components: {
    MeasuresView
  },
  data () {
    return {
      tree: [],
      errors: [],
      isPreview: '',
      folderToPreview: '',
      urlPath:'',
      pathName:''

    }
  },

  mounted() {

    var queryURL = this.$route.query
    var folderToPreview = queryURL.preview
    var pathName = this.$route.path.slice(9,-1)
    this.pathName = pathName



    if ( Object.keys(queryURL).length > 0) {
      this.isPreview = true
      this.folderToPreview = folderToPreview
    } else if(Object.keys(queryURL).length === 0){
      this.isPreview = false
      folderToPreview = ''
    } else {
      this.isPreview = false
    }


    var urlPath = this.$route.path
    this.urlPath = urlPath
    var backPath = urlPath + folderToPreview +"/"
    console.log(backPath);

    Api().get(backPath)
    .then(response => {
      this.tree = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>


<style lang="scss">

@import './general.scss';


nav {
  background: white;
  padding: 1.5em 2em;
  font-size: 1.3em;
  border-bottom: 1px solid $gray-100;
  .link-title {
    text-decoration: none;
    color: $gray-500;

    &:hover {
      text-decoration: underline;
    }
  }
  .separator {
    margin: 0 .5em;
  }
  .title {
    font-weight: $font-bold;
  }
}



.folders{
  display: flex;
  justify-content:space-between;
  flex-wrap:wrap;
  margin-top: 2em;
}


.folder-wrapper {

  box-sizing: border-box;
  padding: 1em 1em;
  margin: 0.5em;
  width: calc(50% - 1em);

  background: white;
  border: 1px solid $gray-100;
  border-radius: 5px;
  align-items: center;

  a {
    font-size: 1.3em;
    color:$gray-500;
    text-decoration: none;

  }

  .folder {
    &::before {
      content: url('../assets/folder-icon.svg');
      display: inline-block;
      vertical-align: middle;
      margin-right: .5em;
    }
  }

  .folder.specs {
    &::before {
      content: url('../assets/folder-icon-specs.svg')!important;
    }
  }
}
</style>
