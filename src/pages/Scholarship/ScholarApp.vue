<template>
  <div class="scholar-card">
    <p class="title">MY SCHOLARSHIP APPLICATIONS</p>
    <q-separator class="q-ma-md" inset />
    <div class="" style="justify-content: center; flex-wrap: wrap">
      <q-list
        class="rounded-borders"
        style="max-width: 100%"
        v-for="job in scholarship"
        :key="job.id"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img :src="job.Image" alt="Profile Picture" />
            </q-avatar>
          </q-item-section>

          <q-item-section
            @click="$router.push({ path: '/ScholarshipDetails' })"
          >
            <q-item-label lines="1">{{ job.ScholarSponsor }}</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">{{ job.ScholarTitle }}</span>
            </q-item-label>
            <q-item-label caption lines="3">
              <span class="">{{ job.ScholarDesc }}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>{{ job.DatePosted }} </q-item-section>
        </q-item>

        <q-separator inset="item" />
      </q-list>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      scholarship: [], // This should be initialized here, not users
      page: 1,
      limit: 10, // Number of records per request
      hasMore: true, // To check if more data is available
      loading: false, // To prevent multiple simultaneous requests
    };
  },
  methods: {
    async loadMoreUsers() {
      if (this.loading) return;
      this.loading = true;

      try {
        const response = await axios.get(
          `https://marj28.github.io/job-listing-api/scholarship.json`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        console.log("Response Data:", response.data); // Log the response data
        // Extract the jobs array from the response
        const newJobs = response.data.scholarship;

        this.scholarship = this.scholarship.concat(newJobs); // Append new jobs to the existing list
        this.page++;
        this.hasMore = newJobs.length === this.limit;
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.loadMoreUsers();
  },
};
</script>
<style scoped>
.title {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px 10px 10px 10px;
  background-color: #06372c;
  color: white;
}
.scholar-card {
  max-width: 80%;
  margin: auto;
  margin-top: 2%;
  border-radius: 5px;
  overflow: hidden;
}
</style>
