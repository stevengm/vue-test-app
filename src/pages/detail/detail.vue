<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { get } from "../../services/api";
import { getMovieImage } from "../../utils/helpers";
import { baseURL, apiRoutes } from "../../config/config";
import Loading from "../../components/Loading/Loading.vue";

onMounted(() => {
  fetchData();
});

const route = useRoute();

let film = ref({});

const fetchData = () => {
  get(`${baseURL}${apiRoutes.films}${route.query.id}`)
    .then((response) => {
      film.value = response;
    })
    .catch((error) => {
      error = error;
    });
};

const getEpisodeNumber = (id) => {
  const romanNumbers = ["I", "II", "III", "IV", "V", "VI"];
  return `Episode ${romanNumbers[id - 1]}`;
};
</script>
<template>
  <div class="bg-gray-100" v-if="film.title">
    <div class="bg-white rounded shadow">
      <div class="grid grid-cols-2 gap-2">
        <div class="flex flex-col justify-center"></div>
      </div>
      <section class="star-wars">
        <div class="crawl">
          <div class="title">
            <p>{{ getEpisodeNumber(route.query.id) }}</p>
            <h1>{{ film.title }}</h1>
          </div>
          <p>{{ film.opening_crawl }}</p>

          <p class="mb-4">{{ film.director }}</p>

          <p class="mb-4">{{ film.producer }}</p>
          
          <p class="mb-4">{{ film.release_date }}</p>

          <p>
            <img class="flex justify-center" :src="getMovieImage(film.episode_id)" />
          </p>
        </div>
      </section>
    </div>
  </div>
  <div v-else class="flex h-screen w-screen items-center">
    <Loading message="Getting things ready" />
  </div>
</template>
