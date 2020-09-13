class Stack {
    readonly stack: Array<number>;

    constructor(data: Array<number>) {
        this.stack = data;
    }

    public add_item = (item: number): void => {
        this.stack.push(item);
    }

    public remove_item = (): number => {
        const item: number | any = this.stack.pop();
        return item; 
    }

    public is_empty = (): boolean => {
        if (this.stack.length === 0) return true;
        return false
    }

    public final = (): number => {
        return this.stack[this.stack.length - 1];
    }

    public front = (): number => {
        return this.stack[0]
    }

    public items = (): Array<number> => {
        return this.stack
    }

}

export {
    Stack
}