<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <HeaderComponent></HeaderComponent>
    <main>
      <section class="banner">
        <div class="imagem">
          <img src="../public/images/fotodeperfil.png" alt="Foto do John" />
        </div>
        <div class="texto">
          <h1>Hi, I am John, Creative Technologist</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            <button>Download Resume</button>
          </p>
        </div>
      </section>
      <section class="posts">
        <h2>Recent posts</h2>
        <ul>
          <li>
            <h3>Making a design system from scratch</h3>
            <p>12 Feb 2020 | Design, Pattern</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </li>
          <li>
            <h3>Creating pixel perfect icons in Figma</h3>
            <p>12 Feb 2020 | Design, Pattern</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </li>
        </ul>
      </section>
      <section class="works">
        <h2>Featured works</h2>
        <ul>
          <li>
            <img src="../public/images/informação.png" alt="Exemplo dash" />
            <h3>Designing Dashboards</h3>
            <p class="info"><span>2020</span> Dashboard</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </li>
          <li>
            <img src="../public/images/mulher.png" alt="Mulher rosa" />
            <h3>Vibrant Portraits of 2020</h3>
            <p class="info"><span>2018</span> Illustration</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </li>
        </ul>
      </section>
    </main>
    <Footer></Footer>
</template>

<style scoped>
  section.banner {
  text-align: center; /* centralizar */
  padding: 0 5% 0 5%; /* espaço das laterais */
}

section.banner h1 {
  font-weight: bold; /*negrito no titulo */
  font-size: 2.4rem; /* tamanho */
  margin: 10px 0 10px 0; /* margem*/
}

section.banner p button {
  background-color: #ff6464;
  border: none; /* tirar a bordar do votão */
  color: white; /* cor da letra do botão */
  display: inline-block;
  margin: 10px 0 50px; /* espaço externo */
  padding: 5px 10px; /*espaço interno */
  font-size: 1.5rem; /* tamanho */
}

section.posts {
  background-color: #edf7fa;
  padding: 10xp;
}

section.posts ul li {
  margin: 12px 10px 12px 10px;
  background-color: white;
  padding: 15px;
  border-radius: 4px;
}

section.posts ul li h3 {
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 130%;
}

section.works {
  padding: 20px 10px 20px 10px;
}

section.works ul li {
  margin: 15px 0 15px 0;
}

section.works ul li h3 {
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 130%;
  padding: 10px 0 0 0;
}

section.works ul li p.info {
  color: #8695a4;
  padding: 15px 0;
}

section.works ul li p.info span {
  color: white;
  background-color: #142850;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 16px;
}

section.works ul {
  border-bottom: 1px solid #e0e0e0;
}

/* ===================================================Pagina Works=========================================================*/
section.featured {
  padding: 20px 10px 20px 10px;
}
section.featured h2 {
  font-size: 2.4rem;
  text-align: left;
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
/* ===================================================footer=========================================================*/

/* =============================================Para Computador Index==============================================================*/

@media (min-width: 900px) {

  section.banner {
    display: flex;
    flex-direction: row-reverse;
    text-align: left;
    padding: 7vw 7vw 2vw 7vw;
  }

  section h2 {
    text-align: left;
    font-size: 1.5rem;
  }

  section.banner .texto {
    margin-right: 7vw;
  }

  section.posts {
    padding: 5vw 7vw 2vw 7vw;
  }

  section.posts ul {
    display: flex;
    justify-content: space-between;
  }

  section.posts ul li {
    padding: 3%;
    width: 45%;
  }

  section.works {
    padding: 5vw 7vw 2vw 7vw;
  }

  section.works ul {
    display: flex;
    justify-content: space-between;
  }

  section.works ul li {
    padding: 15px;
    width: 45%;
  }

  section.works h3 {
    padding: 15px 0px 15px 0;
  }

  section.works ul li p.info {
    padding: 10px 0 10px 0;
  }

  section.works ul {
    border-bottom: none;
  }
}

</style>
