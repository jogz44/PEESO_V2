<template>
  <div>
    <p class="title q-ma-sm text-bold q-ml-md">
      REFERENCES<q-btn
        icon="edit"
        flat
        class=""
        dense
        style="color: orange"
        @click="EditBtn"
      ></q-btn>
    </p>
    <q-separator class="q-ma-sm" />
    <div class="row" v-show="ref">
      <div class="col">
        <q-card class="q-ma-md q-pa-md">
          <div class="row">
            <div class="col-12">
              <p style="font-weight: 600" class="">LIST OF REFERENCES</p>
              <q-table
                :grid="$q.screen.lt.md"
                class="my-sticky-header-table text-uppercase"
                flat
                bordered
                wrap-cells=""
                title=""
                dense
                :rows="referencedata"
                :columns="column"
                row-key="id"
                ><template v-slot:body-cell-actions="{ row }">
                  <div class="actionsbtn">
                    <q-btn
                      icon="delete"
                      flat
                      round
                      color="deep-orange"
                      @click="deleteReference(row)"
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
      <Reference />
    </div>
    <!-- DIALOG FOR REFERENCE DELETE -->
    <q-dialog
      v-model="DeleteReferenceDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Reference</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Reference?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteReferenceFinal()"
            class="text-green"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import Reference from "../EditPDS/ReferencePDS.vue";
import { useLoginCheck } from "src/stores/SignUp_Store";
export default {
  data() {
    return {
      ref: true,
      EditProfile: false,
      referencedata: [],
      userinfo: [],
      DeleteReferenceDialog: false,
      ReferenceID: "",
      column: [
        {
          name: "Name",
          align: "left",
          label: "Name",
          field: "Names",
          sortable: true,
        },
        {
          name: "Address",
          align: "center",
          label: "Address",
          field: "Address",
          sortable: true,
        },
        {
          name: "ContactNo",
          align: "center",
          label: "Contact Number",
          field: "TelNo",
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

    store.ReferenceData(data).then((res) => {
      this.referencedata = store.REF.data;
      console.log("ReferenceData => ", this.referencedata);
    });
  },
  methods: {
    EditBtn() {
      this.EditProfile = true;
      this.ref = false;
    },
  },
  components: {
    Reference,
  },
};
</script>
<style scoped>
.title {
  font-size: 15px;
}
</style>
