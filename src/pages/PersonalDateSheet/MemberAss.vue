<template>
  <div>
    <p class="title q-ma-sm text-bold q-ml-md">
      MEMBERSHIP IN ASSOCIATION<q-btn
        icon="edit"
        flat
        class=""
        dense
        style="color: orange"
        @click="EditBtn"
      ></q-btn>
    </p>
    <q-separator class="q-ma-sm" />
    <div class="row" v-show="ma">
      <div class="col">
        <q-card class="q-ma-md q-pa-md">
          <div class="row">
            <div class="col-12">
              <p style="font-weight: 600" class="">
                LIST OF MEMBERSHIP IN ASSOCIATION
              </p>
              <q-table
                :grid="$q.screen.lt.md"
                class="my-sticky-header-table text-uppercase"
                flat
                bordered
                wrap-cells=""
                title=""
                dense
                :rows="organizationdata"
                :columns="columnMembership"
                row-key="id"
                ><template v-slot:body-cell-actions="{ row }">
                  <div class="actionsbtn">
                    <q-btn
                      icon="delete"
                      flat
                      round
                      color="deep-orange"
                      @click="deleteMembership(row)"
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
      <MembershipAssociation />
    </div>
    <!-- DIALOG FOR Membership DELETE -->
    <q-dialog
      v-model="DeleteMembershipDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Membership in Association</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Membership in Association?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteMembershipFinal()"
            class="text-green"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import MembershipAssociation from "../EditPDS/MembershipAssociation.vue";
import { useLoginCheck } from "src/stores/SignUp_Store";
export default {
  data() {
    return {
      ma: true,
      EditProfile: false,
      model: "",
      DeleteMembershipDialog: false,
      MembershipID: "",
      personal: [],
      organizationdata: [],

      userinfo: [],
      columnMembership: [
        {
          name: "Membership",
          required: true,
          label: "Membership in Organization",
          align: "left",
          field: "Organization",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "actions",
          label: "Actions",
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

    store.OrganizationData(data).then((res) => {
      this.organizationdata = store.MO.data;
      console.log("OrganizationData => ", this.organizationdata);
    });
  },
  methods: {
    EditBtn() {
      this.EditProfile = true;
      this.ma = false;
    },
  },
  components: {
    MembershipAssociation,
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
