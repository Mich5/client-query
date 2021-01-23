"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.query = exports.postRouter = undefined;

require("babel-core/register");

require("babel-polyfill");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// postRouter is a function that runs serverside
// Its core function is to route all post requests passed to it based on the extracted data
var postRouter = exports.postRouter = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, db, ObjectId) {
        var _req$body, collectionName, id, query, data, options, collection;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _req$body = req.body, collectionName = _req$body.collectionName, id = _req$body.id, query = _req$body.query, data = _req$body.data, options = _req$body.options;
                        collection = db.collection(collectionName);

                        // insert a document into a collection

                        if (!(req.body.type === 'insertOne')) {
                            _context.next = 17;
                            break;
                        }

                        _context.prev = 3;
                        _context.t0 = res.status(200);
                        _context.next = 7;
                        return collection.insertOne(data);

                    case 7:
                        _context.t1 = _context.sent;
                        return _context.abrupt("return", _context.t0.json.call(_context.t0, _context.t1));

                    case 11:
                        _context.prev = 11;
                        _context.t2 = _context["catch"](3);

                        console.log(_context.t2);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t2.message }));

                    case 15:
                        _context.next = 190;
                        break;

                    case 17:
                        if (!(req.body.type === 'insertMany')) {
                            _context.next = 32;
                            break;
                        }

                        _context.prev = 18;
                        _context.t3 = res.status(200);
                        _context.next = 22;
                        return collection.insertMany(data);

                    case 22:
                        _context.t4 = _context.sent;
                        return _context.abrupt("return", _context.t3.json.call(_context.t3, _context.t4));

                    case 26:
                        _context.prev = 26;
                        _context.t5 = _context["catch"](18);

                        console.log(_context.t5);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t5.message }));

                    case 30:
                        _context.next = 190;
                        break;

                    case 32:
                        if (!(req.body.type === 'find')) {
                            _context.next = 47;
                            break;
                        }

                        _context.prev = 33;
                        _context.t6 = res.status(200);
                        _context.next = 37;
                        return collection.find(query).toArray();

                    case 37:
                        _context.t7 = _context.sent;
                        return _context.abrupt("return", _context.t6.json.call(_context.t6, _context.t7));

                    case 41:
                        _context.prev = 41;
                        _context.t8 = _context["catch"](33);

                        console.log(_context.t8);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t8.message }));

                    case 45:
                        _context.next = 190;
                        break;

                    case 47:
                        if (!(req.body.type === 'findOne')) {
                            _context.next = 62;
                            break;
                        }

                        _context.prev = 48;
                        _context.t9 = res.status(200);
                        _context.next = 52;
                        return collection.findOne(query);

                    case 52:
                        _context.t10 = _context.sent;
                        return _context.abrupt("return", _context.t9.json.call(_context.t9, _context.t10));

                    case 56:
                        _context.prev = 56;
                        _context.t11 = _context["catch"](48);

                        console.log(_context.t11);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t11.message }));

                    case 60:
                        _context.next = 190;
                        break;

                    case 62:
                        if (!(req.body.type === 'findOneById')) {
                            _context.next = 77;
                            break;
                        }

                        _context.prev = 63;
                        _context.t12 = res.status(200);
                        _context.next = 67;
                        return collection.findOne({ "_id": ObjectId(id) });

                    case 67:
                        _context.t13 = _context.sent;
                        return _context.abrupt("return", _context.t12.json.call(_context.t12, _context.t13));

                    case 71:
                        _context.prev = 71;
                        _context.t14 = _context["catch"](63);

                        console.log(_context.t14);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t14.message }));

                    case 75:
                        _context.next = 190;
                        break;

                    case 77:
                        if (!(req.body.type === 'updateOne')) {
                            _context.next = 92;
                            break;
                        }

                        _context.prev = 78;
                        _context.t15 = res.status(200);
                        _context.next = 82;
                        return collection.updateOne(query, data, options);

                    case 82:
                        _context.t16 = _context.sent;
                        return _context.abrupt("return", _context.t15.json.call(_context.t15, _context.t16));

                    case 86:
                        _context.prev = 86;
                        _context.t17 = _context["catch"](78);

                        console.log(_context.t17);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t17.message }));

                    case 90:
                        _context.next = 190;
                        break;

                    case 92:
                        if (!(req.body.type === 'updateMany')) {
                            _context.next = 107;
                            break;
                        }

                        _context.prev = 93;
                        _context.t18 = res.status(200);
                        _context.next = 97;
                        return collection.updateMany(query, data, options);

                    case 97:
                        _context.t19 = _context.sent;
                        return _context.abrupt("return", _context.t18.json.call(_context.t18, _context.t19));

                    case 101:
                        _context.prev = 101;
                        _context.t20 = _context["catch"](93);

                        console.log(_context.t20);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t20.message }));

                    case 105:
                        _context.next = 190;
                        break;

                    case 107:
                        if (!(req.body.type === 'updateById')) {
                            _context.next = 122;
                            break;
                        }

                        _context.prev = 108;
                        _context.t21 = res.status(200);
                        _context.next = 112;
                        return collection.updateOne({ "_id": ObjectId(id) }, data, options);

                    case 112:
                        _context.t22 = _context.sent;
                        return _context.abrupt("return", _context.t21.json.call(_context.t21, _context.t22));

                    case 116:
                        _context.prev = 116;
                        _context.t23 = _context["catch"](108);

                        console.log(_context.t23);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t23.message }));

                    case 120:
                        _context.next = 190;
                        break;

                    case 122:
                        if (!(req.body.type === 'deleteOne')) {
                            _context.next = 137;
                            break;
                        }

                        _context.prev = 123;
                        _context.t24 = res.status(200);
                        _context.next = 127;
                        return collection.deleteOne(query);

                    case 127:
                        _context.t25 = _context.sent;
                        return _context.abrupt("return", _context.t24.json.call(_context.t24, _context.t25));

                    case 131:
                        _context.prev = 131;
                        _context.t26 = _context["catch"](123);

                        console.log(_context.t26);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t26.message }));

                    case 135:
                        _context.next = 190;
                        break;

                    case 137:
                        if (!(req.body.type === 'deleteMany')) {
                            _context.next = 152;
                            break;
                        }

                        _context.prev = 138;
                        _context.t27 = res.status(200);
                        _context.next = 142;
                        return collection.deleteMany(query);

                    case 142:
                        _context.t28 = _context.sent;
                        return _context.abrupt("return", _context.t27.json.call(_context.t27, _context.t28));

                    case 146:
                        _context.prev = 146;
                        _context.t29 = _context["catch"](138);

                        console.log(_context.t29);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t29.message }));

                    case 150:
                        _context.next = 190;
                        break;

                    case 152:
                        if (!(req.body.type === 'deleteById')) {
                            _context.next = 167;
                            break;
                        }

                        _context.prev = 153;
                        _context.t30 = res.status(200);
                        _context.next = 157;
                        return collection.deleteOne({ "_id": ObjectId(id) });

                    case 157:
                        _context.t31 = _context.sent;
                        return _context.abrupt("return", _context.t30.json.call(_context.t30, _context.t31));

                    case 161:
                        _context.prev = 161;
                        _context.t32 = _context["catch"](153);

                        console.log(_context.t32);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t32.message }));

                    case 165:
                        _context.next = 190;
                        break;

                    case 167:
                        if (!(req.body.type === 'aggregate')) {
                            _context.next = 182;
                            break;
                        }

                        _context.prev = 168;
                        _context.t33 = res.status(200);
                        _context.next = 172;
                        return collection.aggregate(query).toArray();

                    case 172:
                        _context.t34 = _context.sent;
                        return _context.abrupt("return", _context.t33.json.call(_context.t33, _context.t34));

                    case 176:
                        _context.prev = 176;
                        _context.t35 = _context["catch"](168);

                        console.log(_context.t35);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t35.message }));

                    case 180:
                        _context.next = 190;
                        break;

                    case 182:
                        _context.prev = 182;
                        return _context.abrupt("return", res.status(200).json([]));

                    case 186:
                        _context.prev = 186;
                        _context.t36 = _context["catch"](182);

                        console.log(_context.t36);
                        return _context.abrupt("return", res.status(200).send({ error: _context.t36.message }));

                    case 190:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[3, 11], [18, 26], [33, 41], [48, 56], [63, 71], [78, 86], [93, 101], [108, 116], [123, 131], [138, 146], [153, 161], [168, 176], [182, 186]]);
    }));

    return function postRouter(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
    };
}();

