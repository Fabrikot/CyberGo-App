<template>

    <div class="grid-container-element">
        <meta charset="utf-8" />

        <ul class="barre">
            <img src='data:image/png;base64,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Oi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOmYyOWFiMzFmLTdlZDAtNGYzMC04NjRhLTAyMmY1YTk5YzJkYyIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplOTdjMjY0ZS1iNDRiLTRiMGQtODhhOS1hOWNkZGM4NTg1MjYiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNzk2NDUwZS1iMDI0LTQyYjEtYjlkMi02MTI3NzI0ZTJlMWMiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTcwMzE1OTkzNTM4OTY2OSIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjMwIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5ZmJhMWMxLTY2ZDYtNGRjOS05ODhiLTQxMDU1ZWUwNzhhZiIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMy0xMi0yMVQxMjo1ODo1NSIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5QLF8cAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5wwVCzo39ONfoQAAIABJREFUeJztnXd4XMW5uN+Zs7vq3ZKsYluuWC5yBxdsegw2CTeQkHuBhAAXEhIgJDfhl164yb2EFFKAJITiQCCkEBJu6GCKC+Au94arZFmSJdlW1+6Z7/fH2ZUlW7JWK7nBvM/jB85qz8w3Z8/5zjfzlQGLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLB861KkWoDesLL9XDrbuRgHKBLhgxH1nlPwWi+XM4oxSML9ekicNVKAEdDDAxIE38pHi355RY7BYLGcOZ5xyWbXvZxLwB/CpOEYPuOW48v+j9HKpDC7H5ySSpAvJThpNQfoMRg+48Ywbt8ViOfmclopi2Z7vSX2olsZgNcn+dC4cFpuV+MLGq2Xzob9j/CEwgGgcSaEo5RI+PvZvp+XYLRbL6cNpoyQ2Vj4uuw79i111b9IiVYhSiNIo48dHPINSZzEwZTJZ8SM5K/szUcv9t82Xyc6DL6KVwq+TECNkOSVcN/Wd02bsFovl9OSk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' width="50%"/>
            <li><a href="/mymenu">Home</a></li>
            <li><a href="/category">Categories</a></li>
            <li><a class="active" href="/questionnaire">Questionnaire</a></li>
            <li><a href="/wip">WIP</a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Secret</a>
                <div class="dropdown-content">
                    <li><a href="/mymenu">Secret1</a></li>
                    <li><a href="/mymenu">Secret2</a></li>
                    <li><a href="/mymenu">Secret3</a></li>
                </div>
            </li>
        </ul> 
    <div class="home">
        <select class="select" v-model="selecteduser">
            <option disabled value="">Please select one</option>
            <option value="1">Fab</option>
            <option value="2">Tyrion</option>
        </select>

        <div class="gr1">
            <ul id="categs" class="reveal" v-for="categ in catname" :key="'C'+categ.id">
                <h1>{{categ.val}}</h1>
                <li v-for="question in questions[categ.id]" :key="'Q'+question.nbquest">
                    <p>{{question.val}}</p>
                    <select :id="question.nbquest" @change="onChangehandle(question, $event)" :value="question.selectname">
                        <option v-for="option in options[question.nbquest]" :key="question.nbquest+'O'+option.val" :value="option.val">
                            {{ option.text }}
                        </option>
                    </select>
                </li>
            </ul>

        </div>



    </div>
    </div>

</template>


