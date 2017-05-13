import { Item } from './models/item';

export class Config {
    public static get APP_TITLE(): string { return 'Module de livraison'; }
    public static get APP_VERSION(): string { return '1.0'; }
    public static get URL_API(): any { return { collection: '/collection' }; };

    public static get FAKE_COLLECTION(): [Item] {
        return [
            new Item({ reference: '1234', name: 'Thomas', state: 0 }),
            new Item({ reference: '3456', name: 'Gabriel', state: 1 }),
            new Item({ reference: '5678', name: 'Eloise', state: 2 })
        ]
    }
}