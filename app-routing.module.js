import * as tslib_1 from "tslib";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
const routes = [
    { path: '', redirectTo: 'employee', pathMatch: 'full' },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'add', component: CreateEmployeeComponent },
    { path: 'update/:id', component: UpdateEmployeeComponent },
    { path: 'details/:id', component: EmployeeDetailsComponent },
    { path: 'search', component: SearchEmployeeComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map