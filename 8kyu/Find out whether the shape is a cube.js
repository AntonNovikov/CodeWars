var cubeChecker = function(volume, side){
    return (volume<=0||side<=0)?false:(side**3)===volume?true:false;
  };


  var cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0;
  };

  var cubeChecker = function(v, s){
    return s>0&&v==s*s*s;
  };