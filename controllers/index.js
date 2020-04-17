const Todo = require ('../models/Todo');

const getIndex =  (req, res) => {
    // console.log('Ctr getIndex');

    Todo.find({}, (err, todos) => {
        //console.log(todos);
        if (err) {
            console.log(err);
        }
        res.render('index', {
            todos: todos
        });
    });
}

const postIndex = (req, res) => {
    //console.log('Ctr postIndex ' + req.body.title);
    const newTodo = new Todo({
        title : req.body.title
    });
    newTodo.save((err)=>{
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    });
}

const deleteIndex = (req, res) => {
    console.log('>>>> delete ' + req.params.id);
    const {id} = req.params;
    Todo.findByIdAndDelete(id, (err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    }); 
}


module.exports = {
    getIndex: getIndex,
    postIndex: postIndex,
    deleteIndex : deleteIndex
}