// query is a function responsible for sending query data to the server 
var query = exports.query = function query() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { baseURL: "", headers: {} };

    function http() {
        return _axios2.default.create(config);
    }

    return function () {
        return {

            //insert one
            insertOne: function insertOne() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;

                return http().post('/', {
                    type: 'insertOne',
                    data: data,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            //insert many
            insertMany: function insertMany() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Array;

                return http().post('/', {
                    type: 'insertMany',
                    data: data,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            // find
            find: function find() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;

                return http().post('/', {
                    type: 'find',
                    query: query,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            // findOne
            findOne: function findOne() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;

                return http().post('/', {
                    type: 'findOne',
                    query: query,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            // find by id
            findById: function findById() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String;

                return http().post('/', {
                    type: 'findById',
                    id: id,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            // update many
            updateMany: function updateMany() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;
                var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object;
                var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Object;

                return http().post('/', {
                    type: 'updateMany',
                    query: query,
                    data: data,
                    options: options,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            // update one
            updateOne: function updateOne() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;
                var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object;
                var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Object;

                return http().post('/', {
                    type: 'updateOne',
                    query: query,
                    data: data,
                    options: options,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            // update by id
            updateById: function updateById() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String;
                var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object;
                var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Object;

                return http().post('/', {
                    type: 'updateById',
                    id: id,
                    data: data,
                    options: options,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            // delete many
            deleteMany: function deleteMany() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;

                return http().post('/', {
                    type: 'deleteMany',
                    query: query,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            // delete one
            deleteOne: function deleteOne() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;

                return http().post('/', {
                    type: 'deleteOne',
                    query: query,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            // delete by id
            deleteById: function deleteById() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String;

                return http().post('/', {
                    type: 'deleteById',
                    id: id,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            },


            //aggregate
            aggregate: function aggregate() {
                var collectionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String;
                var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Array;

                console.log(query);
                return http().post('/', {
                    type: 'aggregate',
                    query: query,
                    collectionName: collectionName
                }).then(function (res) {
                    if (res.data.error) {
                        console.error(res.data);
                        return;
                    }
                    return res.data;
                });
            }
        };
    };
};