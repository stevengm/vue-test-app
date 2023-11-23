<script setup>
import Tile from "../../components/Tile/Tile.vue";
import { onMounted, ref } from "vue";
import { get } from "../../services/api";
import { baseURL, apiRoutes } from "../../config/config";
import Sort from "../../components/Sort/Sort.vue";
import { getYear } from "../../utils/helpers";
import { useRouter } from "vue-router";

onMounted(() => {
  fetchData();
});

let films = ref({});

const router = useRouter();

const fetchData = () => {
  get(`${baseURL}${apiRoutes.films}`)
    .then((response) => {
      films.value = response.results;
    })
    .catch((error) => {
      error = error;
    });
};

const handleSortChange = (newSort) => {
  if (newSort.option === "year") {
    films.value.sort((a, b) => {
      return getYear(a.release_date) - getYear(b.release_date);
    });
  } else {
    films.value.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }
};

const handleMovieClick = (id) => {
  router.push(`/detail?id=${id}`);
};

</script>

<template>
  <div class="app">
    <h1 class="col-span-3 text-4xl font-bold text-center">
      Star Wars Movies History
    </h1>
    <div class="flex flex-row w-full justify-end mb-4">
      <Sort @onChange="handleSortChange" />
    </div>
    <div class="grid gap-x-2 gap-y-8 grid-cols-2">
      <Tile @onClick="handleMovieClick" v-for="(film, index) in films" :key="index" :movie="film" />
    </div>
  </div>
</template>
