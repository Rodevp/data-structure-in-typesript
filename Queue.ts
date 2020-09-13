class Queue {
    readonly queue: Array<number>;

    constructor (data: Array<number>) {
        this.queue = data;
    }

    public add_item = (item: number): void => {
        this.queue.unshift(item);
    }

    public remove_item = (): number => {
        const item: number | any = this.queue.pop();
        return item; 
    }

    public front = (): number => {
        return this.queue[this.queue.length - 1]
    }

    public final = (): number => {
        return this.queue[0]
    }

    public is_empty = (): boolean => {
        if ( this.queue.length === 0 ) return true;
        return false
    }

    public items = (): Array<number> => {
        return this.queue;
    }

}

export {
    Queue
}