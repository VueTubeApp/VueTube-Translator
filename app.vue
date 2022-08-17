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
    <div class="d-flex flexbox h-100 rounded-xl overflow-hidden">
      <div class="h-100 w-100">
        <v-form
          class="pa-4 h-100 d-flex justify-center align-center"
          style="border-radius: 1rem; background: #222"
        >
          <v-text-field
            style="max-width: 50%"
            class="mt-5"
            label="Github Import"
            shaped
            variant="outlined"
          ></v-text-field>
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
          class="swop pa-3 rounded-circle"
        >
          <v-icon size="2rem">mdi-swap-horizontal</v-icon>
        </div>
      </div>
      <div class="h-100 w-100">
        <v-form
          class="pa-4 h-100 d-flex justify-center align-center"
          style="border-radius: 1rem; background: #222"
        >
          <v-text-field
            style="max-width: 50%"
            class="mt-5"
            label="Github Export"
            shaped
            variant="outlined"
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
.swop:hover {
  transform: translate(-50%, -50%) rotate(180deg) scale(1.5) !important;
}
@media screen and (orientation: portrait) {
  .flexbox {
    flex-direction: column;
  }
  .swop > i {
    transform: rotate(90deg);
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
