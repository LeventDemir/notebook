<template>
  <div  class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <div class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
          </div>
        </div>

        <div class="media-content">
          <div
            class="content"
            :class="collapsible ? 'text-collapsible-active' : 'text-collapsible'"
          >
            <p>Lorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığınıLorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığınıLorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığınıLorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığınıLorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığınıLorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığınıLorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığınıLorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığınıLorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
          </div>

          <time class="is-size-7 has-text-grey">11:09 PM - 1 Jan 2016</time>

          <div class="is-pulled-right">
            <span @click="collapsible = !collapsible" class="icon has-text-grey-light is-clickable">
              <i class="fas" :class="collapsible ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </span>
            <span class="icon has-text-success">
              <i class="fas fa-pen"></i>
            </span>
            <span class="icon has-text-danger">
              <i class="fas fa-trash"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      collapsible: false
    };
  }
};
</script>