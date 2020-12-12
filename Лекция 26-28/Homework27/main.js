Vue.component('diagrams', {
    data() {
        return {
            listOfDiagrams: [],
        }
    },
    methods: {
        sortDiagrams() {
            this.listOfDiagrams.sort((a, b) => (a.diagramHeight > b.diagramHeight) ? 1 : -1);
            this.setToLocalStorage();
        },
        setToLocalStorage() {
            localStorage.setItem('listOfDiagrams', JSON.stringify(this.listOfDiagrams));
        },
    },
    template: `
        <div>
            <transition-group tag="div" name="list" class="diagrams">
                <diagram
                    v-for="item in listOfDiagrams"
                    :key="item.diagramName"
                    :sendedDiagram="item"
                    @toLocalStorage="setToLocalStorage"
                />
            </transition-group>

            <hr />

            <button
                class="sort_btn"
                @click="sortDiagrams"
            >Sort</button>
        </div>
    `,
    created() {
        const item = localStorage.getItem('listOfDiagrams');
        this.listOfDiagrams = (item) ? JSON.parse(item) : listOfDiagrams;
    }
});

Vue.component('diagram', {
    props: ['sendedDiagram'],
    methods: {
        toLocalStorage() {
            this.$emit('toLocalStorage');
        }
    },
    computed: {
        colorColumn() {
            const diagramColor = this.sendedDiagram.diagramColor;
            return (diagramColor) ? diagramColor : 'black';
        },
        getHeightColumn() {
            const diagramHeight = this.sendedDiagram.diagramHeight;
            return (diagramHeight) ? diagramHeight : 100;
        },
    },
    template: `
        <div class='diagram'>
            <div 
                class="column"
                :class="colorColumn"
                :style="{height: getHeightColumn + 'px'}"
            ></div>
            <input 
                type="range" 
                min="100"
                max="300"
                v-model="sendedDiagram.diagramHeight"
                @change="toLocalStorage"
            >
        </div>
    `
});

const app = new Vue({
    el: "#app",
});