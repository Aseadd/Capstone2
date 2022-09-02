/** * @jest-environment jsdom */

import modalMethods from '../modal.js';

document.body.innerHTML = `
<section class="commentSection">
</section>
`;

describe('Test the count comments method', () => {
  test('When there are 5 comments the next should be the number 6', () => {
    document.body.innerHTML = `
      <section class="commentSection">
        <p>comment 1</p>
        <p>comment 2</p>
        <p>comment 3</p>
        <p>comment 4</p>
        <p>comment 5</p>
      </section>
    `;
    expect(modalMethods.countComments()).toBe(5);
    expect(modalMethods.countComments()).not.toBe(4);
    expect(modalMethods.countComments()).not.toBe(null);
    expect(modalMethods.countComments()).not.toBe(undefined);
  });
  test('When there are no comments the next should be the number 1', () => {
    document.body.innerHTML = `
      <section class="commentSection">
      </section>
    `;
    expect(modalMethods.countComments()).toEqual(1);
    expect(modalMethods.countComments()).not.toBe(0);
    expect(modalMethods.countComments()).not.toBe(null);
    expect(modalMethods.countComments()).not.toBe(undefined);
  });
});
