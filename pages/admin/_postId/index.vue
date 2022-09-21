<template>
  <div class="admin-post-page">
    <section class="update-post">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: "Max",
        title: "cool",
        thumbnail:
          "https://www.discoverbritainmag.com/wp-content/uploads/2019/01/tower-of-london-ext.jpeg",
        content: "lorem ipsum",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
  @media (min-width: 768px) {
    width: 500px;
  }
}
</style>
