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
    align-items: flex-start;

    background: white;
    box-shadow: 0px 2px 1px rgba(black,0.1);
    padding: 1em 1em;

    a {
      display: block;
      &::before {
        content: url('../../../assets/icon-back.svg');
        display: inline-block;
        vertical-align: 10%;
        margin-right: .5em;
      }
    }

    span {
      font-weight: 700;
      font-size: 1.5em;
    }
  }

</style>
