<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
};
</script>

<style lang="scss" scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;

  @media (min-width: 768px) {
    width: 500px;
  }
}
</style>
