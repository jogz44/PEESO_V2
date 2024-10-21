<template>
  <div>
    <p class="title q-ma-sm text-bold q-ml-md">
      LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS<q-btn
        icon="edit"
        flat
        class=""
        dense
        style="color: orange"
        @click="EditBtn"
      ></q-btn>
    </p>
    <q-separator class="q-ma-sm" />

    <div class="row" v-show="ld">
      <div class="col">
        <q-card class="q-ma-md q-pa-md">
          <div class="row">
            <div class="col-12">
              <p style="font-weight: 600" class="">LIST OF TRAININGS</p>
              <q-table
                :grid="$q.screen.lt.md"
                class="my-sticky-header-table text-uppercase"
                flat
                bordered
                title=""
                wrap-cells=""
                dense
                :rows="trainingsdata"
                :columns="columns"
                row-key="id"
                :rows-per-page-options="[10]"
              >
                <template v-slot:body-cell-actions="{ row }">
                  <div class="actionsbtn">
                    <q-btn
                      icon="delete"
                      flat
                      round
                      color="deep-orange"
                      @click="deleteLearning(row)"
                    >
                    </q-btn>
                  </div> </template
              ></q-table>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div v-show="EditProfile">
      <LearningDevelopment />
    </div>
    <!-- DIALOG FOR L&D DELETE -->
    <q-dialog
      v-model="DeleteLearningDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Learning and Development</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Learning and Development Interventions?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteLearningFinal()"
            class="text-green"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import LearningDevelopment from "../EditPDS/LearningDevelopment.vue";
import { useLoginCheck } from "src/stores/SignUp_Store";
export default {
  data() {
    return {
      ld: true,
      EditProfile: false,
      model: "",
      DeleteLearningDialog: false,
      LearningID: "",
      personal: [],
      trainingsdata: [],
      userinfo: [],
      columns: [
        {
          name: "Title",
          required: true,
          label: "Title",
          align: "left",
          field: "Training",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "InclusiveDateFrom",
          align: "center",
          label: "From",
          field: "DateFrom",
          sortable: true,
        },
        {
          name: "InclusiveDateTo",
          align: "center",
          label: "To",
          field: "DateTo",
          sortable: true,
        },
        {
          name: "NumberofHours",
          align: "center",
          label: "Number of Hours",
          field: "NumHours",
          sortable: true,
        },
        {
          name: "Type",
          align: "center",
          label: "Type",
          field: "type",
          sortable: true,
        },
        {
          name: "Conducted",
          align: "center",
          label: "Conducted / Sponsored by",
          field: "Conductor",
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
  created() {
    const store = useLoginCheck();
    this.userinfo = Array.isArray(store.RetrievedData.data)
      ? store.RetrievedData.data[0]
      : store.RetrievedData.data;

    let data = new FormData();
    data.append("action", "view");
    data.append("ControlNo", this.userinfo.ControlNo);

    store.TrainingData(data).then((res) => {
      this.trainingsdata = store.LD.data;
      console.log("TrainingData => ", this.trainingsdata);
    });
  },
  methods: {
    EditBtn() {
      this.EditProfile = true;
      this.ld = false;
    },
  },
  components: {
    LearningDevelopment,
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
