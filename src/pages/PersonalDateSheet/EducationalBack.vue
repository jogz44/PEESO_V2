<template>
  <div>
    <p class="title q-ma-sm text-bold q-ml-md">
      EDUCATIONAL BACKGROUND<q-btn
        icon="edit"
        flat
        class=""
        dense
        style="color: orange"
        @click="EditBtn"
      ></q-btn>
    </p>
    <q-separator class="q-ma-sm" />
    <div v-show="eb">
      <div class="row">
        <div class="col">
          <q-card class="q-ma-md q-pa-md">
            <div class="row">
              <div class="col-12">
                <p style="font-weight: 600" class="">ATTENDED SCHOOLS</p>
                <q-table
                  :grid="$q.screen.lt.md"
                  class="my-sticky-header-table text-uppercase q-pa-sm"
                  flat
                  wrap-cells=""
                  bordered
                  title=""
                  dense
                  :rows="educationaldata"
                  :columns="columns"
                  row-key="id"
                >
                  <template v-slot:body-cell-actions="{ row }">
                    <div class="actionsbtn">
                      <q-btn
                        icon="delete"
                        flat
                        round
                        color="deep-orange"
                        @click="deleteEducation(row)"
                      >
                      </q-btn>
                    </div> </template
                ></q-table>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <div v-show="EditProfile">
      <EducationalBackground />
    </div>

    <!-- DIALOG FOR Education DELETE -->
    <q-dialog
      v-model="DeleteEducationDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Education</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Education Details?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteEducationFinal()"
            class="text-green"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script scoped>
import EducationalBackground from "../EditPDS/EducationalBackground.vue";
import { useLoginCheck } from "src/stores/SignUp_Store";
export default {
  data() {
    return {
      EditProfile: false,
      eb: true,
      educationaldata: [],
      userinfo: [],
      columns: [
        {
          name: "LEVEL",
          required: true,
          label: "LEVEL ",
          align: "center",
          field: "Education",

          sortable: true,
        },
        {
          name: "NameofSchool",
          align: "left",
          label: "Name of School",
          field: "School",
          sortable: true,
        },
        {
          name: "Degree",
          align: "left",
          label: "Basic Education / Degree / Course",
          field: "Degree",
          sortable: true,
        },
        {
          name: "PeriodofAttendanceFrom",
          align: "center",
          label: "From",
          field: "From",
          sortable: true,
        },
        {
          name: "PeriodofAttendanceTo",
          align: "center",
          label: "To",
          field: "To",
          sortable: true,
        },
        {
          name: "Unit",
          align: "left",
          label: "Highest Level / Units Earned",
          field: "NumUnits",
          sortable: true,
        },
        {
          name: "YearGraduated",
          align: "center",
          label: "Year Graduated",
          field: "yeargraduated",
          sortable: true,
        },
        {
          name: "Scholarship",
          align: "left",
          label: "Scholarship / Academic Honors Received",
          field: "Honors",
          sortable: true,
        },
      ],
      rows: [
        {
          Level: "2",
          NameofSchool: "s",
          Degree: "s",
          PeriodofAttendanceFrom: "s",
          PeriodofAttendanceTo: "s",
          Unit: "s",
          YearGraduated: "s",
          Scholarship: "s",
        },
      ],
    };
  },
  created() {
    const store = useLoginCheck();
    this.userinfo = Array.isArray(store.RetrievedData.data)
      ? store.RetrievedData.data[0]
      : store.RetrievedData.data;

    let data = new FormData();
    data.append("action", "view");
    data.append("ControlNo", this.userinfo.ControlNo);

    store.EducationalData(data).then((res) => {
      this.educationaldata = store.EB;
      console.log("EducationalData => ", this.educationaldata);
    });
  },
  methods: {
    EditBtn() {
      this.EditProfile = true;
      this.eb = false;
    },
  },
  components: {
    EducationalBackground,
  },
};
</script>

<style scoped>
.title {
  font-size: 15px;
}
.item {
  font-weight: 400;
}
.item1 {
  font-weight: 400;
  margin-left: -10px;
}
.item2 {
  font-weight: 400;
  margin-left: -38px;
}
.item3 {
  font-weight: 400;
  margin-left: -15px;
}
.item4 {
  font-weight: 400;
  margin-left: -20px;
}
.info-line {
  display: grid;
  grid-template-columns: max-content auto;
  gap: 70px;
  font-weight: 500;
  margin-top: -10px;
}
.name {
  font-weight: 500;
}
.nameLabel {
  font-style: italic;
  margin-top: -15px;
}

/* .label {
  text-align: right;
  white-space: nowrap;
} */

/* Optional: Additional styling for better readability */
.info-line span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.address {
  margin-top: -12px;
}
.addressTitle {
  margin-top: -12px;
  font-weight: 500;
}
</style>
