import {Class} from "@babel/types";

export default class Collection {
    items: any[]
    model: any;
    constructor(items = []) {
        this.items = items
    }

    populate(items) {
        items.forEach(item => {
            this.items.push(new this.model(item))
        })
    }

    reset() {
        this.items = []
    }

    findById(id) {
        return this.items.find(i => (i.getId() || i.id) === id)
    }

    getItems() {
        return this.items
    }

    groupBy(key, list = []) {
        let arr = (list.length) ? list: this.items

        let newArr = [],
            types = {},
            i, j, cur

        for (i = 0, j = arr.length; i < j; i++) {
            cur = arr[i];
            if (!(cur[key] in types)) {
                types[cur[key]] = { [key]: cur[key], data: [] };
                newArr.push(types[cur[key]]);
            }
            types[cur[key]].data.push(cur);
        }

        return newArr
    }
}
