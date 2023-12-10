<template>
  <v-col cols="12" md="6" lg="4">
    <v-card :key="user.id" class="card-box">
      <v-card-text>
        <router-link :to="`/user/${user.id}`" class="card-box__image">
          <v-img :src="`https://i.pravatar.cc/300?img=${user.id}`"/>
        </router-link>
      </v-card-text>
      <v-card-title class="card-box__title">
        {{ user.name }}
      </v-card-title>
      <v-card-text class="links-container">
        <router-link :to="`/user/${user.id}/posts`" class="links-container__link">See posts</router-link>
        <router-link :to="`/user/${user.id}/albums`" class="links-container__link">See albums</router-link>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-box {
  max-width: 100%; 
  margin: 0 auto; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

  .card-box__image {
    width: 100%; 
    height: auto; 
  }

  .card-box__title {
    margin-top: 10px; 
  }

  .links-container {
    display: flex;
    justify-content: space-between; 
    margin-top: 10px; 

    &__link {
      color: #007BFF; 
    }
  }
}
</style>
