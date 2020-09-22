<template>
  <div class="about container container--list">
    <VHeading :level="'1'" :text="'About us'" class="about__heading" />
    <div>
      <VHeading :level="'2'" :text="'Passion'" class="about__heading" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque at hic corporis sed, natus id repellendus voluptatibus quidem amet. Soluta accusantium rerum dolores veniam? Sint corrupti voluptatum perferendis culpa.Delectus esse odio tempora ducimus veniam, dolore omnis! Facilis tempore vitae reiciendis dolor inventore. Dolorum ipsam voluptates vitae doloremque labore, officia harum? Assumenda vitae sit perferendis officiis pariatur repellat odit?
      </p>
      <VHeading :level="'2'" :text="'Knowledge'" class="about__heading" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque at hic corporis sed, natus id repellendus voluptatibus quidem amet. Soluta accusantium rerum dolores veniam? Sint corrupti voluptatum perferendis culpa.Delectus esse odio tempora ducimus veniam, dolore omnis! Facilis tempore vitae reiciendis dolor inventore. Dolorum ipsam voluptates vitae doloremque labore, officia harum? Assumenda vitae sit perferendis officiis pariatur repellat odit?
      </p>
      <VHeading :level="'2'" :text="'Business'" class="about__heading" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque at hic corporis sed, natus id repellendus voluptatibus quidem amet. Soluta accusantium rerum dolores veniam? Sint corrupti voluptatum perferendis culpa.Delectus esse odio tempora ducimus veniam, dolore omnis! Facilis tempore vitae reiciendis dolor inventore. Dolorum ipsam voluptates vitae doloremque labore, officia harum? Assumenda vitae sit perferendis officiis pariatur repellat odit?
      </p>
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

  &__heading {
    // margin-bottom: 4rem;
  }

}
</style>
