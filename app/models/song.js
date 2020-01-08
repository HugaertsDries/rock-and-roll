import Model, {attr, belongTo} from '@ember-data/model';

export default Model.extend({
    title: attr(),
    rating: attr('number'),
    band: belongTo() // inferred to be band,
});
