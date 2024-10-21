<template>
  <div>
    <p class="title q-ma-sm text-bold q-ml-md">
      PERSONAL INFORMATION
      <q-btn icon="edit" flat class="" dense style="color: orange"></q-btn>
    </p>

    <q-separator class="q-ma-sm" />
    <div v-show="!EditProfile">
      <div class="row">
        <div class="col-12">
          <q-card class="q-ma-md q-pa-md">
            <p class="" style="font-weight: 600">EMPLOYEE'S NAME</p>
            <div class="row">
              <div class="col-3 col-sm-6 col-xs-12 col-md-3">
                <p class="name">{{ userinfo.Firstname }}</p>
                <p class="nameLabel">Firstname</p>
              </div>
              <div class="col-3 col-sm-6 col-xs-12 col-md-3">
                <p class="name">{{ userinfo.Surname }}</p>
                <p class="nameLabel">Lastname</p>
              </div>
              <div class="col-3 col-sm-6 col-xs-12 col-md-3">
                <p class="name">{{ userinfo.MIddlename }}</p>
                <p class="nameLabel">Middlename</p>
              </div>
              <div class="col-3 col-sm-6 col-xs-12 col-md-3">
                <p class="name">{{ userinfo.Suffix }}</p>
                <p class="nameLabel">Name Extension</p>
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <div>
        <q-card class="q-ma-md q-pa-md" style="margin-top: -0px">
          <p style="font-weight: 600" class="q-mb-lg">ADDITIONAL INFORMATION</p>
          <div class="row">
            <div class="col-12 col-sm-12 col-xs-12 col-md-6">
              <div class="row">
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">DATE OF BIRTH:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.BirthDate }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">PLACE OF BIRTH:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.BirthPlace }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">SEX:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.Sex }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">CIVIL STATUS:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.CivilStatus }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">GENDER PREFERENCE:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.gender }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">HEIGHT:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.Heights }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">WEIGHT:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.Weights }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">BLOOD TYPE:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.BloodType }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">TELEPHONE NUMBER:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.TelNo }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">CELLPHONE NUMBER:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.CellphoneNo }}</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-12 col-xs-12 col-md-6">
              <div class="row">
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">EMAIL ADDRESS:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.Email }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">GSIS ID NO.:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.GSISNo }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">PAGIBIG ID NO.:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.PAGIBIGNo }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">PHILHEALTH ID NO.:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.PHEALTHNo }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">SSS NO.:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.SSSNo }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">TIN NO.:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.TINNo }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">AGENCY EMPLOYEE NO.:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.ControlNo }}</p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">CITIZENSHIP:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">
                    {{ userinfo.cit }}
                    {{ userinfo.citizenshipStatus }}
                  </p>
                </div>
                <div class="col-12 col-lg-4 col-sm-6">
                  <p class="addressTitle">RELIGIOUS SECTOR:</p>
                </div>
                <div class="col-12 col-lg-8 col-sm-6">
                  <p class="address">{{ userinfo.Religion }}</p>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
      <div class="row">
        <div class="col">
          <q-card class="q-ma-md q-pa-md" style="margin-top: -0px">
            <!-- <p class="info-line" style="margin-top: 0px">ADDRESS</p> -->
            <div class="row">
              <div class="col-12 col-sm-12 col-xs-12 col-md-6">
                <p style="font-weight: 600" class="q-mb-lg">
                  RESIDENTIAL ADDRESS
                </p>
                <div class="row">
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">REGION:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Rregion }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">PROVINCE:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Rprovince }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">MUNICIPALITY:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Rcity }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">BARANGGAY:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Rbarangay }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">SUBDIVISION / VILLAGE:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Rsubdivision }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">STREET PUROK:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Rstreet }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">HOUSE/BLOCK/LOT NO.:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Rhouse }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">ZIP CODE:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Rzip }}</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-12 col-xs-12 col-md-6">
                <p style="font-weight: 600" class="q-mb-lg">
                  PERMANENT ADDRESS
                </p>

                <div class="row">
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">REGION:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Pregion }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">PROVINCE:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Pprovince }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">MUNICIPALITY:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Pcity }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">BARANGGAY:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Pbarangay }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">SUBDIVISION / VILLAGE:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Psubdivision }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">STREET PUROK:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Pstreet }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">HOUSE/BLOCK/LOT NO.:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Phouse }}</p>
                  </div>
                  <div class="col-12 col-lg-4 col-sm-6">
                    <p class="addressTitle">ZIP CODE:</p>
                  </div>
                  <div class="col-12 col-lg-8 col-sm-6">
                    <p class="address">{{ userinfo.Pzip }}</p>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <div v-if="EditProfile">
      <PersonalInformation />
    </div>
  </div>
</template>
<script>
import PersonalInformation from "src/pages/EditPDS/PersonalInformation.vue";
import { useLoginCheck } from "src/stores/SignUp_Store";

export default {
  props: {
    // pi: "",
  },
  data() {
    return {
      userinfo: [],
      userdata: [],
      model: "",
       EditProfile: false,
      /*    pi: true, */
      personaldata: [],
    };
  },
  created() {
    const store = useLoginCheck();
    this.userinfo = Array.isArray(store.RetrievedData.data)
      ? store.RetrievedData.data[0]
      : store.RetrievedData.data;

    console.log("User INFO BAI", this.userinfo);

    /*  let data = new FormData();
    data.append("action", "view");
    data.append("ControlNo", this.userinfo.ControlNo);

    store.PersonalData(data).then((res) => {
      this.personaldata = store.PI;
      console.log("Kini Personal =>", this.personaldata);
    }); */
  },

  methods: {
    /*  EditBtn() {
      this.EditProfile = true;
      this.pi = false;
    }, */
    /*  SaveEdit() {
      this.EditProfile = false;
      this.pi = true;

      const store = useLoginCheck();
      this.userinfo = store.RetrievedData.data;
      console.log("UserInfo", this.userinfo);
      let data = new FormData();
      data.append("action", "edit");
      data.append("ControlNo", this.userinfo[0].ControlNo);

      Object.entries(this.userinfo[0]).forEach(([key, value]) => {
        data.append(key, value === null ? "" : value);
      });
      const formDataObj = {};
      data.forEach((value, key) => {
        formDataObj[key] = value;
      });
      console.log("ajjhjashd =>", formDataObj);

      store.PersonalData(data).then((res) => {
        this.personaldata = store.PI;
        console.log("PersonalInf =>", this.pi);
      });
    }, */
  },
  components: {
    PersonalInformation,
  },
};
</script>

<style scoped>
.title {
  font-size: 15px;
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
