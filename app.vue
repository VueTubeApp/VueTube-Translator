<script setup>
import { ref } from "vue";
let swoppage = ref(false);
let jsource = ref("123");
fetch(
  "https://raw.githubusercontent.com/VueTubeApp/VueTube/main/NUXT/plugins/languages/english.js"
)
  .then((data) => {
    data.text().then((text) => {
      console.log(text.substring(text.indexOf("{"), text.length - 2))
      let edit = text.substring(text.indexOf("{"), text.length - 2)
      jsource.value = eval('(' + edit + ')')
    });
  });
</script>

<template>
  <svg
    height="0"
    width="0"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    style="display: none"
  >
    <defs>
      <filter id="fancy-goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>

  <div class="pa-8 h-screen">
    <div
      class="d-flex h-100 rounded-xl overflow-hidden"
      :class="swoppage ? 'flexboxswopped' : 'flexbox'"
    >
      <div class="h-100 w-100">
        <v-form
          class="py-4 px-6 h-100 d-flex flex-column"
          style="border-radius: 1rem; background: #222; overflow-y: scroll;"
        >
          <!-- TODO: check object depth and make this dry -->
          <p style="color: grey;" v-for="(value, key) in jsource" :key="key">
            <div class="rounded-b-lg" :class="value.length ? '' : 'px-2'" :style="value.length ? '' : 'display: absolute; border: 1px solid grey; max-width: max-content; transform: rotate(-90deg) translateX(-100%); transform-origin: 0 100%;'">{{ key }} {{ value.length ? ': ' + value : '/' }}</div>
            <p v-if="!value.length" class="pl-4" style="color: white;" v-for="(value1, key1) in value" :key="key1">
              {{ key1 }} {{ value1.length ? ': ' + value1 : '/' }}
              <p v-if="!value1.length" class="pl-4" style="color: pink;" v-for="(value2, key2) in value1" :key="key2">
                {{ key2 }} {{ value2.length ? ': ' + value2 : '/' }}
                <p v-if="!value2.length" class="pl-4" style="color: lightblue;" v-for="(value3, key3) in value2" :key="key3">
                  {{ key3 }} : level 4
                </p>
              </p>
            </p>
          </p>
        </v-form>
      </div>
      <div class="pa-2" style="background: #121212; filter: url(#fancy-goo)">
        <div
          style="
            top: 50%;
            left: 50%;
            position: fixed;
            background: #121212;
            transform: translate(-50%, -50%);
          "
          class="swop pa-3 rounded-lg"
          @click="swoppage = !swoppage"
        >
          <v-icon size="2rem">mdi-swap-horizontal</v-icon>
        </div>
      </div>
      <div class="h-100 w-100">
        <v-form
          class="py-4 px-6 h-100 d-flex flex-column justify-center align-center"
          style="border-radius: 1rem; background: #222; overflow-y: scroll;"
        >
          <v-text-field
            style="width: 50%; max-height: 80px"
            label="Github Export"
            variant="outlined"
            class="mt-5"
            shaped
          ></v-text-field>
        </v-form>
      </div>
    </div>
  </div>
</template>

<style>
.swop {
  cursor: pointer;
  transition: 0.25s ease transform;
}
.swop > i {
  transition: 0.25s ease transform;
}
.swop:hover {
  transform: translate(-50%, -50%) scale(1.5) !important;
}
.swop:hover > i {
  transform: rotate(-180deg);
}
.swop:active {
  transform: translate(-50%, -50%) scale(1) !important;
}
.swop:active > i{
  transform: rotate(180deg);
}
.flexboxswopped {
  flex-direction: row-reverse;
}
.flexbox > div {
  max-width: calc(50% - 0.5rem);
}
.flexboxswopped > div {
  max-width: calc(50% - 0.5rem);
}
@media screen and (orientation: portrait) {
  .flexbox {
    flex-direction: column;
  }
  .flexboxswopped {
    flex-direction: column-reverse;
  }
  .flexbox > div {
    max-height: calc(50% - 0.5rem);
  }
  .flexboxswopped > div {
    max-height: calc(50% - 0.5rem);
  }
  .swop {
    transform: translate(-50%, -50%) rotate(90deg) !important;
  }
}
.v-field__outline__start {
  border-top-left-radius: 1rem !important;
  border-bottom-left-radius: 1rem !important;
}
.v-field__outline__end {
  border-top-right-radius: 1rem !important;
  border-bottom-right-radius: 1rem !important;
}
</style>
