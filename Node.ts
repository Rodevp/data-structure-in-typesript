class Nodo {
    readonly value: number;
    private next: any;

    constructor(item: number) {
        this.value = item;
        this.next = null
    }

    public add_item(value_item: any): void {
        this.next = value_item;
    }

    public next_item(): any {
        return this.next
    }

}

export {
    Nodo
}