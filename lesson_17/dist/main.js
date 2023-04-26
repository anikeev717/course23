!(function () {
  "use strict";
  const o = function () {
      let o =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 256;
      return Math.floor(Math.random() * o);
    },
    t = o();
  console.log(t, `rgb(${o()},${o()},${o()})`);
})();
