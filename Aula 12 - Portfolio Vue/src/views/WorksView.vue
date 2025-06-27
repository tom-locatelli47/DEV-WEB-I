<script setup>

</script>

<template>
    <main>
      <section class="featured">
        <h2>Featured works</h2>
        <ul>
          <li>
            <h3>Designing Dashboards with usability in mind</h3>
            <p class="data">
              <span>2020</span> Dashboard, User Experience Design
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <img src="/images/pagina.png" alt="pagina" />
          </li>
          <li>
            <h3>The Ultimate Guide to Car Maintenance</h3>
            <p class="data">
              <span>2021</span> Dashboard, User Experience Design
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <img src="/images/carro.png" alt="carro" />
          </li>
        </ul>
      </section>
    </main>
</template>

<style scoped>

    /* ===================================================Pagina Works=========================================================*/

section.featured {
  padding: 20px 10px 20px 10px;
}
section.featured h2 {
  font-size: 2.4rem;
  text-align: center;
}

section.featured ul li h3 {
  font-weight: bold;
  font-size: 1.8rem;
  margin: 0 0 10px 0;
}

section.featured ul li {
  margin: 25px 0 25px 0;
}

section.featured ul li p {
  margin: 15px 0;
  color: black;
}

section.featured ul li p.data {
  color: #21243d;
}

section.featured ul li p.data span {
  color: white;
  background-color: #ff7c7c;
  padding: 5px 10px;
  border-radius: 16px;
}

</style>