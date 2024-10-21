<template>
  <div class="profile-card">
    <q-card-section
      style="
        background-color: #06372c;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      "
      class="text-white"
    >
      <q-btn
        flat
        style="text-align: left"
        class=""
        icon="arrow_back"
        @click="$router.push({ path: '/Main' })"
      ></q-btn>
    </q-card-section>
    <div class="profile-container">
      <div class="profile-avatar">
        <q-avatar class="avatar">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </div>
      <div class="profile-details" style="margin-bottom: -20px">
        <h2 class="title" style="margin-bottom: -10px"><b>John Doe </b></h2>
        <p class="title">Web Development, JavaScript, CSS, HTML</p>
        <br />
        <br />
        <p style="margin-bottom: -10px; margin-top: 20px; font-weight: 500">
          SALARY
        </p>
        <p>P 10,000 / month</p>
        <p style="margin-bottom: -10px; margin-top: -2px; font-weight: 500">
          EDUCATION
        </p>
        <p>College Level</p>
        <p style="margin-bottom: -10px; margin-top: -2px; font-weight: 500">
          SKILLS
        </p>
        <p>Programming , Technical</p>
      </div>
      <div>
        <q-btn
          style="margin-top: 295px"
          outline
          rounded
          color="warning"
          label="Edit Profile"
          icon="edit"
          @click="$router.push({ path: '/Profile' })"
        />
      </div>
    </div>
  </div>
  <div class="row skill-card">
    <div class="col-12 col-sm-6 col-md-6 col-lg-6">
      <q-card class="q-ma-sm">
        <q-card-section style="background-color: #06372c; color: white"
          >BOOKED MARK JOB POSTS</q-card-section
        >
        <q-separator />
        <q-table
          class="my-sticky-header-table"
          flat
          dense
          :rows="limitedRows"
          wrap-cells
          :columns="columns"
          row-key="name"
          hide-bottom
        />
      </q-card>
    </div>
    <div class="col-12 col-sm-6 col-md-6 col-lg-6">
      <q-card class="q-ma-sm">
        <q-card-section style="background-color: #06372c; color: white"
          >EMPLOYERS</q-card-section
        >
        <q-separator />
        <q-table
          class="my-sticky-header-table"
          flat
          :rows="limitedRowsEmployers"
          wrap-cells
          dense
          :columns="columnEmployer"
          row-key="name"
          hide-bottom
        />
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rows: [
        { name: "John Doe", age: 30, job: "Developer" },
        { name: "Jane Smith", age: 28, job: "Designer" },
        { name: "Michael Johnson", age: 32, job: "Manager" },
        { name: "Sarah Connor", age: 29, job: "Analyst" },
        { name: "Chris Evans", age: 35, job: "Engineer" },
        { name: "Emma Watson", age: 27, job: "Actress" },
        { name: "Robert Downey", age: 45, job: "Actor" },
        // Add more rows as needed
      ],
      rowEmployers: [
        { name: "John Doe", age: 30, job: "Developer" },
        { name: "Jane Smith", age: 28, job: "Designer" },
        { name: "Michael Johnson", age: 32, job: "Manager" },
        { name: "Sarah Connor", age: 29, job: "Analyst" },
        { name: "Chris Evans", age: 35, job: "Engineer" },
        { name: "Emma Watson", age: 27, job: "Actress" },
        { name: "Robert Downey", age: 45, job: "Actor" },
      ],
      columnEmployer: [
        {
          name: "age",
          label: "DATE HIRED",
          field: "age",
          sortable: true,
          align: "left",
        },
        {
          name: "job",
          label: "BUSINESS NAME",
          field: "name",
          sortable: true,
          align: "left",
        },
        {
          name: "age",
          label: "STATUS",
          field: "age",
          sortable: true,
          align: "left",
        },
        {
          name: "age",
          label: "ACTION",
          field: "age",
          sortable: true,
          align: "left",
        },
      ],
      columns: [
        {
          name: "name",
          label: "DATE",
          field: "name",
          sortable: true,
          align: "left",
        },
        { name: "age", label: "JOB", field: "age", sortable: true },
        { name: "job", label: "ACTIONS", field: "job", sortable: true },
      ],
      pagination: {
        rowsPerPage: 5, // This controls how many rows are shown per page; set to the number you want to show
      },
    };
  },
  computed: {
    limitedRows() {
      // Limit the rows to the number set in pagination rowsPerPage
      return this.rows.slice(0, this.pagination.rowsPerPage);
    },
    limitedRowsEmployers() {
      // Limit the rows to the number set in pagination rowsPerPage
      return this.rowEmployers.slice(0, this.pagination.rowsPerPage);
    },
  },
};
</script>

<style scoped>
.profile-card {
  max-width: 80%;
  margin: auto;
  margin-top: 2%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-card {
  max-width: 80%;
  margin: auto;
  margin-top: 2%;
  border-radius: 5px;
  overflow: hidden;
}

.profile-container {
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, #06372c, 50%, #ffffff 50%);
  padding: 20px;
  margin-top: -50px;
}

.profile-avatar {
  flex: 0 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background: white;
  padding: 10px;
  border-radius: 50%;
  outline: 2px solid darkgoldenrod;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-details {
  flex: 1;
  padding: 10px;
  text-align: left;
}
.title {
  color: white;
}

.profile-details h2 {
  margin: 0 0 10px 0;
  font-size: 24px;
}

.profile-details p {
  margin: 5px 0;
  font-size: 15px;
}

/* Responsive design */
@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, rgb(3, 69, 113) 50%, #ffffff 50%);
    padding: 20px;
  }

  .profile-avatar {
    margin-right: 0;
    margin-bottom: 20px;
    background: white; /* Blue background for the avatar */
  }

  .profile-details {
    text-align: center;
    background: #ffffff; /* White background for the details */
    padding: 20px;
    border-radius: 8px;
  }
  .title {
    color: black;
  }
}
</style>