<script>
    async function getQuestionData() {
        const apiUrl = 'http://localhost:5032/api/NotesUser/loadQuestionnaire'; //call which returns all the questions and possible answers of the first questionnaire

        // Make a GET request
        const rep = await fetch(apiUrl, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return rep.json()
    }
    async function getUserData(selecteduser) {
        const apiUrl = 'http://localhost:5032/api/NotesUser/basic/'+selecteduser;   // call wich returns basic needed data of the user's grades

        // Make a GET request
        const rep = await fetch(apiUrl, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return rep.json()
    }
    async function postUserNote(selecteduser,questionid,valnote) {
        const apiUrl = 'http://localhost:5032/api/NotesUser/';

        // Make a GET request
        const rep = await fetch(apiUrl, {
            body: JSON.stringify({  //only need these 3 to create new grade
                "val_note": valnote,
                "questionId": questionid,
                "userId": selecteduser
            }),
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return rep.json()
    }
    async function updateUserNote(noteid, selecteduser, questionid, valnote) {
        const apiUrl = 'http://localhost:5032/api/NotesUser/'+noteid;

        // Make a GET request
        const rep = await fetch(apiUrl, {
            body: JSON.stringify({  //only need these 4 to update grade
                "id":noteid,
                "val_note": valnote,
                "questionId": questionid,
                "userId": selecteduser
            }),
            method: "PUT",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return rep.json()
    }
     export default {
        name: 'MyStats',
        beforeMount() {
            window.addEventListener("scroll", this.handleScroll);
            getQuestionData().then((rep) => {
                this.userdata = rep     //data to load all questions
                getUserData(this.selecteduser).then((answ) => {
                    var valfound = false;
                    this.useranswerdata = []
                    for (let k = 0; k < this.userdata.length; k++) {
                        for (let j = 0; j < answ.length; j++) {
                            if (answ[j].questionId == this.userdata[k].questionId) {
                                valfound = true;
                                this.useranswerdata.push(answ[j])
                            }
                        }
                        if (valfound == false)
                            this.useranswerdata.push(0) //to display correctly when we don't have all the questions answered
                        valfound = false;
                    }
                    this.loadcharts()
                })
            })
            

        },
        unmounted() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        watch: {
            selecteduser: {
                handler() {
                    getQuestionData().then((rep) => {
                        this.userdata = rep     //data to load all questions
                        getUserData(this.selecteduser).then((answ) => {
                            this.useranswerdata=[]
                            var valfound = false;
                            for (let k = 0; k < this.userdata.length; k++) {
                                for (let j = 0; j < answ.length; j++) {
                                    if (answ[j].questionId == this.userdata[k].questionId) {
                                        valfound = true;
                                        this.useranswerdata.push(answ[j])
                                    }
                                }
                                if (valfound == false)
                                    this.useranswerdata.push(0) //to display correctly when we don't have all the questions answered
                                valfound = false;
                            }
                            this.loadcharts()
                        })
                    })
                }
            }

        },
        methods: {
            loadcharts() {
                this.values = [];
                this.questions = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];          //reset everything for new graphs and user
                this.options = []
                var catnametemp = ["first cat"];
                this.catname = [];
                var noteid;
                for (let j = 0; j < this.userdata.length; j++) {
                    catnametemp.push(this.userdata[j].question.categories.name)       //load wanted category name
                    this.options.push([])
                    for (let z = 0; z < this.userdata[j].question.choices.length; z++) {
                        this.options[j].push({ text: this.userdata[j].question.choices[z].choiceText, val: this.userdata[j].question.choices[z].choiceVal })
                    }
                    if (this.useranswerdata[j] != undefined) 
                        noteid = this.useranswerdata[j].id  //to get the grade id for the update method
                    else
                        noteid = 0;
                    this.questions[this.userdata[j].question.categories.id - 1].push({ nbquest: j, id:noteid, val: this.userdata[j].question.questionTxt, selectname:'select'+j});
                    this.values.push(this.userdata[j].val_note)
                    
                }
                for (let k = 1; k < catnametemp.length; k++) {
                    if (catnametemp[k] != catnametemp[k - 1]) {
                        this.catname.push({ val: catnametemp[k], id: this.catname.length })
                    }
                }
                this.$nextTick(() => {  //we wait for the next update to continue and reveal
                    var reveals = document.querySelectorAll(".reveal");
                    reveals[0].classList.add("active");

                    var lastcategory = 0;
                    for (let p = 0; p < this.userdata.length; p++) {    //here we load the answers the user submitted to the questionnaire
                        if ((this.userdata[p].question.categories.id) != lastcategory) {
                            lastcategory = this.userdata[p].question.categories.id;     //to avoid repetition
                            for (let x = 0; x < this.questions[this.userdata[p].question.categories.id - 1].length; x++) {
                                if ((this.useranswerdata[this.questions[this.userdata[p].question.categories.id - 1][x].nbquest] != 0))
                                    this.questions[this.userdata[p].question.categories.id - 1][x].selectname = this.useranswerdata[this.questions[this.userdata[p].question.categories.id - 1][x].nbquest].val_note
                            }
                        }
                    }
                })

            },
            onChangehandle: function (question, event) {
                if (typeof question.selectname === 'number') {
                    console.log("Update Method User : " + this.selecteduser + " q" + event.target.id+1 + " id : " + question.id + " : " + question.selectname + " => " + parseInt(event.target.value))
                    updateUserNote(question.id, this.selecteduser, parseInt(event.target.id) + 1, parseInt(event.target.value)).then((rep) => {
                        console.log(rep)
                    })
                } else {
                    console.log("Create Method User : " + this.selecteduser + " q" + event.target.id[0] + " => " + parseInt(event.target.value))
                    postUserNote(this.selecteduser, parseInt(event.target.id) + 1, parseInt(event.target.value)).then((rep) => {
                        console.log(rep)
                    })
                }
                question.selectname = parseInt(event.target.value);  // Actual assignment

            },
            handleScroll() {
                var reveals = document.querySelectorAll(".reveal");
                for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 300;
                    if (elementTop < windowHeight - elementVisible) {
                        reveals[i].classList.add("active");
                    } 
                }
            }
        },
        data() {
            return {
                selecteduser: 1,
                userdata: [],
                useranswerdata:[],
                tabfix: 0,
                questions: [],
                values: [],
                listnotes: [],
                catname: [" "],
                options: [],
            }
        }
    };
</script>

<style scoped>
    p {
        font-family: 'Franklin Gothic Medium', Arial, sans-serif;
        color: rgb(64,64,64);
        display: inline-block;
    }
    span {
        font-family: 'Franklin Gothic Medium', Arial, sans-serif;
        vertical-align:top;
        margin:5px 0 0;
        font-weight:600;
        color: rgb(64,64,64);
        display: inline-block;
    }


    h1 {
        font-weight: 600;
        color: rgb(48,48,48);
        width: 450px;
        padding-block: 0 0 50px;
        display: inline-block;
        vertical-align: top;
    }

    .select {
        width: 10%;
        height: 32px;
        display: block;
    }

    select {
        width: 40%;
        margin: 4px 4px 4px 4px;
        height: 32px;
        display:block;
    }
    .reveal {
        position: relative;
        transform: translateY(30px);
        opacity: 0;
        transition: 1s all ease;
    }

    .reveal.active {
        transform: translateY(0);
        opacity: 1;
    }

    .home {
        position: absolute;
        width: 69%;
        height: 1650%;
        border: 15px solid darkslategrey;
        padding: 20px 50px;
        margin: 0px 0px 0px 21%;
        display: inline-block;
        border-radius: 8px;
    }
    

    .barre {
        position: fixed; /* Make it stick, even on scroll */
        display: inline-block;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 20%;
        background-color: #f1f1f1;
        height: 100%; /* Full height */
        overflow: auto; /* Enable scrolling if the sidenav has too much content */
    }
    .barre a {
        display: block;
        color: #000;
        padding: 8px 16px;
        text-decoration: none;
    }
    .barre a.active {
        background-color: #8ecd00;
        color: white;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .barre a:hover:not(.active) {
        background-color: #555;
        color: white;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content {
        display: none;
        right: 0;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 8px 16px;
        width: 250px;
        text-decoration: none;
        display: block;
    }

</style>