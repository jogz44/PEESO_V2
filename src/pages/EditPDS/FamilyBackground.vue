<template>
  <div>
    <q-card class="q-pa-md q-ma-md">
      <p class="text-bold">SPOUSE'S INFORMATION</p>
      <div class="row">
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Spouse's Surname"
            dense
            class="q-pa-sm text-uppercase"
            v-model="userinfo.SpouseName"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            uppercase
            filled
            label="Spouse's Firstname"
            class="q-pa-sm text-uppercase"
            dense
            v-model="userinfo.SpouseName"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            uppercase
            filled
            label="Spouse's Middlename"
            dense
            class="q-pa-sm text-uppercase"
            v-model="userinfo.SpouseName"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <!-- <q-input filled label="Name Extension" dense class="q-pa-sm" /> -->
          <q-select
            filled
            class="q-pa-sm"
            use-input
            dense
            input-debounce="0"
            label="Name Extension"
            :options="extension"
            style="min-width: 70%; max-width: 98%"
            behavior="menu"
            v-model="userinfo.SpouseName"
          >
          </q-select>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            uppercase
            filled
            label="Occupation"
            dense
            class="q-pa-sm text-uppercase"
            v-model="userinfo.SpouseEmployer"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Employers / Business Name"
            class="q-pa-sm text-uppercase"
            dense
            v-model="userinfo.SpouseEmployer"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Business Address"
            class="q-pa-sm text-uppercase"
            dense
            v-model="userinfo.SpouseEmpAddress"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Telephone Number"
            class="q-pa-sm"
            dense
            type="number"
            v-model="userinfo.SpouseEmpTel"
          />
        </div>
      </div>
    </q-card>
    <!-- Parents Information -->
    <q-card class="q-pa-md q-ma-md"
      ><p class="q-mb-lg text-bold">PARENT'S INFORMATION</p>
      <div class="row" style="">
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Father's Surname"
            dense
            class="q-pa-sm text-uppercase"
            v-model="userinfo.FatherName"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Father's Firstname"
            class="q-pa-sm text-uppercase"
            dense
            v-model="userinfo.FatherName"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Father's Middlename"
            dense
            class="q-pa-sm text-uppercase"
            v-model="userinfo.FatherName"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <!-- <q-input filled label="Name Extension" dense class="q-pa-sm" /> -->
          <q-select
            filled
            use-input
            dense
            class="q-pa-sm"
            input-debounce="0"
            label="Name Extension"
            :options="extension"
            style="min-width: 70%; max-width: 98%"
            behavior="menu"
            v-model="userinfo.FatherName"
          >
          </q-select>
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Mother's Maiden Surname"
            dense
            class="q-pa-sm text-uppercase"
            v-model="userinfo.MotherName"
          />
        </div>
        <div class="col-12 col-md-6 col-sm-6 col-lg-6">
          <q-input
            filled
            label="Mother's Firstname"
            class="q-pa-sm text-uppercase"
            dense
            v-model="userinfo.MotherName"
          />
        </div>
        <div class="col-md-12 col-xs-12">
          <q-input
            filled
            label="Mother's Maiden Middlename"
            dense
            class="q-pa-sm text-uppercase"
            v-model="userinfo.MotherName"
          />
        </div>
      </div>
    </q-card>
    <!-- Childrens Information -->
    <q-card class="q-pa-md q-ma-md"
      ><p class="text-bold">CHILDREN'S INFORMATION</p>
      <div class="q-pa-sm">
        <div style="margin-bottom: 10px; margin-top: -20px">
          CHILDREN NAMES
          <q-btn
            label="Add"
            @click="secondDialog = true"
            class="q-mb-sm q-ml-sm"
            style="background-color: #06372c; color: white"
          ></q-btn>
        </div>

        <q-table
          flat
          bordered
          title=""
          dense
          :rows="children"
          :columns="columns_data"
        ></q-table>

        <q-dialog
          v-model="secondDialog"
          persistent
          transition-show="scale"
          transition-hide="scale"
        >
          <q-card class="" style="width: 500px">
            <q-toolbar style="background-color: #06372c; color: white">
              <q-toolbar-title>ADD CHILDREN</q-toolbar-title>
              <q-btn icon="close" flat round dense v-close-popup />
            </q-toolbar>
            <q-separator />
            <q-card-section>
              <div class="row">
                <div class="col-12">
                  <q-input
                    filled
                    label="Name of Children"
                    dense
                    class="q-pa-sm q-mb-sm"
                    v-model="userinfo.ChildName"
                  />
                </div>
                <div class="col-12">
                  <q-input
                    filled
                    label="Date of Birth"
                    dense
                    class="q-pa-sm q-mb-sm"
                    type="date"
                    v-model="userinfo.BirthDate"
                  />
                </div>
              </div>
            </q-card-section>
            <q-card-actions align="right" class="">
              <q-btn
                flat
                label="Cancel"
                color="warning"
                @click="resetFields"
                size="md"
              />
              <q-btn
                label="Add Update"
                style="background-color: #06372c; color: white"
                size="md"
                @click="saveservice()"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </q-card>
  </div>
  <div class="q-pa-sm q-ma-sm">
    <q-btn
      style="background-color: #06372c"
      class="full-width text-white"
      label="Save Changes"
      @click="onSave"
    />
  </div>
</template>
<script scoped>
import { ref, onMounted } from "vue";
import { useLoginCheck } from "src/stores/SignUp_Store";
export default {
  props: {
    onSave: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      secondDialog: false,
      userinfo: [],
      personaldata: [],
      childrendata: [],
      columns_data: [
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
          ChildName: "Honey Curay",
          BirthDate: "11-28-99",
        },
      ],
    };
  },
  created() {
    const store = useLoginCheck();
    /*  this.userinfo = store.RetrievedData; */
    this.userinfo = Array.isArray(store.RetrievedData.data)
      ? store.RetrievedData.data[0]
      : store.RetrievedData.data;
    console.log("Family Background", this.userinfo);

    /*   let data = new FormData();
    data.append("action", "edit");
    data.append("ControlNo", this.userinfo.ControlNo);

    let data2 = new FormData();
    data.append("action", "add");
    data.append("ControlNo", this.userinfo.ControlNo);

    store.PersonalData(data).then((res) => {
      this.personaldata = store.PI;
      console.log("PersonalInf =>", this.pi);
    });

    store.ChildrenData(data2).then((res) => {
      this.childrendata = store.CD;
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
};
</script>
