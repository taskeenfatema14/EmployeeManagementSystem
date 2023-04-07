import * as tslib_1 from "tslib";
import { EmployeeService } from "./../employee.service";
import { Component } from "@angular/core";
import { Router } from '@angular/router';
let EmployeeListComponent = class EmployeeListComponent {
    constructor(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.employees = this.employeeService.getEmployeesList();
    }
    deleteEmployee(id) {
        this.employeeService.deleteEmployee(id)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    employeeDetails(id) {
        this.router.navigate(['details', id]);
    }
    updateEmployee(id) {
        this.router.navigate(['update', id]);
    }
};
EmployeeListComponent = tslib_1.__decorate([
    Component({
        selector: "app-employee-list",
        templateUrl: "./employee-list.component.html",
        styleUrls: ["./employee-list.component.css"]
    }),
    tslib_1.__metadata("design:paramtypes", [EmployeeService,
        Router])
], EmployeeListComponent);
export { EmployeeListComponent };
//# sourceMappingURL=employee-list.component.js.map