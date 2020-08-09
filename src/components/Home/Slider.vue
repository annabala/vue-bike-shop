<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="slider">
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index"
      :style="{ 'background-image': 'url(' + slide.image + ')' }"
      class="slider__slide"
      >{{ slide.title }}</swiper-slide
    >
    <div
      class="slider__nav slider__nav--prev swiper-button-prev"
      slot="button-prev"
    ></div>
    <div
      class="slider__nav slider__nav--next swiper-button-next"
      slot="button-next"
    ></div>
    <div class="slider__pagination swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import slideImg from "@/assets/images/slide.png";

export default {
  name: "Slider",
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  data() {
    return {
      slides: [
        {
          title: "Perfection In Every Shape",
          url: "/test",
          image: slideImg
        },
        {
          title: "Perfection In Every Shape",
          url: "/test",
          image: slideImg
        },
        {
          title: "Perfection In Every Shape",
          url: "/test",
          image: slideImg
        }
      ],
      swiperOptions: {
        slidesPerView: 1,
        loop: true,
        speed: 800,
        spaceBetween: 0,
        lazy: {
          loadPrevNext: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "slider__paginationBullet",
          bulletActiveClass: "slider__paginationBullet--active",
          clickable: true,
          type: "bullets"
        }
      }
    };
  }
};
</script>
<style lang="scss">
.slider {
  $root: &;

  &__slide {
    color: $cWhite;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center;
  }

  &__nav {
    color: $cWhite;

    &::after {
      font-weight: 700;
      z-index: 10;
    }

    &::before {
      content: "";
      display: inline-block;
      width: 21.8rem;
      height: 21.8rem;
      background-color: $cOrange;
      transform: rotate(45deg);
      position: absolute;
    }

    &--next {
      &::after {
        margin-right: 10px;
      }

      &::before {
        right: -12rem;
      }
    }

    &--prev {
      &::after {
        margin-left: 10px;
      }

      &::before {
        left: -12rem;
      }
    }
  }

  &__pagination {
    height: 3rem;
    bottom: 5.3rem !important;
    right: 50%;
  }

  &__paginationBullet {
    display: inline-block;
    width: 2.3rem;
    height: 2.3rem;
    background-color: $cWhite;
    transform: rotate(45deg);
    margin: 0 1rem;
    cursor: pointer;

    &--active {
      background-color: $cOrange;
    }
  }
}
</style>
