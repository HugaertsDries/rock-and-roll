import Model, {attr, hasMany} from '@ember-data/model';

/**
 * no {async: false} means it's considered an async relationship
 */
export default Model.extend({
  name: attr(), // specifies that it is an attribute of the model
  description: attr(), // no param defaults to string???
  // links to the model class Song
  // !!!don't need to type 'song', can be inferred from the key!!!
  songs: hasMany('song')
});
