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
            const JSONlistOfDiagrams = JSON.stringify(this.listOfDiagrams);
            localStorage.setItem('listOfDiagrams', JSONlistOfDiagrams);
        },
    },
    template: `
        <div>
            <div class="diagrams">
                <diagram
                    v-for="item in listOfDiagrams"
                    :sendedDiagram="item"
                    @toLocalStorage="setToLocalStorage"
                />
            </div>

            <hr />

            <button
                @click="sortDiagrams"
            >Sort</button>
        </div>
    `,
    created() {
        const item = localStorage.getItem('listOfDiagrams');
        console.log(this.listOfDiagrams);
        this.listOfDiagrams = (item) ? JSON.parse(item) : listOfDiagrams
    }
    // через хук брать данные из localstorage если есть.
});

Vue.component('diagram', {
    props: ['sendedDiagram'],
    data() {
        return {
            // rangeValue: this.getFormLocalStorage(),
        }
    },
    methods: {
        toLocalStorage() {
            this.$emit('toLocalStorage');
        }
        // setToLocalStorage(event, value = this.rangeValue) {
        //     console.log(value);
        //     localStorage.setItem(this.sendedDiagram.diagramName, value)
        // },
        // getFormLocalStorage() {
        //     const storageValue = localStorage.getItem(this.sendedDiagram.diagramName);
        //     let value = storageValue;
        //     if (!storageValue) {
        //         value = this.getHeightColumn();
        //         this.setToLocalStorage(null, value)
        //     }
        //     return value
        // },
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
` // событе @change добавлять в localstor  sendedDiagram. Возможно передать событие на родительский блок, а он уже будет добавлять весь массив.
});

// Vue.component('column', {
//     template: `
//         <div class="column"></div> 
//     `
// })

const app = new Vue({
    el: "#app",
});