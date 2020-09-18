<template>
  <div>
    <p-toast />
    <header class="lg-aa-layout__topo p-d-flex p-ai-center p-pl-4">
      <div class="p-mr-2">
        <i class="pi pi-check-circle"></i>
      </div>
      <div>Layout Padrão</div>

      <router-link class="lg-aa-layout__topo__link" to="/tarefas">Tarefas (Vuex)</router-link>
      <router-link class="lg-aa-layout__topo__link" to="/todoist">Tarefas (Todoist)</router-link>
      <router-link class="lg-aa-layout__topo__link" to="/configuracao">Configuração</router-link>
    </header>

    <section class="lg-aa-layout__conteudo">
      <section class="lg-aa-layout__conteudo__main">
        <router-view />
      </section>
    </section>

    <footer class="lg-aa-layout__rodape">
      <div class="lg-aa-layout__rodape__logo"></div>
      <div class="lg-aa-layout__rodape__copyright"></div>
    </footer>
  </div>
</template>

<script>
export default {

};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}

.lg-aa-layout {
  padding-top: 66px;
  height: 100%;
  margin: 0;
}

/* Topo */

.lg-aa-layout__topo {
  display: block;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border: 1px solid #c8cfd8;
  border-right: none;
  border-left: none;
  height: 66px;
  width: 100%;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.lg-aa-layout__topo__logotipo {
  height: 40px;
  margin-left: 20px;
}

.lg-aa-layout__topo__nomePortal {
  display: inline-block;
  margin-left: 70px;
}

@media screen and (max-width: 767px) {
  .lg-aa-layout__topo__nomePortal {
    display: none;
  }

  .lg-aa-separador--vertical {
    display: none !important;
  }
}

.lg-aa-layout__topo__link {
  padding-left: 15px;
  padding-right: 5px;
  text-decoration: none !important;
  color: var(--primary-color);
}

/* Conteudo */

.lg-aa-layout__conteudo {
  width: 100%;
  min-height: 100%;
  height: auto !important;
  height: 100%;
}

/* Conteúdo da função */

.lg-aa-layout__conteudo__main {
  display: block;
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
  z-index: 0;
}

/* Rodapé */

.lg-aa-layout__rodape {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f1f1f1;
  width: 100%;
  margin: -80px auto 0;
  height: 80px;
  position: fixed;
  bottom: 0;
}

.lg-aa-layout__rodape__logo {
  background: url("https://www.lg.com.br/site2017/uploads/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  width: 100%;
  float: left;
}

.lg-aa-layout__rodape__copyright {
  width: 100%;
  float: right;
  text-align: right;
}

.lg-aa-layout__rodape__copyright::before {
  content: "Copyright © 2020 LG lugar de gente - Todos os direitos reservados";
}

/* Utilidades */

.lg-aa-separador--vertical {
  border-left: 1px solid #c8cfd8;
  display: inline-block;
  height: 20px;
  position: absolute;
  top: 4px;
  bottom: 0;
  margin: auto;
  margin-left: -1px;
  left: 250px;
}

.lg-aa-layout a:hover,
.lg-aa-layout a:focus {
  text-decoration: none;
}
</style>
