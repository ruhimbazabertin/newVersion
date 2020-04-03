

<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="ml-5"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption=""
        text="Green Earth is the best choice."
        img-src="/static/plant4.png"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="/static/plant2.png">
        <h1>Future Green!</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="/static/plant3.png"></b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="/static/plant5.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>
<hr>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style  scoped>
#carousel-1{
    width:100;
}
</style>