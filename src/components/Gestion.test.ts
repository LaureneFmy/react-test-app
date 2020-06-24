import combat from './Gestion';
import onClick from './Gestion';
import color from './Gestion';
import primary from './Gestion';

it('test', () => {
    expect(onClick).toEqual(combat);
});

it('test', () => {
    expect(color).toEqual(primary);
});