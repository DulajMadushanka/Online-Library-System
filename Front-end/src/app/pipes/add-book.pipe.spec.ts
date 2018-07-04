import { AddBookPipe } from './add-book.pipe';

describe('AddBookPipe', () => {
  it('create an instance', () => {
    const pipe = new AddBookPipe();
    expect(pipe).toBeTruthy();
  });
});
