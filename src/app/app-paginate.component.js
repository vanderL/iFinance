"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppPaginateComponent = (function () {
    function AppPaginateComponent() {
    }
    return AppPaginateComponent;
}());
AppPaginateComponent = __decorate([
    core_1.Component({
        selector: 'paginate',
        template: "\n  <div class=\"center-align\">\n    <ul class=\"pagination\">\n      <li class=\"active\"><a href=\"\">1</a></li>\n      <li class=\"waves-effect\"><a href=\"\">2</a></li>\n      <li class=\"waves-effect\"><a href=\"\">3</a></li>\n      <li class=\"waves-effect\"><a href=\"\">4</a></li>\n      <li class=\"waves-effect\"><a href=\"\">5</a></li>\n    </ul>\n    <p>Voc\u00EA tem um total de 100 registros, exibindo p\u00E1gina 3 de 30</p>\n  </div>\n  "
    })
], AppPaginateComponent);
exports.AppPaginateComponent = AppPaginateComponent;
//# sourceMappingURL=app-paginate.component.js.map