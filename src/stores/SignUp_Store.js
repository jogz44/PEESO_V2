import { defineStore } from "pinia";
import axios from "axios";

export const useLoginCheck = defineStore("SignUpAccouteStore", {
  state: () => ({
    Check_Login: "",
    OtpVerify: [],
    SaveData: [],
    RetrievedData: [],
    RetreivedJobPosting: [],
    AppliedJobs: [],
    job: null,
    jobs: [],
    Appointments: [],
    MyJobApp: [],
    appointment: null,
    AppSchedule: [],
    Logos: [],
    PI: [],
    CD: [],
    EB: [],
    CS: [],
    LD: [],
    SH: [],
    NON: [],
    MO: [],
    REF: [],
    WE: [],
    ImageDatabase: [],
  }),
  persist: true,
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async LoginChecking(payload) {
      console.log("im here");
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/registration/client/logincheck.php`,
        payload
      );
      console.log("Email Duplicate Checking", res.data.Email_duplicate);
      console.log("Login Duplicate Checking", res.data.login_duplicate);

      if (
        res.data.Email_duplicate == false &&
        res.data.login_duplicate == true
      ) {
        return 1;
      } else if (
        res.data.Email_duplicate == true &&
        res.data.login_duplicate == false
      ) {
        return 2;
      } else if (
        res.data.Email_duplicate == true &&
        res.data.login_duplicate == true
      ) {
        return 3;
      } else if (
        res.data.Email_duplicate == false &&
        res.data.login_duplicate == false
      ) {
        return 4;
      }
      console.log("res.data", res.data);
    },

    async Store_ImageDatabase(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/image.php`,
        payload
      );
      this.ImageDatabase = res.data;
      console.log("Image to Databse", res.data);
    },

    async Login_Store(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/login/client/login.php`,
        payload
      );
      this.LogIn = res.data;
      console.log("LOG IN Store", res.data);
    },

    async VerifyOtp(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/registration/client/otp.php`,
        payload
      );
      this.OtpVerify = res.data;
      console.log("Verify OTP", this.OtpVerify);
    },

    async SaveToDatabase(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/registration/client/register.php`,
        payload
      );
      this.SaveData = res.data;
      console.log("Store Databse Save", res.data);
    },

    async RetrievedData_function(payload) {
      // `http://10.0.1.26:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/dashboard/client/getuserinfo.php`,
        payload
      );
      this.RetrievedData = res.data;
      // console.log("Retrieved Data", res.data);
    },

    async Retrieve_JobPosting(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/jobs/client/getjobs.php`,
        payload
      );
      this.RetreivedJobPosting = res.data;
      console.log("Retrieved Job Data", res.data);
    },

    async ApplyJobs(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/jobs/client/applyjob.php`,
        payload
      );
      this.AppliedJobs = res.data;
      console.log("Applied Jobs =>", res.data);
    },

    async AppointmentDtls(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/appointment/client/getappointment.php`,
        payload
      );
      this.Appointments = res.data;
      console.log("Appointments =>", res.data);
    },

    async JobApplications(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/jobs/client/appliedjobs.php`,
        payload
      );
      this.MyJobApp = res.data;
      console.log("My Job Applications =>", res.data);
    },

    async AppointmentSched(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/appointment/client/setappointment.php`,
        payload
      );
      this.AppSchedule = res.data;
      console.log("Schedule =>", res.data);
    },

    async LogoView() {
      let res = await axios.get(
        `http://10.0.1.26:82/peesoportal/dashboard/client/getcompanylogos.php`
      );
      this.Logos = res.data;
      console.log("Logossss =>", res.data);
    },

    //PERSONAL_DATA
    async PersonalData(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/personaldata.php`,
        payload
      );
      this.PI = res.data;
      console.log("PersonalData=>", res.data.personalRecord);
      let data = new FormData();
      data.append("LoginID", res.data.personalRecord.LoginID);
      this.RetrievedData_function(data);
    },

    //CHILDREN_DATA
    async ChildrenData(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/children.php`,
        payload
      );
      this.CD = res.data;
      console.log("ChildrenData =>", res.data);
    },

    //Work Experience
    async WorkExperience_Data(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/workexperience.php`,
        payload
      );
      this.WE = res.data;
      console.log("Work Experience =>", res.data);
    },

    //EDUCATIONAL_DATA
    async EducationalData(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/education.php`,
        payload
      );
      this.EB = res.data;
      console.log("EducationalData => ", res.data);
    },

    //CIVILSERVICE_DATA
    async CivilData(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/civilservice.php`,
        payload
      );
      this.CS = res.data;
      console.log("CivilData => ", res.data);
    },

    //TRAININGS_DATA
    async TrainingData(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/trainings.php`,
        payload
      );
      this.LD = res.data;
      console.log("TrainingData => ", res.data);
    },

    //SKILLS_DATA
    async SkillsData(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/skills.php`,
        payload
      );
      this.SH = res.data;
      console.log("SkillsData => ", res.data);
    },

    //NONACADEMIC_DATA
    async NonacademicData(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/nonacademic.php`,
        payload
      );
      this.NON = res.data;
      console.log("NonacademicData => ", res.data);
    },
    //ORGANIZATION_DATA
    async OrganizationData(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/organization.php`,
        payload
      );
      this.MO = res.data;
      console.log("OrganizationData => ", res.data);
    },
    //REFERENCE_DATA
    async ReferenceData(payload) {
      let res = await axios.post(
        `http://10.0.1.26:82/peesoportal/pds/client/reference.php`,
        payload
      );
      this.REF = res.data;
      console.log("ReferenceData => ", res.data);
    },
  },
});
