<template>
  <div class="about container container--list">
    <VHeading :level="'1'" :text="'About us'" class="about__heading" />
    <div class="about__element">
      <div class="about__elementText about__elementText--bgBlue">
        <VHeading
          :level="'2'"
          :text="'We ride...'"
          class="about__heading about__heading--h2"
        />
        <p class="about__par">
          Biking is our passion. The area can be accessed from the end of
          Densmore's Lane, the end of Old Petty Harbour Road and from
          Huntingdale Drive. Let me begin by recommending you don't do this ride
          unless you're pretty confident in your fitness.
        </p>
      </div>
      <div class="about__imageWrapper about__imageWrapper--right">
        <img
          :src="require('../assets/images/about/ride.jpg')"
          class="about__image"
          alt="ride"
        />
      </div>
    </div>
    <div class="about__element">
      <div class="about__elementText about__elementText--bgOrange">
        <VHeading
          :level="'2'"
          :text="'Knowledge'"
          class="about__heading about__heading--h2"
        />
        <p class="about__par">
          We study every bike, we know how to build one from scratch, Let me
          begin by recommending you don't do this ride unless you're pretty
          confident in your fitness.
        </p>
      </div>
      <div class="about__imageWrapper about__imageWrapper--left">
        <img
          :src="require('../assets/images/about/tools.jpg')"
          class="about__image"
          alt="tools"
        />
      </div>
    </div>
    <div class="about__element">
      <div
        class="about__elementText about__elementText--bgBlue about__elementText--bgBlueSmall"
      >
        <VHeading
          :level="'2'"
          :text="'Business'"
          class="about__heading about__heading--h2"
        />
        <p class="about__par">
          We sell beautiful bicycles, Let me begin by recommending you don't do
          this ride unless you're pretty confident in your fitness. Let me begin
          by recommending you don't do this ride unless you're pretty confident
          in your fitness.
        </p>
      </div>
      <div class="about__imageWrapper about__imageWrapper--left">
        <img
          :src="require('../assets/images/about/sell.jpg')"
          class="about__image"
          alt="sell"
        />
      </div>
    </div>
  </div>
</template>
<script>
import VHeading from "@/components/VHeading";

export default {
  name: "About",
  components: {
    VHeading,
  },
};
</script>
<style lang="scss">
.about {
  $root: &;
  padding-top: 16rem;
  padding-bottom: 6rem;

  @include rwd("tablet") {
    padding-top: 12rem;
  }

  &__heading {
    &--h2 {
      margin-bottom: 2rem;
    }
  }

  &__element {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25rem;
    margin-bottom: 5rem;
    position: relative;

    &:first-of-type {
      margin-top: 10rem;
    }

    &:nth-of-type(even) {
      flex-direction: row-reverse;
      margin-right: 4rem;

      @include rwd("large-tablet") {
        flex-direction: column;
      }
    }

    @include rwd("laptop") {
      margin-top: 10rem;
    }

    @include rwd("large-tablet") {
      flex-direction: column;
    }
  }

  &__elementText {
    margin-left: 10rem;
    position: relative;

    @include rwd("laptop") {
      margin-left: 6rem;
    }

    &::after {
      transition: transform $trM;
    }

    &--bgBlue {
      &::after {
        content: "";
        width: 55rem;
        height: 45rem;
        background-color: #75bae6;
        position: absolute;
        top: -65%;
        left: -35%;
        z-index: -1;
      }
    }

    &--bgBlueSmall {
      &::after {
        content: "";
        width: 45rem;
        height: 25rem;
        top: -38%;
        left: -15%;
      }
    }

    &--bgOrange {
      &::after {
        content: "";
        width: 45rem;
        height: 15rem;
        background-color: $cOrange;
        position: absolute;
        top: -20%;
        right: -5%;
        z-index: -1;
      }
    }

    &:hover {
      &::after {
        transform: scale(0.8);
      }
    }
  }

  &__par {
    color: $cBlack;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 600;
    max-width: 500px;
  }

  &__image {
    display: inline-block;
    max-width: 40rem;
    max-height: 100%;
    object-fit: contain;
    transform: translate(-30px, -30px);
    transition: transform $trM;

    &:hover {
      transform: translate(0, 0);
    }
  }

  &__imageWrapper {
    margin-right: 10rem;
    overflow: hidden;
    border: 3px solid $cBlack;

    @include rwd("laptop") {
      margin-right: 6rem;
    }

    &--right {
      margin-left: 15rem;

      @include rwd("laptop") {
        margin-left: 10rem;
      }
    }

    &--left {
      margin-left: 20rem;

      @include rwd("laptop") {
        margin-left: 15rem;
      }
    }
  }
}
</style>
