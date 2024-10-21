<template>
  <div>
    <div
      class="q-pa-md"
      style="display: flex; justify-content: center; flex-wrap: wrap"
    >
      <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="amber"
        arrows
        padding
        transition-prev="slide-right"
        transition-next="slide-left"
        class="q-mb-md"
      >
        <q-carousel-slide
          v-for="(imageGroup, index) in computedImages"
          :key="index"
          :name="index"
          class="row no-wrap justify-start items-center"
        >
          <q-img
            v-for="(src, idx) in imageGroup"
            :key="idx"
            :src="src.Logo"
            class="my-story-img"
            style="margin: 3px"
            @click="openImage(src, idx)"
          >
            <!-- <div class="absolute-bottom text-subtitle text-center" dense>
              {{ src.ID }}
          </div> -->
          </q-img>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!-- Dialog for showing the selected image in full-screen -->
    <q-dialog v-model="dialogVisible" persistent>
      <q-carousel
        v-model="selectedImageIndex"
        control-color="amber"
        arrows
        infinite
        animated
      >
        <q-carousel-slide
          v-for="(src, index) in LogoCompany"
          :key="index"
          :name="index"
        >
          <q-img :src="src.Logo" class="full-screen-image" />
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useLoginCheck } from "src/stores/SignUp_Store";

export default {
  data() {
    return {};
  },
  created() {},
  setup() {
    let LogoCompany = ref([]);

    const store = useLoginCheck();
    store.LogoView().then((res) => {
      LogoCompany.value = store.Logos.data;
      console.log("Logo=>", LogoCompany.value);
    });
    const slide = ref(0);
    const dialogVisible = ref(false);
    const selectedImageIndex = ref(0);

    const imagesPerSlide = ref(3);

    const computedImages = computed(() => {
      let groups = [];
      console.log("computed value length=>", LogoCompany.value.length);
      console.log("image per slide=>", imagesPerSlide.value);
      for (let i = 0; i < LogoCompany.value.length; i += imagesPerSlide.value) {
        console.log(
          "sssss=>",
          LogoCompany.value.slice(i, i + imagesPerSlide.value)
        );
        groups.push(LogoCompany.value.slice(i, i + imagesPerSlide.value));
      }
      return groups;
    });

    const updateImagesPerSlide = () => {
      if (window.innerWidth < 300) {
        imagesPerSlide.value = 2;
      } else if (window.innerWidth < 600) {
        imagesPerSlide.value = 2;
      } else if (window.innerWidth < 900) {
        imagesPerSlide.value = 3;
      } else if (window.innerWidth < 1300) {
        imagesPerSlide.value = 4;
      } else if (window.innerWidth < 1500) {
        imagesPerSlide.value = 5;
      } else {
        imagesPerSlide.value = 6;
      }
    };

    const openImage = (src, index) => {
      console.log("Opening image:", src, "at index:", index);

      selectedImageIndex.value = index;
      dialogVisible.value = true;
      // console.log("LogoCompany:", selectedImageIndex.value);
    };

    onMounted(() => {
      updateImagesPerSlide();
      window.addEventListener("resize", updateImagesPerSlide);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateImagesPerSlide);
    });

    return {
      LogoCompany,
      slide,
      computedImages,
      dialogVisible,
      selectedImageIndex,
      openImage,
    };
  },
};
</script>

<style scoped>
.q-carousel {
  overflow: hidden;
  margin-top: 10px;
  height: 200px;
  width: 90%;
  outline: 1px solid rgb(171, 213, 181); /* or any color and size you want */
  box-shadow: 0px 1px 10px #06372c; /* Adds a shadow */
  opacity: 0.9; /* Sets the opacity (between 0 and 1) */
  border-radius: 5px; /* Rounds the corners (adjust value as needed) */
}

.q-carousel-slide {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
}

.my-story-img {
  height: 180px;
  object-fit: contain;
  border-radius: 3%;
  cursor: pointer;
  background-color: rgb(171, 213, 181);
  outline: 1px solid rgb(171, 213, 181);
}

.full-screen-image {
  height: 100%;
  object-fit: contain;
  background-color: black;
}
</style>
