let force = prompt('Введите силу (Н)', '');
let weight = prompt('Введите массу (кг)', '');
let acceleration = force / weight;

document.write('**************<br>',
    'Ускорение тела при силе F = ', force, ', и массе m = ', weight + ':',
    '<br>--------------------<br>',
    'a = ', acceleration,
    '<br>--------------------<br>',
    'end.');
