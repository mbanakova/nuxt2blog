<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="">{{ loadedPost.updatedDate }}</div>
        <div class="">{{ loadedPost.author }}</div>
      </div>
      <p>{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis velit,
        voluptate illum consequuntur debitis eius. to
        <a href="mailto:test@test.com">mail to</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  layout: "default",
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: "1",
          author: "Me",
          updatedDate: new Date(),
          title: "The Tower of London (id: " + context.params.id + ")",
          content: "some dummy text",
          thumbnail:
            "https://avatars.mds.yandex.net/i?id=d4ae57cb191775e69710b6bd114ae98e-5234329-images-thumbs&ref=rim&n=33&w=276&h=188",
        },
      }),
        1000;
    });
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;

  @media (min-width: 768px) {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
