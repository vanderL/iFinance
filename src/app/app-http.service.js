"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AppHttpService = (function () {
    function AppHttpService(http) {
        this.http = http;
    }
    AppHttpService.prototype.builder = function (resource) {
        this.url = 'http://localhost:8000/api/' + resource;
        return this;
    };
    AppHttpService.prototype.view = function (id) {
        return this.http.get(this.url + '/' + id)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.update = function (id, data) {
        return this.http.put(this.url + '/' + id, data)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.insert = function (data) {
        return this.http.post(this.url, data)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    return AppHttpService;
}());
AppHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppHttpService);
exports.AppHttpService = AppHttpService;
//# sourceMappingURL=app-http.service.js.map