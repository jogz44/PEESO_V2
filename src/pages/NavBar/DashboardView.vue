<template>
  <div>
    <div class="row">
      <div class="scrollable-container col-9 col-md-9 col-sm-12 col-xs-12">
        <story-list></story-list>
        <div style="display: flex; justify-content: center; ">
          <job-posting class="sizes"></job-posting>
        </div>
      </div>
      <div
        class="scrollable-container col-3 col-md-3 col-sm-3"
        v-if="$q.screen.gt.xs"
      >
        <!-- <q-card
          class="q-pa-sm text-h6 q-ma-md text-white "
          style="background-color: #06372c; margin-top: 25px"
          >Announcement</q-card
        > -->
        <announcement-page style="margin-top: 25px; margin-right: 5%;"></announcement-page>
      </div>
    </div>
  </div>
</template>

<script>
import StoryList from "../EmpPicture.vue"; // Adjust the import path as necessary
import JobPosting from "../Job/JobPosting.vue";
import AnnouncementPage from "../AnnouncementPage.vue";
export default {
  name: "MainLayout",
  components: {
    StoryList,
    JobPosting,
    AnnouncementPage,
  },
};
</script>
<style scoped>
.sizes {
  width: 80%;
}
.row {
  display: flex;
  justify-content: center;
}
.scrollable-container {
  max-height: 93vh;
  overflow-y: auto;
  /* Custom scrollbar */
  scrollbar-width: none; /* For Firefox */
}

/* Custom scrollbar for WebKit browsers */
.scrollable-container::-webkit-scrollbar {
  width: 5px;
}

.scrollable-container::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>
