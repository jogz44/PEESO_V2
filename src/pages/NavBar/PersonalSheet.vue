<template>
  <div class="scrollable-container">
    <div class="profile-card">
      <div class="row profile-container">
        <div class="profile-avatar relative-position">
          <q-avatar
            @click="triggerFileUpload"
            style="cursor: pointer"
            class="avatar"
          >
            <img :src="imageUrl" />
          </q-avatar>
          <input
            type="file"
            ref="fileInput"
            style="display: none"
            @change="handleFileUpload"
            accept="image/*"
          />

          <q-icon
            @click="triggerFileUpload"
            name="camera_alt"
            size="24px"
            class="camera-icon absolute-bottom-right"
            style="cursor: pointer; border-radius: 50%; padding: 4px"
          />
        </div>
        <!-- <div class="col-12" style="text-align: center">
          <p style="font-weight: 500; margin-bottom: -2px">
            {{ userinfo.data[0].Firstname}} {{ userinfo.data[0].Surname }}
          </p>
          <p>Web Development, JavaScript, CSS, HTML</p>
        </div> -->
        <div class="col-12" style="text-align: center">
          <p
            v-if="userinfo && userinfo.data && userinfo.data.length > 0"
            style="font-weight: 500; margin-bottom: -2px"
          >
            {{ userinfo.data[0].Firstname }} {{ userinfo.data[0].Surname }}
          </p>
          <p v-else>No user information available.</p>
          <p>Web Development, JavaScript, CSS, HTML</p>
        </div>
      </div>
    </div>

    <div class="q-pa-md profile-card">
      <!-- <p class="title">PERSONAL DATA SHEET</p> -->
      <!-- <q-separator class="q-ma-md" /> -->
      <div class="row">
        <div class="col-md-2 col-sm-12 col-xs-12">
          <q-select
            dense=""
            v-if="$q.screen.lt.md"
            filled
            v-model="activeButton"
            :options="[
              {
                label: 'PERSONAL INFORMATION',
                value: 'PERSONAL INFORMATION',
              },
              { label: 'FAMILY BACKGROUND', value: 'FAMILY BACKGROUND' },
              {
                label: 'EDUCATIONAL BACKGROUND',
                value: 'EDUCATIONAL BACKGROUND',
              },
              {
                label: 'CIVIL SERVICE ELIGIBILITY',
                value: 'CIVIL SERVICE ELIGIBILITY',
              },
              { label: 'WORK EXPERIENCE', value: 'WORK EXPERIENCE' },
              { label: 'VOLUNTARY WORK', value: 'VOLUNTARY WORK' },
              { label: 'L&D INTERVENTIONS', value: 'L&D INTERVENTIONS' },
              {
                label: 'SPECIAL SKILLS & HOBBIES',
                value: 'SPECIAL SKILLS & HOBBIES',
              },
              { label: 'NON-ACADEMIC', value: 'NON-ACADEMIC' },
              {
                label: 'MEMBERSHIP ASSOCIATION',
                value: 'MEMBERSHIP ASSOCIATION',
              },
              { label: 'OTHER INFORMATIONS', value: 'OTHER INFORMATIONS' },
              { label: 'REFERENCES', value: 'REFERENCES' },
            ]"
            style="width: 100%; margin-bottom: 20px"
            @update:model-value="handleSelectionChange"
          />
          <template v-else>
            <q-btn
              flat
              rounded
              align="left"
              v-ripple
              class=""
              :class="{
                'active-button': activeButton === 'PERSONAL INFORMATION',
              }"
              style="width: 95%; margin-bottom: -10px"
              @click="personalinf()"
              >PERSONAL INFORMATION
            </q-btn>

            <q-separator class="q-mt-md" inset></q-separator>

            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{
                'active-button': activeButton == 'FAMILY BACKGROUND',
              }"
              style="width: 95%; margin-bottom: -10px"
              @click="familyback()"
              >FAMILY BACKGROUND
            </q-btn>
            <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{
                'active-button': activeButton === 'EDUCATIONAL BACKGROUND',
              }"
              style="width: 95%; margin-bottom: -10px"
              @click="educationalback()"
              >EDUCATIONAL BACKGROUND
            </q-btn>
            <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{
                'active-button': activeButton === 'CIVIL SERVICE ELIGIBILITY',
              }"
              style="width: 95%; margin-bottom: -10px"
              @click="civilserv()"
              >CIVIL SERVICE ELIGIBILITY
            </q-btn>
            <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{ 'active-button': activeButton === 'WORK EXPERIENCE' }"
              style="width: 95%; margin-bottom: -10px"
              @click="workexp()"
              >WORK EXPERIENCE
            </q-btn>
            <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{ 'active-button': activeButton === 'VOLUNTARY WORK' }"
              style="width: 95%; margin-bottom: -10px"
              @click="volunwork()"
              >VOLUNTARY WORK
            </q-btn>
            <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{
                'active-button': activeButton === 'L&D INTERVENTIONS',
              }"
              style="width: 95%; margin-bottom: -10px"
              @click="learnint()"
              >L&D INTERVENTIONS
            </q-btn>
            <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{
                'active-button': activeButton === 'SPECIAL SKILLS & HOBBIES',
              }"
              style="width: 95%; margin-bottom: -10px"
              @click="specialskills()"
              >SPECIAL SKILLS & HOBBIES
            </q-btn>
            <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{ 'active-button': activeButton === 'NON-ACADEMIC' }"
              style="width: 95%; margin-bottom: -10px"
              @click="nonacademic()"
              >NON-ACADEMIC
            </q-btn>
            <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{
                'active-button': activeButton === 'MEMBERSHIP ASSOCIATION',
              }"
              style="width: 95%; margin-bottom: -10px"
              @click="memberass()"
              >MEMBERSHIP ASSOCIATION
            </q-btn>
            <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{
                'active-button': activeButton === 'OTHER INFORMATIONS',
              }"
              style="width: 95%; margin-bottom: -10px"
              @click="otherinf()"
              >OTHER INFORMATION
            </q-btn>
            <q-separator class="q-mt-md" inset></q-separator>
            <q-btn
              flat
              rounded
              align="left"
              class="q-mt-xs"
              :class="{ 'active-button': activeButton === 'REFERENCES' }"
              style="width: 95%; margin-bottom: -10px"
              @click="reference()"
              >REFERENCES
            </q-btn>
          </template>
        </div>

        <div class="col-md-10 col-sm-12">
          <q-card
            flat
            bordered
            class="  "
            style="height: auto; margin-top: -0px; width: 100%"
          >
            <PersonalInf v-if="activeButton === 'PERSONAL INFORMATION'" />
            <FamilyBack v-if="activeButton === 'FAMILY BACKGROUND'" />
            <EducationalBack v-if="activeButton === 'EDUCATIONAL BACKGROUND'" />
            <WorkExp v-if="activeButton === 'WORK EXPERIENCE'" />
            <CivilServ v-if="activeButton === 'CIVIL SERVICE ELIGIBILITY'" />
            <VolunWork v-if="activeButton === 'VOLUNTARY WORK'" />
            <LearnInt v-if="activeButton === 'L&D INTERVENTIONS'" />
            <SpecialSkills v-if="activeButton === 'SPECIAL SKILLS & HOBBIES'" />
            <NonAcademic v-if="activeButton === 'NON-ACADEMIC'" />
            <MemberAss v-if="activeButton === 'MEMBERSHIP ASSOCIATION'" />
            <OtherInf v-if="activeButton === 'OTHER INFORMATIONS'" />
            <ReferencePage v-if="activeButton === 'REFERENCES'" />
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import { ref, onMounted } from "vue";
import PersonalInf from "../PersonalDateSheet/PersonalInf.vue";
import FamilyBack from "../PersonalDateSheet/FamilyBack.vue";
import EducationalBack from "../PersonalDateSheet/EducationalBack.vue";
import CivilServ from "../PersonalDateSheet/CivilServ.vue";
import WorkExp from "../PersonalDateSheet/WorkExp.vue";
import VolunWork from "../PersonalDateSheet/VolunWork.vue";
import LearnInt from "../PersonalDateSheet/LearnInt.vue";
import SpecialSkills from "../PersonalDateSheet/SpecialSkills.vue";
import NonAcademic from "../PersonalDateSheet/NonAcademic.vue";
import MemberAss from "../PersonalDateSheet/MemberAss.vue";
import OtherInf from "../PersonalDateSheet/OtherInf.vue";
import ReferencePage from "../PersonalDateSheet/ReferencePage.vue";
import { useLoginCheck } from "src/stores/SignUp_Store";
import { useQuasar } from "quasar";
export default {
  data() {
    return {
      /*   retrievedLogin: null, */
      userinfo: [],
      Profilepic: [],
      transferUser: [],
      imageUrl: "/upload.jpg", // Set default image URL
      file: null,

      retrievedLogin: "",
      // userinfo: [],
      activeButton: "PERSONAL INFORMATION",
      /*  imageUrl: "/upload.jpg", */

      dataTable: [
        { id: "", name: "", age: "" },
        { id: "", name: "", age: "" },
        // Add more data as needed
      ],
      // Define your q-table columns
      columns: [
        { name: "id", label: "ID", align: "left", field: "id", sortable: true },
        {
          name: "name",
          label: "Name",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "age",
          label: "Age",
          align: "left",
          field: "age",
          sortable: true,
        },
      ],

      step: ref(1),
      model: ref(null),
      cit: ref(null),
      options: ["Single", "Married", "Widowed", "Separated", "Other/s"],
      citizenship: ["Filipino", "Dual Citizenship"],
      extension: ["Jr.", "Sr.", "III"],
      ReferenceDialog: false,
    };
  },

  setup() {
    const $q = useQuasar();
    /*  const $q = useQuasar();
    const retrievedLogin = ref(null);
    const userinfo = ref(null);
    const store = useLoginCheck();
    const imageUrl = ref("/upload.jpg");
    const transferUser = ref(null);

    retrievedLogin.value = localStorage.getItem("Login");
    console.log("Retrieved Login:", retrievedLogin.value);

    let data = new FormData();
    data.append("LoginID", retrievedLogin.value);

    store.RetrievedData_function(data).then((res) => {
      userinfo.value = store.RetrievedData;
      console.log("userinfo:", userinfo.value);
      if (userinfo.value && userinfo.value.data && userinfo.value.data[0]) {
        imageUrl.value = userinfo.value.data[0].pic;
        console.log("ImageURL", imageUrl.value);
      }

      transferUser.value = userinfo.value.data[0].PMID;
      console.log("transer User", transferUser.value);
    }); */

    return {
      /*   transferUser,
      userinfo,
      imageUrl,
      store, */
      showSuccessfullyUPdated() {
        $q.notify({
          icon: "star_half",
          color: "green",
          message: "Sucessfully Updated",
          position: "center",
          timeout: "1500",
        });
      },
    };
  },

  created() {
    const store = useLoginCheck(); // Assuming you are using Vuex or similar store
    this.retrievedLogin = localStorage.getItem("Login");
    console.log("Retrieved Login:", this.retrievedLogin); // Check the retrieved login

    let data = new FormData();
    data.append("LoginID", this.retrievedLogin);

    store.RetrievedData_function(data).then((res) => {
      this.userinfo = store.RetrievedData;
      console.log("userinfo:", this.userinfo);
      if (this.userinfo && this.userinfo.data && this.userinfo.data[0]) {
        this.imageUrl = this.userinfo.data[0].pic; // Update imageUrl
        console.log("ImageURL", this.imageUrl);
      }

      this.transferUser = this.userinfo.data[0];
      console.log("transfer User", this.transferUser);

      const store2 = useLoginCheck();
      let data2 = new FormData();
      data2.append("action", "view");
      data2.append("ControlNo", this.transferUser.ControlNo);
      store2.PersonalData(data2).then((res) => {
        this.Profilepic = store2.PI;
        console.log("Profile PIC", this.Profilepic);
        this.imageUrl = this.Profilepic.personalRecord.pic;
      });
    });
  },

  methods: {
    async ImagetoDatabase() {
      const store = useLoginCheck();
      let data = new FormData();
      if (this.file) {
        data.append("file", this.file);
      }
      data.append("userid", this.transferUser.PMID);

      store.Store_ImageDatabase(data).then((res) => {
        /*  console.log("Response Store Image:", res.data); */
        const store2 = useLoginCheck();
        let data2 = new FormData();
        data2.append("action", "view");
        data2.append("ControlNo", this.transferUser.ControlNo);
        store2.PersonalData(data2).then((res) => {
          this.Profilepic = store2.PI;
          console.log("Profile PIC", this.Profilepic);
          this.imageUrl = this.Profilepic.personalRecord.pic;
          this.showSuccessfullyUPdated();
        });
      });
    },

    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file; // bind the file object to the data property
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result; // set the image URL to the loaded file
          this.ImagetoDatabase();
        };
        reader.readAsDataURL(file); // read the file as a data URL
      }
    },

    handleSelectionChange(selectedOption) {
      console.log("Selected Option:", selectedOption.value);
      this.activeButton = selectedOption.value;
    },
    personalinf() {
      this.activeButton = "PERSONAL INFORMATION";
    },
    familyback() {
      this.activeButton = "FAMILY BACKGROUND";
    },
    educationalback() {
      this.activeButton = "EDUCATIONAL BACKGROUND";
    },
    civilserv() {
      this.activeButton = "CIVIL SERVICE ELIGIBILITY";
    },
    workexp() {
      this.activeButton = "WORK EXPERIENCE";
    },
    volunwork() {
      this.activeButton = "VOLUNTARY WORK";
    },
    learnint() {
      this.activeButton = "L&D INTERVENTIONS";
    },
    specialskills() {
      this.activeButton = "SPECIAL SKILLS & HOBBIES";
    },
    nonacademic() {
      this.activeButton = "NON-ACADEMIC";
    },
    memberass() {
      this.activeButton = "MEMBERSHIP ASSOCIATION";
    },
    otherinf() {
      this.activeButton = "OTHER INFORMATIONS";
    },
    reference() {
      this.activeButton = "REFERENCES";
    },
    printPage() {
      // Open the print dialog when the button is clicked
      // window.print();
      this.$router.push("/printpds");
    },
  },
  components: {
    PersonalInf,
    FamilyBack,
    EducationalBack,
    CivilServ,
    WorkExp,
    VolunWork,
    LearnInt,
    SpecialSkills,
    NonAcademic,
    MemberAss,
    OtherInf,
    ReferencePage,
  },
};
</script>

<style scoped>
.relative-position {
  position: relative;
}

.camera-icon {
  right: 0;
  bottom: 20px;
  background-color: black;
  color: white;
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
.profile-card {
  max-width: 80%;
  margin: auto;
  margin-top: 2%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
  background: linear-gradient(to bottom, #06372c 50%, #ffffff 50%);
  padding: 20px;
  height: 100%; /* Ensure the container fills vertical space */
}

.profile-avatar {
  flex: 0 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 50%;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
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
}
</style>
