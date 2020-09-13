import {Queue} from './Queue'; 
import {Stack} from './Stack';
import {IMethosEstructure} from './IMethods';
import {List} from './List';

function instance_structure(structure: any){
    const instance: any = new structure([])
    return instance;
}

const stack = instance_structure(Stack);
const queue = instance_structure(Queue);
const list: List = new List();

function timing(time: number) {
    return time;
}

function data_timing(structure: IMethosEstructure, time: number, item?: number | any): Promise<number> {
    structure.add_item(item);
    return new Promise( (resolve: any, reject: any) => {
        setTimeout(() => {
            if ( structure.is_empty() ) reject(0);
            const item: number = structure.remove_item();
            resolve(item);
        },timing(time) );
    });
}

data_timing(stack, 2000, 1 )
    .then(item_of_stack => {
        console.log('soy el item de la pila: ', item_of_stack);
        console.log( queue.items(), ' soy la cola antes de agregar' );
        queue.add_item(item_of_stack);
        console.log( queue.items(), ' soy la cola después de agregar' );
        return data_timing(queue, 4000, item_of_stack);
    })
    .then(item_of_queue => {
        console.log(item_of_queue, 'item de la cola');
        list.add_item( item_of_queue );
        console.log('soy la cabeza: ', list.head_linked_list() );
        console.log( 'soy el tamaño: ', list.size() ); 
     })
    .catch(e => {
        console.log('no hay items en la estructura: ', e);
    })

