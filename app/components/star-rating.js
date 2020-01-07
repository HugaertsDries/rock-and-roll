import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  // tagName: 'div', outer html tag of the component DEFAULT is div.
  classNames: ['rating-panel'], // css classes on the outer tag of the component.
  rating: 0, // component arg
  maxRating: 5, // component arg

  /**
   * rating and maxRating are DEPENDED keys.
   * the function will be recomputed when one of these changes
   */
  stars: computed('rating', 'maxRating', function () {
    let stars = [];
    for (let i = 1; i <= this.maxRating; i++) {
      stars.push({rating: i, isFull: this.rating >= i});
    }
    return stars;
  })
});
