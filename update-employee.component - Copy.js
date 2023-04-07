import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
let UpdateEmployeeComponent = class UpdateEmployeeComponent {
    constructor(route, router, employeeService) {
        this.route = route;
        this.router = router;
        this.employeeService = employeeService;
    }
    ngOnInit() {
        this.employee = new Employee();
        this.id = this.route.snapshot.params['id'];
        this.employeeService.getEmployee(this.id)
            .subscribe(data => {
            console.log(data);
            this.employee = data;
        }, error => console.log(error));
    }
    updateEmployee() {
        this.employeeService.updateEmployee(this.id, this.employee)
            .subscribe(data => {
            console.log(data);
            this.employee = new Employee();
            this.gotoList();
        }, error => console.log(error));
    }
    onSubmit() {
        this.updateEmployee();
    }
    gotoList() {
        this.router.navigate(['/employees']);
    }
};
UpdateEmployeeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-update-employee',
        templateUrl: './update-employee.component.html',
        styleUrls: ['./update-employee.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
        EmployeeService])
], UpdateEmployeeComponent);
export { UpdateEmployeeComponent };
//# sourceMappingURL=update-employee.component.js.map