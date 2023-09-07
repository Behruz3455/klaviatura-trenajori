function _0x22ef(_0x1b0a23, _0x115e83) { var _0x55cfd8 = _0x55cf(); return _0x22ef = function (_0x22ef06, _0x3ef34a) { _0x22ef06 = _0x22ef06 - 0x6d; var _0x40d81c = _0x55cfd8[_0x22ef06]; return _0x40d81c; }, _0x22ef(_0x1b0a23, _0x115e83); } var _0x41a967 = _0x22ef; (function (_0x46ceef, _0x4a410a) { var _0x35c3c2 = _0x22ef, _0x1447e8 = _0x46ceef(); while (!![]) { try { var _0x13a30b = -parseInt(_0x35c3c2(0x6e)) / 0x1 + -parseInt(_0x35c3c2(0x73)) / 0x2 + -parseInt(_0x35c3c2(0x70)) / 0x3 + parseInt(_0x35c3c2(0x6d)) / 0x4 + parseInt(_0x35c3c2(0x71)) / 0x5 + -parseInt(_0x35c3c2(0x6f)) / 0x6 * (-parseInt(_0x35c3c2(0x76)) / 0x7) + parseInt(_0x35c3c2(0x72)) / 0x8; if (_0x13a30b === _0x4a410a) break; else _0x1447e8['push'](_0x1447e8['shift']()); } catch (_0x764a30) { _0x1447e8['push'](_0x1447e8['shift']()); } } }(_0x55cf, 0xb0bfa), console[_0x41a967(0x74)](_0x41a967(0x75))); function _0x55cf() { var _0x375885 = ['8737056xjYLWH', '1325790eVtMgs', 'log', 'Behruz', '728thcvur', '4809928FNNVrA', '687197XSHxit', '15504Wbeoul', '1951434TGZizK', '805910cCeFLp']; _0x55cf = function () { return _0x375885; }; return _0x55cf(); }

// let texts = document.querySelectorAll("p");

// texts.forEach((text) => {
//     text.addEventListener('click', () => {
//         text.classList.toggle ("rang");
//         text.innerHTML  = "Behruz";
//         // text.classList.toggle ("rang");
//         // text.classList.remove ("rang");
//     });
// });

let header = document.querySelector('header');
let btn = document.querySelector('button');

btn.addEventListener("click", () => {
    header.classList.toggle("tun");

    if (btn.innerHTML == "Tun") {
        btn.innerHTML = "Kun";
    } else {
        btn.innerHTML = "Tun";
    }
});