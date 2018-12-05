const assert = require('assert');
const fakeToDo = require('../index');

it('function getToDo', function(){
    fakeToDo.getToDo();
})

it('function addToDo', function(){
    fakeToDo.addToDo("Wash the car", "hour 8", "Ciccio");
    fakeToDo.addToDo("Wash the house", "hour 7", "Lory");
    fakeToDo.addToDo("Dinner", "hour 9pm", "Turi");
    fakeToDo.addToDo("Go to airstyle", "hour 3pm", "Alfio");
    fakeToDo.addToDo("Remember to work", "hour 9am", "Ciccio");
    fakeToDo.addToDo("Does the crazy", "hour 5pm", "Turi");
    fakeToDo.addToDo("Try the new iphone", "hour 10am", "Ciccio");
    fakeToDo.getToDo();
})

it('function deleteToDoById', function(){
    fakeToDo.deleteToDoById(3);
})

it('function putCompletedById', function(){
    fakeToDo.putCompletedById(4);
    fakeToDo.putCompletedById(2);
    //questa funzione fa passare da False a True completed
})

it('function getToDoByUser', function(){
    fakeToDo.getToDoByUser("Ciccio");
    assert.equal(fakeToDo.getToDoByUser("Ciccio").length, 3);
})

it('function getTodoByCompleted', function(){
    fakeToDo.getToDoByCompleted(true);
    assert.equal(fakeToDo.getToDoByCompleted(true).length, 2);
})