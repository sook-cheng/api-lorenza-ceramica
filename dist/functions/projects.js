"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectResidentialList = exports.getProjectCommercialList = void 0;
const inspirations_data_1 = require("../data/inspirations.data");
const getProjectCommercialList = () => {
    return [inspirations_data_1.inspirationData[1]];
};
exports.getProjectCommercialList = getProjectCommercialList;
const getProjectResidentialList = () => {
    return [inspirations_data_1.inspirationData[2]];
};
exports.getProjectResidentialList = getProjectResidentialList;
//# sourceMappingURL=projects.js.map