const EmployeeModel = require("../Models/EmployeeModel");

const create = async (req, res) => {
    try {
        const body = req.body;
        body.profileimage = req.file ? req.file.path : null;
        const employee = new EmployeeModel(body)
        await employee.save();
        res.status(201).json({
            message: "Employee Saved.",
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: "Invalid Server Error.",
            success: false,
            error: error
        })
    }
}

const getAllEmployees = async (req, res) => {
    try {
        let { limit, page, search } = req.query;
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 5;
        let skip = (page - 1) * limit;

        searchCriteria = {}
        if (search) {
            searchCriteria = {
                name: {
                    $regex: search,
                    $options: "i",  //case insensitive
                }
            }
        }

        totalEmployess = await EmployeeModel.countDocuments(searchCriteria);

        totalPages = Math.ceil(totalEmployess / limit);

        const employees = await EmployeeModel.find(searchCriteria).skip(skip).limit(limit).sort({ updatedAt: -1 })

        res.status(200).json({
            message: "All Employees.",
            success: true,
            data: {
                employees: employees,
                pagination: {
                    totalEmployess,
                    currentPage: page,
                    totalPages,
                    pageSize: limit

                }
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Invalid Server Error.",
            success: false,
            error: error.message
        })
    }
}

const getEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await EmployeeModel.findOne({ _id: id })
        res.status(200).json({
            message: "Get Employee Details.",
            success: true,
            data: employee
        })

    } catch (error) {
        res.status(500).json({
            message: "Invalid Server Error.",
            success: false,
            error: error
        })
    }
}

const updateEmployee = async (req, res) => {
    try {
        const { name, email, phone, department, salary } = req.body;
        const { id } = req.params;

        let employeData = {
            name, email, phone, department, salary, updatedAt: new Date()
        }

        if (req.file) {
            email.profileimage = req.file.path;
        }

        const updateEmployee = await EmployeeModel.findByIdAndUpdate(
            id,
            employeData,
            { new: true }
        );

        if (!updateEmployee) {
            res.status(404).json({
                message: "Employee Not Found.",
                success: false,
            })
        }

        res.status(200).json({
            message: "Employee Updated Successfully.",
            success: true,
            data: updateEmployee
        })
    } catch (error) {
        res.status(500).json({
            message: "Invalid Server Error.",
            success: false,
            error: error
        })
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteEmployee = await EmployeeModel.findByIdAndDelete({ _id: id });

        res.status(200).json({
            message: "Employee Deleted Successfully.",
            success: true,

        })

    } catch (error) {
        res.status(500).json({
            message: "Invalid Server Error.",
            success: false,
            error: error
        })
    }
}

module.exports = {
    create,
    getAllEmployees,
    getEmployee,
    deleteEmployee,
    updateEmployee
}