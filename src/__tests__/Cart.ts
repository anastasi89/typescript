import Cart from '../cart/Cart';
import Movie from '../items/Movie';
import Book from '../items/Book';
import MusicAlbum from '../items/MusicAlbum';

test.each([
  [undefined, 1900],
  [10, 1710],
])('method Cart.wholeSumm  %s', (sale, price) => {
  const cart = new Cart();

  cart.add(new Book(1008, 'Mstiteli', 'Viktorya', 500, 300));
  cart.add(new MusicAlbum(1009, 'Mstiteli', 'Viktorya', 500));
  cart.add(
    new Movie(10010, 'Mstiteli', 900, 'USA', 2012, 'Viktorya', 'fantasy', 1.3)
  );

  expect(cart.wholeSumm(sale)).toBe(price);
});

test('deleting Product', () => {
  const cart = new Cart();

  cart.add(new Book(1009, 'Mstiteli', 'Viktorya', 500, 300));
  cart.add(new MusicAlbum(1010, 'Mstiteli', 'Viktorya', 500));
  cart.add(
    new Movie(1011, 'Mstiteli', 900, 'USA', 2012, 'Viktorya', 'fantasy', 1.3)
  );

  cart.deleateProduct(1010);

  expect(cart.items.length).toBe(2);
});

test('add more than 1', () => {
  const cart = new Cart();
  const book = new Book(1009, 'Mstiteli', 'Viktorya', 500, 300);

  cart.add(book);
  cart.add(book);

  expect(cart.items[0].price).toBe(500);
  expect(cart.items.length).toBe(1);

});
