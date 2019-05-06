import { networkInterfaces } from "os";

new Vue({
    el: '#app',
    data: {
        tasks: [],
        newTask: {
            id: 0,
            time: new Date(),
            title: "",
            desc: ""
        }
    },
    watch: {
        value(val) {
            this.tasks.find(t => t === val);
        }
    },
    methods: {
        addTask() {
            this.tasks.push({
                id: this.tasks.length + 1,
                time: this.newTask.time,
                title: this.newTask.title,
                desc: this.newTask.desc
            });
            this.newTask = {...arguments};
        },
        removeTask(id) {
            this.tasks.splice(id, 1);
        },
        editTask(task) {
            this.tasks.find(t => {
                if(t.id === task.id) {
                    t = {
                        time: this.value.time,
                        title: this.value.title,
                        desc: this.value.desc
                    };
                }
            })
        }
    },
});
