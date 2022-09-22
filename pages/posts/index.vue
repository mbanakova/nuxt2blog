<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList,
  },
  computed: mapGetters(["loadedPosts"]),
};
</script>

<style lang="scss" scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
