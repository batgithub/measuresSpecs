<template lang="html">
  <div class="sidebar-header">
    <a :href="href">{{ titleLink }}</a>
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['href','titleLink', 'title']
}

</script>

<style lang="scss">
  .sidebar-header {
    display: flex;
    flex-direction: column;

    background: white;
    box-shadow: 0px 2px 1px rgba(black,0.1);
    padding: 1em 1em;

    a {
      display: flex;
      justify-content: flex-start;
      &::before {
        content: url('../../../assets/icon-back.svg');
        display: inline-block;
        vertical-align: middle;
      }
    }

    span {
      font-weight: 700;
      font-size: 1.5em;
    }
  }

</style>
