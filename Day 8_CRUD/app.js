const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: 'sam' }
];

app.get('/users', (req, res) => {
    res.json(users);

});


app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: 'user added', user: newUser });
});


app.put('/users/:id', (req, res) => {

    const userId = parseInt(req.params.id);
    const updatedUser = req.body;

    users = users.map(user =>

        user.id === userId ? { ...user, ...updatedUser } : user);
    res.json({ message: 'User updated', users });
});


app.delete('/users/:id', (req, res) => {
    const useerId = parseInt(req.params.id);
    user = users.filter(user => user.id !== useerId);
    res.json({ message: 'user deleted ', user });

});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});