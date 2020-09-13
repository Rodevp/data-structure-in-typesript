import {Nodo} from './Node';

class List {
    private head: any;
    constructor() {
        this.head = null;
    }

    public add_item(value: number) {
        const nodo: Nodo = new Nodo(value);
        nodo.add_item(this.head);
        this.head = nodo;
    }

    public size(): number {
        let nodo_current: Nodo = this.head;
        let accountant: number = 0;
       
        while (nodo_current) {
            accountant = accountant + 1;
            nodo_current = nodo_current.next_item();
        }
        return accountant;
    }

    public head_linked_list(): number {
        return this.head.value
    }

}

export {
    List
}