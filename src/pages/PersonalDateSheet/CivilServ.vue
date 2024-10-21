<template>
  <div>
    <p class="title q-ma-sm text-bold q-ml-md">
      CIVIL SERVICE ELIGIBILITY<q-btn
        icon="edit"
        flat
        class=""
        dense
        style="color: orange"
        @click="EditBtn"
      ></q-btn>
    </p>
    <q-separator class="q-ma-sm" />
    <div v-show="cs">
      <div class="row">
        <div class="col">
          <q-card class="q-ma-md q-pa-md">
            <div class="row">
              <div class="col-12">
                <p class="text-bold">ELIGIBITIES</p>
                <q-table
                  :grid="$q.screen.lt.md"
                  class="my-sticky-header-table text-uppercase"
                  flat
                  bordered
                  wrap-cells=""
                  title=""
                  dense
                  :rows="civildata"
                  :columns="columns"
                  row-key="id"
                  ><template v-slot:body-cell-actions="{ row }">
                    <div class="actionsbtn">
                      <q-btn
                        icon="delete"
                        flat
                        round
                        color="deep-orange"
                        @click="deleteCivil(row)"
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
      <CivilService />
    </div>
    <!-- DIALOG FOR CIVIL DELETE -->
    <q-dialog
      v-model="DeleteCivilDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Civil Service</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Civil Service Details?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteCivilFinal()"
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
import CivilService from "../EditPDS/CivilService.vue";

export default {
  data() {
    return {
      DeleteCivilDialog: false,
      CivilID: "",
      model: "",
      personal: [],
      civildata: [],
      userinfo: [],
      cs: true,
      EditProfile: false,
      columns: [
        {
          name: "CivilServe",
          required: true,
          label: "Eligibility",
          align: "left",
          field: "CivilServe",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "Rates",
          align: "center",
          label: "Rating (if Applicable)",
          field: "Rates",

          sortable: true,
        },
        {
          name: "Dates",
          align: "center",
          label: "Date of Examination",
          field: "Dates",
          sortable: true,
        },
        {
          name: "Place",
          align: "center",
          label: "Place of Examination",
          field: "Place",
          sortable: true,
        },
        {
          name: "LDate",
          align: "center",
          label: "License Number",
          field: "LDate",
          sortable: true,
        },
        /*  {
          name: "DateofValidity",
          align: "center",
          label: "Date of Validity",
          field: "LDate",
          sortable: true,
        }, */
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

    store.CivilData(data).then((res) => {
      this.civildata = store.CS.data;
      console.log("CivilData => ", this.civildata);
    });
  },
  methods: {
    EditBtn() {
      this.EditProfile = true;
      this.cs = false;
    },
  },
  components: {
    CivilService,
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
