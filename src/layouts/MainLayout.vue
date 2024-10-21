<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="toolbar bg-white text-grey-10">
      <q-toolbar>
        <!-- Left side: Logo and Drawer button -->
        <q-btn flat round dense class="bg-green-3" @click="toggleLeftDrawer">
          <q-avatar size="40px">
            <img src="../assets/images/logo.png" alt="Logo" />
          </q-avatar>
        </q-btn>

        <!-- Search input -->
        <q-input
          filled
          dense
          class="searchIn q-ml-md"
          placeholder="Search PESCDO"
          rounded
          v-model="MySearch"
          color="green"
          style="width: 15%"
          debounce="300"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-space />
        <!-- Middle section: Navigation buttons or Dropdown -->
        <div
          style="display: flex; justify-content: center; align-items: center"
          v-if="$q.screen.gt.xs"
        >
          <q-tabs v-model="tab" style="color: #06372c">
            <q-tab
              name="mails"
              icon="work_outline"
              @click="$router.push({ path: '/Main' })"
            />
            <q-tab
              name="alarms"
              icon="school"
              @click="$router.push({ path: '/ScholarshipPosting' })"
            />
            <q-tab
              name="movies"
              icon="movie"
              @click="$router.push({ path: '/TrainingPosting' })"
            />
          </q-tabs>
        </div>

        <!-- Menu -->

        <div v-else>
          <q-btn dense round flat icon="menu" @click="toggleMiddle" />
          <q-menu
            v-model="dropdownOpen"
            anchor="bottom right"
            self="top right"
            no-corner
          >
            <q-card class="dropdown-card" flat>
              <q-list>
                <q-item clickable @click="$router.push({ path: '/Main' })">
                  <q-item-section avatar>
                    <q-icon name="work_outline" />
                  </q-item-section>
                  <q-item-section>Home</q-item-section>
                </q-item>
                <q-item
                  clickable
                  @click="$router.push({ path: '/ScholarshipPosting' })"
                >
                  <q-item-section avatar>
                    <q-icon name="school" />
                  </q-item-section>
                  <q-item-section>Scholarship Posting</q-item-section>
                </q-item>
                <q-item
                  clickable
                  @click="$router.push({ path: '/TrainingPosting' })"
                >
                  <q-item-section avatar>
                    <q-icon name="co_present" />
                  </q-item-section>
                  <q-item-section>Training Posting</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-menu>
        </div>

        <q-space v-if="$q.screen.gt.xs"></q-space>

        <!-- Right side: Profile and Notifications -->
        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn
            dense
            round
            flat
            icon="notifications"
            style="background-color: #06372c"
            class="transparent-btn text-white"
            @click="$router.push({ path: '/Appointment' })"
          />

          <q-btn
            flat
            round
            dense
            style="position: relative; background-color: #06372c"
            class="transparent-btn text-white"
            icon="person"
          >
            <!-- <q-avatar rounded size="25px">
              <img
                src="https://cdn.quasar.dev/img/avatar3.jpg"
                alt="User Avatar"
              />
            </q-avatar> -->
            <q-badge class="badge bg-green-1">
              <q-icon name="arrow_drop_down" color="black" />
            </q-badge>
            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>
                      Signed in as
                      <strong
                        ><span
                          v-if="userinfo.data && userinfo.data.length > 0"
                          style="font-size: 16px; font-weight: bold"
                        >
                          {{ userinfo.data[0].Firstname }}
                        </span></strong
                      >
                    </div>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  class="GL__menu-link"
                  @click="$router.push({ path: '/Profile' })"
                >
                  <q-item-section>Your profile</q-item-section>
                </q-item>
                <q-item
                  clickable
                  class="GL__menu-link"
                  @click="$router.push({ path: '/PDS' })"
                >
                  <q-item-section>Personal Data Sheet</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item
                  clickable
                  class="GL__menu-link"
                  @click="$router.push({ path: '/' })"
                >
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :breakpoint="1100">
      <q-list class="q-gutter-sm">
        <q-item
          clickable
          v-ripple
          class="q-mt-lg"
          @click="$router.push({ path: '/Profile' })"
        >
          <q-item-section avatar>
            <q-avatar size="40px">
              <img :src="imageUrl" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium">
            <b
              ><span
                v-if="userinfo.data && userinfo.data.length > 0"
                style="font-size: 16px; font-weight: bold"
              >
                {{ userinfo.data[0].Firstname }} {{ userinfo.data[0].Surname }}
              </span>
            </b>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="$router.push({ path: '/JobApplications' })"
        >
          <q-item-section avatar>
            <q-avatar size="40px">
              <img src="../assets/images/jobApp.png"
            /></q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium" style="font-size: 15px">
            Job Applications
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({ path: '/ScholarshipApplications' })"
        >
          <q-item-section avatar>
            <q-avatar size="40px">
              <img src="../assets/images/scholarApp.png"
            /></q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium" style="font-size: 15px">
            Scholarship Applications
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({ path: '/TrainingApplications' })"
        >
          <q-item-section avatar>
            <q-avatar rounded size="40px">
              <img src="../assets/images/seminarApp.png"
            /></q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium" style="font-size: 15px">
            Training and Seminar Applications
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="$router.push({ path: '/Appointment' })"
        >
          <q-item-section avatar>
            <q-avatar rounded size="40px">
              <img src="../assets/images/appointment2.png"
            /></q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium" style="font-size: 15px">
            Appointments
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="$router.push({ path: '/Announce' })"
          v-if="!$q.screen.gt.sm"
        >
          <q-item-section avatar>
            <q-avatar rounded size="40px">
              <img src="../assets/images/announce.png"
            /></q-avatar>
          </q-item-section>
          <q-item-section class="text-weight-medium" style="font-size: 15px">
            Announcement
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator inset class="q-mt-sm"></q-separator>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useLoginCheck } from "src/stores/SignUp_Store";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      tab: "mails",
      imageUrl: "/upload.jpg",
      retrievedLogin: "",
      userinfo: [],
      MySearch: "",
    };
  },

  methods: {
    searchJobs() {
      if (this.userinfo && this.userinfo.data.length > 0) {
        let data = new FormData();
        data.append("ApplicantID", this.userinfo.data[0].PMID);
        data.append("Query", this.MySearch);

        const store = useLoginCheck();
        store
          .Retrieve_JobPosting(data)
          .then((res) => {
            this.jobposting = store.RetreivedJobPosting.data;
            console.log("Job Posting", this.jobposting);
          })
          .catch((error) => {
            console.error("API Error:", error);
          });
      }
    },
  },

  watch: {
    MySearch: "searchJobs", // Call searchJobs whenever MySearch changes
    "store.RetrievedData"(newval) {
      this.imageUrl = newval.data[0].pic;
    },
  },

  created() {
    this.retrievedLogin = localStorage.getItem("Login");
    console.log("Retrieved Login:", this.retrievedLogin); // Check the retrieved login

    const store = useLoginCheck();
    // let data = new FormData();
    // data.append("LoginID", this.retrievedLogin);

    // store.RetrievedData_function(data).then((res) => {
    this.userinfo = store.RetrievedData;
    console.log("Ako ni ID,", this.userinfo);
    // });

    this.imageUrl = this.userinfo.data[0].pic;

    console.log("User info length:", this.userinfo.length);
    if (this.userinfo && this.userinfo.data.length > 0) {
      this.searchJobs(); // Initial job search
    } else {
      console.log("No user info found");
    }
  },

  /*  watch: {
    txtjobtitle(newVal) {
      if (newVal) {
        this.errors.txtjobtitle = "";
      }
    },
  }, */

  setup() {
    const leftDrawerOpen = ref(false);
    const dropdownOpen = ref(false);
    const tab = "";
    const store = useLoginCheck();
    return {
      store,
      leftDrawerOpen,
      dropdownOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleMiddle() {
        this.dropdownOpen = !this.dropdownOpen;
      },
    };
  },
});
</script>

<style scoped>
.toolbar {
  background: linear-gradient(
    40deg,
    #279f27,
    #5fc331
  ); /* Gradient from green to white */
  color: white;
}
.searchIn .q-field__native {
  border-radius: 50px;
  height: 40px;
  padding-left: 45px;
}

.searchIn .q-field__control {
  border-radius: 50px;
  overflow: hidden;
}

.searchIn .q-field__control-container {
  border-radius: 50px;
}

.transparent-btn {
  background-color: rgba(229, 231, 235, 0.7);
  border: none;
  padding: 8px;
  border-radius: 50%;
  color: black;
  transition: background-color 0.3s;
}

.transparent-btn:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.badge {
  position: absolute;
  bottom: -5px;
  right: -3px;
  background-color: rgba(229, 231, 235, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  font-size: 10px;
  color: black;
}

.dropdown-card {
  width: 200px; /* Adjust width as needed */
  border-radius: 8px; /* Match this with the parent card's border-radius if necessary */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2); /* Optional: adds a subtle shadow for elevation */
}

.q-menu {
  padding: 0; /* Removes padding around the menu */
}

.q-list {
  padding: 0; /* Removes padding inside the list */
}
</style>
