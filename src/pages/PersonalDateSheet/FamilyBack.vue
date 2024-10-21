<template>
  <div>
    <p class="title q-ma-sm text-bold q-ml-md">
      FAMILY BACKGROUNDs<q-btn
        icon="edit"
        flat
        class=""
        dense
        style="color: orange"
        @click="EditBtn"
      ></q-btn>
    </p>
    <q-separator class="q-ma-sm" />
    <div v-show="fb">
      <div class="row">
        <div class="col-12">
          <q-card class="q-ma-md q-pa-md">
            <p class="" style="font-weight: 600">SPOUSE'S INFORMATION</p>
            <div class="row">
              <div class="col-4 col-sm-6 col-xs-12 col-md-4">
                <p class="name">{{ userinfo.SpouseName }}</p>
                <p class="nameLabel">Fullname</p>
              </div>
              <div class="col-4 col-sm-6 col-xs-12 col-md-4">
                <p class="name">{{ this.model }}</p>
                <p class="nameLabel">Name Extension</p>
              </div>
              <div class="col-4 col-sm-6 col-xs-12 col-md-4">
                <p class="name">{{ userinfo.SpouseEmployer }}</p>
                <p class="nameLabel">Occupation</p>
              </div>
              <div class="col-4 col-sm-6 col-xs-12 col-md-4">
                <p class="name">{{ userinfo.SpouseEmployer }}</p>
                <p class="nameLabel">Employers/Business Name</p>
              </div>
              <div class="col-4 col-sm-6 col-xs-12 col-md-4">
                <p class="name">{{ userinfo.SpouseEmpAddress }}</p>
                <p class="nameLabel">Business Address</p>
              </div>
              <div class="col-4 col-sm-6 col-xs-12 col-md-4">
                <p class="name">{{ userinfo.SpouseEmpTel }}</p>
                <p class="nameLabel">Business Telephone Number</p>
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <div>
        <q-card class="q-ma-md q-pa-md" style="margin-top: -0px">
          <p style="font-weight: 600" class="q-mb-lg">PARENT'S INFORMATION</p>
          <div class="row">
            <div class="col-12 col-sm-12 col-xs-12 col-md-6">
              <div class="row">
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">FATHER'S FULLNAME:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.FatherName }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">NAME EXTENSION:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ this.model }}</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-12 col-xs-12 col-md-6">
              <div class="row">
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">MOTHER'S MAIDEN NAME:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.MotherName }}</p>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
      <div class="row">
        <div class="col">
          <q-card class="q-ma-md q-pa-md" style="margin-top: -0px">
            <div class="row">
              <div class="col-12">
                <p style="font-weight: 600" class="">CHILDREN'S INFORMATION</p>
                <q-table
                  :grid="$q.screen.xs"
                  class="my-sticky-header-table text-uppercase"
                  flat
                  bordered
                  title=""
                  dense
                  :rows="childrendata"
                  :columns="columns"
                  row-key="id"
                ></q-table>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <div v-show="EditProfile">
      <FamilyBackground :onSave="SaveEdit" />
    </div>

    <!-- DIALOG FOR CHILD DELETE -->
    <q-dialog
      v-model="DeleteChildrenDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete Children</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure to delete this Child?
        </q-card-section>

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" v-close-popup class="text-orange" />
          <q-btn
            flat
            label="OK"
            @click="deleteChildrenFinal()"
            class="text-green"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import FamilyBackground from "../EditPDS/FamilyBackground.vue";
import { useLoginCheck } from "src/stores/SignUp_Store";

export default {
  data() {
    return {
      DeleteChildrenDialog: false,
      userinfo: [],
      personaldata: [],
      childrendata: [],
      EditProfile: false,
      fb: true,
      columns: [
        {
          name: "ChildName",
          required: true,
          label: "Name of Children",
          align: "left",
          field: "ChildName",

          sortable: true,
        },
        {
          name: "BirthDate",
          align: "center",
          label: "Date of Birth",
          field: "BirthDate",
          sortable: true,
        },
      ],
      children: [
        {
          lastName: "Honey Curay",
          firstName: "11-28-99",
        },
      ],
    };
  },
  created() {
    const store = useLoginCheck();
    this.userinfo = store.RetrievedData;
    this.userinfo = Array.isArray(store.RetrievedData.data)
      ? store.RetrievedData.data[0]
      : store.RetrievedData.data;


    console.log("Family Back", this.userinfo);

    let data = new FormData();
    data.append("action", "view");
    data.append("ControlNo", this.userinfo.ControlNo);

    store.PersonalData(data).then((res) => {
      this.personaldata = store.PI;
      console.log("PersonalInf =>", this.pi);
    });

    /*  store.ChildrenData(data).then((res) => {
      console.log("success=>", store.CD.success);
      if (store.CD.success != false) {
        this.childrendata = store.CD;
      }

      console.log("ChildrenData => ", this.childrendata);
    }); */
    let data2 = new FormData();
    data2.append("action", "view");
    data2.append("ControlNo", this.userinfo.ControlNo);
    store.ChildrenData(data2).then((res) => {
      this.childrendata = store.CD.children;

      console.log("ChildrenData => ", this.childrendata);
    });
  },
  methods: {
    EditBtn() {
      this.EditProfile = true;
      this.fb = false;
    },
    SaveEdit() {
      this.EditProfile = false;
      this.fb = true;
    },
  },
  components: {
    FamilyBackground,
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
