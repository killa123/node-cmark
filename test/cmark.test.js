/**
 * Created by killa on 10/07/2017.
 */
'use strict';
const cmark = require('../index');

describe('test cmark', () => {
  describe('empty string', () => {
    it('should success', () => {
      console.log(cmark.toHtml(''))
    });
  });

  describe('null', () => {
    it('should success', () => {
      cmark.toHtml(null);
    });
  });

  describe('undefined', () => {
    it('should success', () => {
      let a;
      cmark.toHtml(a);
    });
  });

  describe('normal', () => {
    it('should success', () => {
      let a = `
# h1 title
## h2 title
### h3 title
#### h4 title
##### h5 title
###### h6 title

content content content

![img1](https://www.w3schools.com/css/paris.jpg "imgtitle" "500x500") 
`;
      console.log(cmark.toHtml(a));
    });
  });
});