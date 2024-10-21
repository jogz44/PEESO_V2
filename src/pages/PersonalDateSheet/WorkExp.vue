<template>
  <div>
    <p class="title q-ma-sm text-bold q-ml-md">
      WORK EXPERIENCE<q-btn
        icon="edit"
        flat
        class=""
        dense
        style="color: orange"
        @click="EditBtn"
      ></q-btn>
    </p>
    <q-separator class="q-ma-sm" />
    <div v-show="we">
      <div class="row">
        <div class="col">
          <q-card class="q-ma-md q-pa-md">
            <div class="row">
              <div class="col-12">
                <p style="font-weight: 600" class="">
                  LIST OF WORK EXPERIENCES
                </p>
                <q-table
                  :grid="$q.screen.lt.md"
                  class="my-sticky-header-table text-uppercase"
                  flat
                  bordered
                  title=""
                  wrap-cells=""
                  dense
                  :rows="WorkExpArray"
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
                        @click="deleteExperience(row)"
                      >
                      </q-btn>
                    </div>
                  </template>
                </q-table>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <div v-show="EditProfile">
      <WorkExperience />
    </div>
    <!-- DIALOG FOR EXPIRIENCE DELETE -->
    <q-dialog
      v-model="DeleteExperienceDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Work Experience</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Work Experience?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteExperienceFinal()"
            class="text-green"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { useLoginCheck } from "src/stores/SignUp_Store";
import WorkExperience from "../EditPDS/WorkExperience.vue";
export default {
  data() {
    return {
      we: true,
      EditProfile: false,
      DeleteExperienceDialog: false,
      ExperienceID: "",
      model: "",
      personal: [],
      WorkExpArray: [],

      columns: [
        {
          name: "InclusiveDateFrom",
          required: true,
          label: "From",
          align: "left",
          field: "WFrom",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "InclusiveDateTo",
          align: "center",
          label: "To",
          field: "WTo",
          sortable: true,
        },
        {
          name: "PositionTitle",
          align: "center",
          label: "PositionTitle",
          field: "WPosition",
          sortable: true,
        },

        {
          name: "WCompany",
          align: "center",
          label: "Company",
          field: "WCompany",
          sortable: true,
        },

        {
          name: "MonthlySalary",
          align: "center",
          label: "Monthly Salary",
          field: "WSalary",
          format: (val) => {
            const numVal = Number(val);
            if (!isNaN(numVal)) {
              return numVal.toLocaleString("en-US", {
                style: "currency",
                currency: "PHP",
              });
            }
            return val;
          },
          sortable: true,
        },
        {
          name: "SalaryGrade",
          align: "center",
          label: "Salary Grade",
          field: "WGrade",
          sortable: true,
        },
        {
          name: "Status",
          align: "center",
          label: "Status",
          field: "Status",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "left",
        },
      ],
    };
  },

  methods: {
    EditBtn() {
      this.EditProfile = true;
      this.we = false;
    },
  },

  created() {
    const store = useLoginCheck();
    this.userinfo = Array.isArray(store.RetrievedData.data)
      ? store.RetrievedData.data[0]
      : store.RetrievedData.data;
    console.log("userinfo", this.userinfo);

    let data = new FormData();
    data.append("action", "view");
    data.append("ControlNo", this.userinfo.ControlNo);

    store.WorkExperience_Data(data).then((res) => {
      this.WorkExpArray = store.WE;

      console.log("WorkExpe => ", this.WorkExpArray);
    });
  },

  components: {
    WorkExperience,
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
