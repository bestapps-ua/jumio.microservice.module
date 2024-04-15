"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiEntity {
    constructor(props) {
        try {
            this._created = props.created;
            this.__type = props._type;
            this._data = props.data || {};
            this._system = props._system;
        }
        catch (err) {
            console.log('[err init entity]', { err, name: this.getClassName() });
            throw err;
        }
    }
    getClassName() {
        let name = this.constructor.name;
        name = name.charAt(0).toLowerCase() + name.slice(1);
        return name;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get created() {
        return this._created;
    }
    set created(value) {
        this._created = value;
    }
    get internalType() {
        return this.__type;
    }
    get system() {
        return this._system;
    }
    set system(value) {
        this._system = value;
    }
}
exports.default = ApiEntity;
//# sourceMappingURL=ApiEntity.js.map