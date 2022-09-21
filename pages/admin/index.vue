<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >create post</AppButton
      >
    </section>
    <section class="existing-posts">
      <h1>existing posts</h1>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import AppButton from "@/components/UI/AppButton";
export default {
  layout: "admin",
  components: {
    PostList,
    AppButton,
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
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
