import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8085/springboot-crud-rest/api/v1/employees';
    }
    getEmployee(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createEmployee(employee) {
        return this.http.post(`${this.baseUrl}`, employee);
    }
    updateEmployee(id, value) {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }
    deleteEmployee(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
    getEmployeesList() {
        return this.http.get(`${this.baseUrl}`);
    }
};
EmployeeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], EmployeeService);
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map