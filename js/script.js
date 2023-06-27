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
    return {
      listEmail: [],
      maxEmail: 10,
    };
  },
  methods: {
    getRandomEmail() {
      axios.get(url).then((res) => {
        const result = res.data.response;
        this.listEmail.push(result);
      });
    },
  },
  created() {
    for (let i = 0; i < this.maxEmail; i++) {
      this.getRandomEmail();
    }
  },
});

// La monto nell'elemento HTML

app.mount("#root");
