<script setup>
import { getYear, getIdFromUrl, getMovieImage } from "../../utils/helpers";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
  onClick: Function,
});

const emit = defineEmits(["onClick"]);

const onClick = () => {
  emit("onClick", getIdFromUrl(props.movie.url));
};

</script>

<template>
  <div class="bg-white shadow-2xl border rounded-md w-full cursor-pointer flex" v-on:click=onClick()>
    <img
      class="w-full h-64 object-cover rounded-t-md"
      :src="getMovieImage(movie.episode_id)"
    />
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-2">
        {{ movie.title }} ({{ getYear(movie.release_date) }})
      </h2>
      <p class="text-sm text-gray-700 mb-2">
        <span class="font-bold">Director:</span> {{ movie.director }}
      </p>
      <p class="text-sm text-gray-700 overflow-ellipsis text-justify">{{ movie.opening_crawl }}</p>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
