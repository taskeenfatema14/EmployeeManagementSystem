import * as tslib_1 from "tslib";
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let CreateEmployeeComponent = class CreateEmployeeComponent {
    constructor(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.employee = new Employee();
        this.submitted = false;
    }
    ngOnInit() {
    }
    newEmployee() {
        this.submitted = false;
        this.employee = new Employee();
    }
    save() {
        this.employeeService
            .createEmployee(this.employee).subscribe(data => {
            console.log(data);
            this.employee = new Employee();
            this.gotoList();
        }, error => console.log(error));
    }
    onSubmit() {
        this.submitted = true;
        this.save();
    }
    gotoList() {
        this.router.navigate(['/employees']);
    }
};
CreateEmployeeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-create-employee',
        templateUrl: './create-employee.component.html',
        styleUrls: ['./create-employee.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [EmployeeService,
        Router])
], CreateEmployeeComponent);
export { CreateEmployeeComponent };
//# sourceMappingURL=create-employee.component.js.map