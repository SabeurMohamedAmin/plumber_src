<script>
import SmallCard from "components/SmallCard";
import HowToSteps from "components/HowToSteps";
export default {
  name: "Details",
  components:{
    HowToSteps,
    SmallCard
  },
  data:()=>({
    seeDetails: false
  }),
}
</script>


<template>
  <section class="q-my-lg">
    <q-btn
      round
      icon="arrow_back"
      text-color="black"
      @click="$router.back()"
      class="q-ma-lg fixed-top z-top btn-back"
      title="go back"

    />
    <span class="ribbon-title full-width flex absolute items-end">
      <h1 class="text-h4 title-align q-ml-lg">
        Details For: PLACEHOLDER...
      </h1>
    </span>
    <div class="q-mr-lg q-ml-sm flex justify-end">
      <SmallCard :seeDetails='seeDetails'/>

    </div>
  </section>


  <article class="q-ma-lg">
    <header class="q-card--bordered q-pa-sm q-my-lg">
      <h2 class="text-h4 q-mb-lg" >Works For</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus alias amet consectetur consequatur delectus dolore et expedita facere iure nam neque,
        odit omnis optio, quasi quia, repellendus ut voluptatibus voluptatum.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus alias amet consectetur consequatur delectus dolore et expedita facere iure nam neque,
        odit omnis optio, quasi quia, repellendus ut voluptatibus voluptatum.
      </p>
    </header>
    <main class="q-card--bordered q-pa-sm q-my-lg">
      <h2 class="text-h4 q-my-md" >How To Use It</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus alias amet consectetur consequatur delectus dolore et expedita facere iure nam neque,
        odit omnis optio, quasi quia, repellendus ut voluptatibus voluptatum.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus alias amet consectetur consequatur delectus dolore et expedita facere iure nam neque,
        odit omnis optio, quasi quia, repellendus ut voluptatibus voluptatum.
      </p>
      <HowToSteps/>
    </main>

    <footer>

    </footer>
  </article>



</template>


<style scoped>

.btn-back{
  border: 1px solid black;
  background: linear-gradient(-70deg, rgba(22, 223, 218, 0.15) 0%, rgba(3, 69, 255, 0.15) 60%, rgba(3, 69, 255, 0.15) 80%, rgba(142, 34, 167, 0.15) 100%);
  backdrop-filter: blur(15px) brightness(110%);
}



.ribbon-title{
  height: 100px;
  background: #ddd;
  top: calc(220px - 90px);
  background: linear-gradient(-70deg, #16dfda 0%, #0345ff 60%, #0345ff 80%, #8e22a7 100%);
}
.title-align{
  margin-right: calc(160px + 32px);
  z-index: 10;
  color: #eee;
}
@media only screen and (max-width: 500px){
  h1.title-align{
    font-size: 1.3rem;
    line-height: 1.8rem;
    font-weight: bold;
  }
}

</style>
