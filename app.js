// Setting up Veutify Boilerplate code
const { createApp } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
    setup() {
       
        const collection = [
            {
            name: "Ash", 
            wings: "Large sky wings",
            colour: "Red",
            power_description: "Breathes fire and lava, with heat-proof scales. Ash lives at the base of a volcano. He really likes hot cheetos",
            image: "ash_dragon.jpg"
            },
            {
            name: "Frosty", 
            wings: "Thick feathered wings",
            colour: "White",
            power_description: "Breathes snow and ice, with the ability to manipulate wind and snow. Frosty is half deaf but has great eyesight and smell. Her favorite animal is a penguin.",
            image: "snow_dragon.jpg"
            },
            {
            name: "Moss", 
            wings: "Stone arms and small wings",
            colour: "Green and Brown",
            power_description: "Spits acid and lifts fog. Moss has a love for mud cakes and enjoys pranking the other creatures of the swamp.",
            image: "swamp_dragon.jpg"
            }
        ];

        return {collection};
    }
}
createApp(App).use(vuetify).mount('#app');
