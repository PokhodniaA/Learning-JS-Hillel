Vue.component('diagrams', {
    data() {
        return {
            listOfDiagrams: listOfDiagrams,
        }
    },
    template: `
        <div class="diagrams">
            <diagram
                v-for="item in listOfDiagrams"
                :sendedDiagram="item"
            />
        </div>
    `
});

Vue.component('diagram', {
    props: ['sendedDiagram'],
    data() {
        return {
            rangeValue: this.getFormLocalStorage(),
        }
    },
    methods: {
        setToLocalStorage(event, value = this.rangeValue) {
            console.log(value);
            localStorage.setItem(this.sendedDiagram.diagramName, value)
        },
        getFormLocalStorage() {
            const storageValue = localStorage.getItem(this.sendedDiagram.diagramName);
            let value = storageValue;
            if (!storageValue) {
                value = this.getHeightColumn();
                this.setToLocalStorage(null, value)
            }
            return value
        },
        getHeightColumn() {
            const diagramHeight = this.sendedDiagram.diagramHeight;
            return (diagramHeight) ? diagramHeight : 100;
        }
    },
    computed: {
        colorColumn() {
            const diagramColor = this.sendedDiagram.diagramColor;
            return (diagramColor) ? diagramColor : 'black';
        },

    },
    template: `
        <div class='diagram'>
            <column 
                :class="colorColumn"
                :style="{height: rangeValue + 'px'}"
            />
            <input 
                type="range" 
                min="100"
                max="300"
                v-model="rangeValue"
                @change="setToLocalStorage"
            >
        </div>
`
});

Vue.component('column', {
    template: `
        <div class="column"></div> 
    `
})

const app = new Vue({
    el: "#app",
});