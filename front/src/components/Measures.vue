<template>
    <div class="specs-wrapper">
        <sidebar></sidebar>
        <content class="iframe">
            <iframe :src="src" width="100%" height="100%"></iframe>
        </content>
    </div>
</template>

<script>

import Sidebar from './measures/Sidebar'

export default {
  props: ['src'],
  components: {
    Sidebar
  }
}
</script>

<style lang="css">
.specs-wrapper {
position: fixed;
display: flex;
width: 100%;
height: 100vh;

}
.iframe {
    height: 100%;
    width: 100%;
    background: #191919;
}
</style>
