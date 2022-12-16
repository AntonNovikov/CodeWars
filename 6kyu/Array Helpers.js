let arrProto = Array.prototype;
arrProto.square  = function () { return this.map(n=> n**2 ); }
arrProto.cube    = function () { return this.map(n=> n**3 ); }
arrProto.average = function () { return this.sum() / this.length; }
arrProto.sum     = function () { return this.reduce((a, b)=>  a + b , 0); }
arrProto.even    = function () { return this.filter(el=>  0 == el % 2); }
arrProto.odd     = function () { return this.filter(el=> 0 != el % 2 ); }
