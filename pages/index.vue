<template>
  <div class="home-page">
    <section class="intro">
      <h1>get news</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  name: "IndexPage",
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
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/bg.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
}
</style>
