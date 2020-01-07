import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

let Song = EmberObject.extend({
    title: '',
    band: '',
    rating: 0
});

const Band = EmberObject.extend({
    name: '',
    slug: '',
    songs: []
});

export default Route.extend({
    model() {

        // Songs
        // -----
        let blackDog = Song.create({
            title: 'Black Dog',
            band: 'Led Zeppelin',
            rating: 3
        });

        let yellowLedbetter = Song.create({
            title: 'Yellow Ledbetter',
            band: 'Pearl Jam',
            rating: 4
        });

        let pretender = Song.create({
            title: 'The Pretender',
            band: 'Foo Fighters',
            rating: 2
        });

        let daughter = Song.create({
            title: 'Daughter',
            band: 'Pearl Jam',
            rating: 5
        });

        // Bands
        // -----
        let ledZeppelin = Band.create({
            name: 'Led Zeppelin',
            name: 'led-zeppelin',
            songs: A([blackDog])
        });

        let pearlJam = Band.create({
            name: 'Pearl Jam',
            name: 'pearl-jam',
            songs: A([yellowLedbetter, daughter])
        });

        let fooFighters = Band.create({
            name: 'Foo Fighters',
            name: 'foo-fighters',
            songs: A([pretender])
        });

        return A([ledZeppelin, pearlJam, fooFighters]);
    }
});