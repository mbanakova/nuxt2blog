<template>
  <nuxt-link :to="postLink">
    <article class="post-preview">
      <div class="post-thumbnail">
        <img :src="thumbnail" />
      </div>

      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: $white;
}

a {
  text-decoration: none;
  color: black;
  display: block;
}

.post-thumbnail {
  background-position: center;
  background-size: cover;

  & img {
    width: 100%;
  }
}

.post-content {
  text-align: center;
  padding: 20px;
}

h1 {
  margin: 0 0 20px;
}

p {
  margin: 0;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
