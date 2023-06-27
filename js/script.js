// Controllo JS
console.log("JSOK");

// Controllo Vue

console.log("Vue OK", Vue);

const url = "https://flynn.boolean.careers/exercises/api/random/mail";

// Estarpolo il metodo createApp

const { createApp } = Vue;

// Inizializzo l'app Vue

const app = createApp({
  data() {
    return {};
  },
});

// La monto nell'elemento HTML

app.mount("#root");
