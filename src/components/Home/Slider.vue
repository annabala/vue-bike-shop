<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="slider">
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index"
      :style="{ 'background-image': 'url(' + slide.image + ')' }"
      class="slider__slide"
    >
      <div class="slider__slideInner container">
        <h2 class="slider__slideHeading">
          <span class="slider__slideTitle">{{ slide.title }}</span
          ><span class="slider__slideSubtitle">{{ slide.subtitle }}</span>
        </h2>
        <p class="slider__slideDesc">{{ slide.desc }}</p>
        <div class="slider__slideButtons">
          <VButton
            :href="'/bikes'"
            :text="'Buy now'"
            :theme="'orangeHome'"
            :size="'medium'"
            class="slider__slideButton"
          />
          <VButton
            :href="'/bikes'"
            :text="'Take a Look'"
            :theme="'whiteBorder'"
            :size="'medium'"
            class="slider__slideButton"
          />
        </div>
      </div>
    </swiper-slide>
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
import VButton from "@/components/VButton";
import "swiper/css/swiper.css";
import slideImg from "@/assets/images/slide.png";
import slideImgTwo from "@/assets/images/products/bike2.jpg";
import slideImgThree from "@/assets/images/products/bike3.jpg";


export default {
  name: "Slider",
  components: {
    VButton,
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
          title: "Perfection",
          subtitle: "In Every Shape",
          url: "/test",
          image: slideImg,
          desc:
            "Our brand new Fishbite Superbike Express 2018 with perfection in every detail and would blow your mind INSTANTLY!!"
        },
        {
          title: "Perfection",
          subtitle: "In Every Shape",
          url: "/test",
          image: slideImgThree,
          desc:
            "Our brand new Fishbite Superbike Express 2018 with perfection in every detail and would blow your mind INSTANTLY!!"
        },
        {
          title: "Perfection",
          subtitle: "In Every Shape",
          url: "/test",
          image: slideImgTwo,
          desc:
            "Our brand new Fishbite Superbike Express 2018 with perfection in every detail and would blow your mind INSTANTLY!!"
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

  &__slideInner {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
  }

  &__slideHeading {
    display: flex;
    flex-direction: column;
  }

  &__slideTitle {
    color: $cOrange;
    font-size: 10rem;
    font-weight: 700;
    line-height: 13.3rem;
  }

  &__slideSubtitle {
    color: $cWhite;
    font-size: 5rem;
    font-weight: 400;
    line-height: 6.7rem;
  }

  &__slideDesc {
    color: $cWhite;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.7rem;
    max-width: 578px;
  }

  &__slideButtons {
    display: flex;
    margin-top: 8.4rem;
  }

  &__slideButton {
    margin-right: 3.2rem;
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
        transition: transform $tr;
      }

      &::before {
        right: -12rem;
      }

      &:hover {
        &::after {
          transform: translateX(5px);
        }
      }
    }

    &--prev {
      &::after {
        margin-left: 10px;
        transition: transform $tr;
      }

      &::before {
        left: -12rem;
      }

      &:hover {
        &::after {
          transform: translateX(-5px);
        }
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
