"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_paginate_component_1 = require("../app/app-paginate.component");
var accounts_component_1 = require("./accounts.component");
var accounts_new_component_1 = require("./accounts-new.component");
var accounts_edit_component_1 = require("./accounts-edit.component");
var accounts_view_component_1 = require("./accounts-view.component");
var appRoutes = [
    { path: 'accounts', component: accounts_component_1.AccountsComponent },
    { path: 'accounts/new', component: accounts_new_component_1.AccountsNewComponent },
    { path: 'accounts/:id', component: accounts_view_component_1.AccountsViewComponent },
    { path: 'accounts/:id/edit', component: accounts_edit_component_1.AccountsEditComponent },
];
var AccountsModule = (function () {
    function AccountsModule() {
    }
    return AccountsModule;
}());
AccountsModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
        ],
        declarations: [
            accounts_component_1.AccountsComponent,
            accounts_view_component_1.AccountsViewComponent,
            accounts_edit_component_1.AccountsEditComponent,
            accounts_new_component_1.AccountsNewComponent,
            app_paginate_component_1.AppPaginateComponent,
        ],
    })
], AccountsModule);
exports.AccountsModule = AccountsModule;
//# sourceMappingURL=accounts.module.js.map