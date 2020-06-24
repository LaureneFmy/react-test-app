import onChangeClass from './Formulaire';
import choixClass from './Formulaire';
import onSubmit from './Formulaire';
import ajouterHeros from './Formulaire';

it('test', () => {
    expect(onChangeClass).toEqual(choixClass)
});

it('test', () => {
    expect(onSubmit).toEqual(ajouterHeros)
});