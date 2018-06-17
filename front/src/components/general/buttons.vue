<template lang="html">
  <a :href='link' :class='classesName'>{{ label }}</a>
</template>

<script>
export default {
  props: ['link','classesName','label']
}
</script>

<style lang="scss">
  @import '../general.scss';
  a.button {
    padding: .8em 1em;
    border-radius: $radius;
  }

  a.button.default {
    background: $gray-500;
    color: white;
    transition: .3s;
    &:hover {
      text-decoration: none;
      background: lighten($gray-500, 10);
    }
  }

  a.button.primary {
    background: $blue-600;
    color: white;
    transition: .3s;
    &:hover {
      text-decoration: none;
      background: lighten($blue-600, 10);
    }
  }
</style>
