<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            thumbnail:
              "https://avatars.mds.yandex.net/i?id=d4ae57cb191775e69710b6bd114ae98e-5234329-images-thumbs&ref=rim&n=33&w=276&h=188",
            title: "The Tower of London",
            previewText:
              "His Majesty's Royal Palace and Fortress of the Tower of London",
          },
          {
            id: "2",
            thumbnail:
              "https://avatars.mds.yandex.net/i?id=d4ae57cb191775e69710b6bd114ae98e-5234329-images-thumbs&ref=rim&n=33&w=276&h=188",
            title: "The Tower of London",
            previewText:
              "His Majesty's Royal Palace and Fortress of the Tower of London",
          },
        ],
      });
    }, 2000);
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
