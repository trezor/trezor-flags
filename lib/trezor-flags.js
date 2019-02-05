'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var TREZOR_FLAG_KEYS = ['hasEmail', 'hasBookmark'];
var Flags =
function () {
  function Flags() {
    _classCallCheck(this, Flags);
  }
  _createClass(Flags, null, [{
    key: "isFlagPresent",
    value: function isFlagPresent(flag, trezorSavedNumber) {
      var flagMask = Flags._flagToMask(flag);
      return (trezorSavedNumber & flagMask) === flagMask;
    }
  }, {
    key: "flagToInt",
    value: function flagToInt(flag) {
      var index = Flags._getIndex(flag);
      return 1 << index;
    }
  }, {
    key: "setFlag",
    value: function setFlag(flag, trezorSavedNumber) {
      return Flags.flagToInt(flag) | trezorSavedNumber;
    }
  }, {
    key: "_flagToMask",
    value: function _flagToMask(flag) {
      var index = Flags._getIndex(flag);
      return 1 << index;
    }
  }, {
    key: "_getIndex",
    value: function _getIndex(flag) {
      var index = TREZOR_FLAG_KEYS.indexOf(flag);
      if (index < 0) {
        throw new Error("[Flags] flag ".concat(flag, " is not allowed"));
      }
      return index;
    }
  }]);
  return Flags;
}();

exports.TREZOR_FLAG_KEYS = TREZOR_FLAG_KEYS;
exports.Flags = Flags;
