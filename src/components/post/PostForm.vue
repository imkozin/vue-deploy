<template>
  <v-container class="form-container">
    <v-row class="flex-column mx-auto" >
      <v-text-field solo dense label="Title" v-model="title" />
      <v-textarea v-model="body" solo name="input-7-4" label="Your Post"></v-textarea>
      <v-btn @click="submitPost">Add Post</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: ''
    };
  },
  props: {
    id: {
        type: String,
        required: true
    }
  },
  methods: {
    submitPost() {
      let post = {
        id: Date.now(),
        title: this.title,
        body: this.body,
        userId: this.id
      };
      this.$store.dispatch('addPost', post);
      this.title = '';
      this.body = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  max-width: 70%;
  margin-bottom: 20px;
}
</style>
