'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-24347413.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["varaus-button_2.cjs",[[1,"varaus-button",{"disabled":[4],"type":[1],"icon":[1],"action":[16]}],[1,"varaus-form-field",{"icon":[1],"label":[1],"disabled":[4],"type":[1],"validationError":[8,"validation-error"],"name":[1],"placeholder":[1],"value":[1537]}]]],["varaus-sign-in-form.cjs",[[1,"varaus-sign-in-form",{"error":[1],"success":[1],"action":[16],"federatedAction":[16],"email":[32],"password":[32],"emailError":[32],"passwordError":[32],"loading":[32]}]]],["varaus-icon.cjs",[[1,"varaus-icon",{"icon":[1]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
