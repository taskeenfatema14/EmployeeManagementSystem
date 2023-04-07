import * as tslib_1 from "tslib";
import { Employee } from '../employee';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
let EmployeeDetailsComponent = class EmployeeDetailsComponent {
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
    list() {
        this.router.navigate(['employees']);
    }
};
EmployeeDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-employee-details',
        templateUrl: './employee-details.component.html',
        styleUrls: ['./employee-details.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
        EmployeeService])
], EmployeeDetailsComponent);
export { EmployeeDetailsComponent };
//# sourceMappingURL=employee-details.component.js.map