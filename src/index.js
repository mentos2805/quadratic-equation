module.exports = function solveEquation(equation) {
  var str = equation.replace(/ /g, "");
  var arr = ( str.match(/-?\d+/g) );
  var a = Number(arr[0]);
  var b = Number(arr[2]);
  var c = Number(arr[3]);
  var d = b*b - 4*a*c;
  var result=[];

  if(d>0){
      result.push( Math.round( ( -b + Math.sqrt(d) ) / (2*a) ) ); 
      result.push( Math.round( ( -b-Math.sqrt(d) ) / (2*a) ) ); 
  }else if (d==0){
      result.push( Math.round( -b / (2*a) ) );
  }

  return result.sort(function( a, b ){return a - b});
}