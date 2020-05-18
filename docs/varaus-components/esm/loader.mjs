import { a as patchEsm, b as bootstrapLazy } from './index-43543585.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["varaus-button_2",[[1,"varaus-button",{"disabled":[4],"type":[1],"icon":[1]}],[1,"varaus-form-field",{"icon":[1],"label":[1],"disabled":[4],"type":[1],"validationError":[8,"validation-error"],"name":[1],"placeholder":[1],"value":[1537]}]]],["varaus-sign-in-form",[[1,"varaus-sign-in-form",{"error":[1],"success":[1],"email":[32],"password":[32],"emailError":[32],"passwordError":[32],"loading":[32]}]]],["varaus-icon",[[1,"varaus-icon",{"icon":[1]}]]]], options);
});

export { defineCustomElements };
