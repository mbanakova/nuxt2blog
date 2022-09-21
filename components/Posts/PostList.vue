<template>
  <section class="featured-posts">
    <PostPreview
      :is-admin="isAdmin"
      id="1"
      thumbnail="https://www.discoverbritainmag.com/wp-content/uploads/2019/01/tower-of-london-ext.jpeg"
      title="Tower of London"
      previewText="The Tower of London has a long, eventful history. Established in 1066 by William the Conqueror "
    />
    <PostPreview
      :is-admin="isAdmin"
      id="2"
      thumbnail="https://www.discoverbritainmag.com/wp-content/uploads/2019/01/tower-of-london-ext.jpeg"
      title="Tower of London"
      previewText="The Tower of London has a long, eventful history. Established in 1066 by William the Conqueror "
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
