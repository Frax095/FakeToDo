toDos = [];
counter = 0;
users = ["Ciccio", "Turi", "Alfio"];

exports.getToDo = function() {

    return toDos;

}

exports.reset = function() {

    toDos = [];
    counter = 0;
    return toDos;

}

exports.addToDo = function(name, description, assignedTo){

    var toDo = {
        id: counter++,
    	name: name,
        description: description,
        completed: false,
        assignedTo: assignedTo
    }
    for(i=0; i<users.length; i++){
        if(assignedTo === users[i]){
            toDos.push(toDo);
        }
    }
    return toDos;

}

exports.deleteToDoById = function(id){

    for (var i=0; i< toDos.length; i++) {
        if (toDos[i].id === id) {
            toDos.splice(i ,1);
            return toDos;
        }
    }

}

exports.putCompletedById = function(id){

    for(var toDo of toDos) {
        if(toDo.id === id && toDo.completed === false) {
            toDo.completed = true;
            return toDo;
        }
    }

}

exports.getToDoByUser = function(user){
    filtredArrayBySpecificUser = [];
    for(var toDo of toDos){
        if(toDo.assignedTo === user){
            filtredArrayBySpecificUser.push(toDo);
        }  
    }
    return filtredArrayBySpecificUser;

}

exports.getToDoByCompleted = function(boolean){
    filtredArrayByCompleted = [];
    for(var toDo of toDos){
        if(toDo.completed === boolean){
            filtredArrayByCompleted.push(toDo);
        }  
    }
    return filtredArrayByCompleted;

}