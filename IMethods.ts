interface IMethosEstructure {
    front(): number;
    final(): number;
    add_item(item: number): void;
    remove_item(): number;
    is_empty(): boolean;
    items(): Array<number>;
}

export {
    IMethosEstructure
}