import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
let SearchEmployeeComponent = class SearchEmployeeComponent {
    constructor(employeeService) {
        this.employeeService = employeeService;
        this.searchResult = [];
        this.searchKeyword = '';
    }
    ngOnInit() {
        this.employeeService.getEmployeesList().subscribe((res) => {
            this.employees = res;
        });
    }
    getSearchEmployee() {
        setTimeout(() => {
            if (this.searchKeyword === '') {
                this.searchResult = [];
            }
            else {
                //this.searchResult = this.employees.filter((item: Employee) => this.searchKeyword.includes(item?.firstName));
                this.searchResult = this.employees.filter((x) => x.firstName.includes(this.searchKeyword));
            }
        }, 500);
    }
};
SearchEmployeeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search-employee',
        templateUrl: './search-employee.component.html',
        styleUrls: ['./search-employee.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [EmployeeService])
], SearchEmployeeComponent);
export { SearchEmployeeComponent };
//# sourceMappingURL=search-employee.component.js.map