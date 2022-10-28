<template>
  <li
    class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50 example"
    :class="`song-id-${song.docId}`"
  >
    <div>
      <RouterLink
        :to="{ name: 'song', params: { id: song.docId } }"
        class="font-bold block text-gray-600 composition-name"
        >{{ song.modified_name }}</RouterLink
      >
      <span class="text-gray-500 text-sm">
        {{ song.display_name }}
      </span>
    </div>

    <div class="text-gray-600 text-lg">
      <RouterLink
        custom
        :to="{ name: 'song', params: { id: song.docId }, hash: '#comments' }"
        v-slot="{ navigate }"
      >
        <span class="comments">
          <i class="fa fa-comments text-gray-600" @click="navigate"></i>
          {{ song.comment_count }}
        </span>
      </RouterLink>
    </div>
  </li>
</template>

<script>
export default {
  name: "SongItem",
  props: ["song"],
};
</script>
