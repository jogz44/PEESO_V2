<template>
  <div class="profile-card">
    <q-card>
      <q-card-section
        style="
          background-color: rgb(3, 69, 113);
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
          @click="$router.push({ path: '/ScholarshipApplications' })"
        ></q-btn>
        <p style="font-size: 22px; align-self: center">TES Scholarship</p>
        <!-- if done "APPLY FOR THIS JOB" , then it shall be changed to "APPLIED" -->
        <q-btn
          class="bg-green"
          rounded
          label="Apply For This GRANT"
          style="align-self: center"
          @click="inception = true"
        ></q-btn>
      </q-card-section>
      <q-card-section class="">
        <q-card flat>
          <div class="row q-pa-md">
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
              <q-item>
                <q-item-section avatar
                  ><q-icon
                    name="php"
                    size="2em"
                    style="color: rgb(3, 69, 113)"
                  />
                </q-item-section>
                <q-item-section
                  ><q-item-label caption>CASH INCENTIVES</q-item-label>
                  <q-item-label>PHP 10,000</q-item-label></q-item-section
                >
                <q-separator vertical />
              </q-item>
            </div>
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
              <q-item>
                <q-item-section avatar
                  ><q-icon
                    name="event"
                    size="2em"
                    style="color: rgb(3, 69, 113)"
                  />
                </q-item-section>
                <q-item-section
                  ><q-item-label caption>DATE POSTED</q-item-label>
                  <q-item-label>July 09, 2024</q-item-label></q-item-section
                >
              </q-item>
            </div>
          </div>
        </q-card>
      </q-card-section>
    </q-card>
  </div>
  <div class="row skill-card">
    <div class="col-12 col-sm-8 col-md-8 col-lg-8">
      <q-card class="q-ma-sm">
        <q-item>
          <q-item-section avatar>
            <q-icon name="list" size="2em" class="colorText" />
          </q-item-section>
          <q-item-section class="">
            <p
              class="colorText"
              style="font-size: 18px; margin-top: 15px; font-weight: 500"
            >
              SCHOLARSHIP DETAILS
            </p>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item-section class="q-pa-md"
          ><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sit
            amet commodo nulla facilisi nullam vehicula ipsum a. Et odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla. A
            iaculis at erat pellentesque adipiscing. Ut venenatis tellus in
            metus vulputate eu scelerisque felis imperdiet. Facilisi etiam
            dignissim diam quis. Cras fermentum odio eu feugiat pretium nibh
            ipsum consequat nisl. Integer feugiat scelerisque varius morbi enim
            nunc faucibus a pellentesque. Eu augue ut lectus arcu bibendum at.
            Lectus quam id leo in vitae turpis massa sed. Libero volutpat sed
            cras ornare arcu. Dictum at tempor commodo ullamcorper a lacus
            vestibulum. Scelerisque in dictum non consectetur a erat nam at.
            Amet aliquam id diam maecenas ultricies mi.
          </p></q-item-section
        >
      </q-card>
    </div>
    <div class="col-12 col-sm-4 col-md-4 col-lg-4">
      <q-card class="q-ma-sm">
        <q-item>
          <q-item-section class="">
            <p
              class="colorText"
              style="font-size: 18px; margin-top: 15px; font-weight: 500"
            >
              ABOUT THE GRANTOR
            </p>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item-section class="q-pa-md"
          ><p>Contact Person: <b>JomzTv</b></p>
        </q-item-section>
      </q-card>
    </div>
    <div class="col-12">
      <q-dialog v-model="inception">
        <q-card>
          <q-card-section
            class="text-white"
            style="background-color: rgb(3, 69, 113)"
          >
            <div class="text-h6">Continue with the Application?</div>
          </q-card-section>

          <q-card-section class="q-pt-none q-mt-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis laudantium minus earum totam modi laborum illo, corporis
            fuga saepe animi aliquam ea enim assumenda ut nulla natus aperiam
            quis. Iste.
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn
              flat
              label="Continue"
              class="text-green"
              @click="secondDialog = true"
            />
            <q-btn
              flat
              class="text-red"
              label="Cancel"
              @click="closeApplication"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog
        v-model="secondDialog"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card
          class="text-white"
          style="width: 300px; background-color: rgb(3, 69, 113)"
        >
          <q-card-section>
            <div class="text-h6">Application Successful</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            We will notify you once the Application has been checked.
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" @click="closeApply" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inception: false,
      secondDialog: false,
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
          field: "job",
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
  methods: {
    closeApply() {
      this.secondDialog = false;
      this.inception = false;
    },
    closeApplication() {
      this.inception = false;
    },
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
  max-width: 70%;
  margin: auto;
  margin-top: 2%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-card {
  max-width: 70%;
  margin: auto;
  margin-top: 1%;
  border-radius: 5px;
  overflow: hidden;
}

.colorText {
  color: rgb(3, 69, 113);
}
</style>
