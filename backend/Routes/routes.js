const express = require('express')
const routes = express.Router()
const { create, getAllEmployees, getEmployee, deleteEmployee, updateEmployee } = require('../Controllers/employeeController');
const { multerCloudFileUploader } = require('../Middlewears/fileLoader');


routes.get('/', (req, res) => {
    res.send('Data has been send.')
})

routes.post('/create', multerCloudFileUploader.single('profileimage'), create)
routes.put('/updateEmployee/:id', multerCloudFileUploader.single('profileimage'), updateEmployee)
routes.get('/getAllEmployees' , getAllEmployees);
routes.get('/getEmployee/:id' , getEmployee);
routes.delete('/deleteEmployee/:id' , deleteEmployee);


module.exports = routes