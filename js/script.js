Vue.config.devtools = true;

const vueApp = new Vue({
  el: "#root",
  data: {
    message: "Ciao Vue",
    classiH1: "centra_testo",
    titoloH1: "Titolo stampato con Vue ",
    immagine:"img/Logo.png",
    descrizione:"immagine caricata da Vue",
    classImg:"posiziona_immagine"
  },
 
});


console.log(vueApp);

