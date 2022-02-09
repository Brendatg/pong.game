

p5.prototype._collideDebug = false;

p5.prototype.collideDebug = function(debugMode){
    _collideDebug = debugMode;
}
/*~++~+~+~++~+~++~++~+~+~ 2D ~+~+~++~+~++~+~+~+~+~+~+~+~+~+~+*/
p5.prototype.collideRectRect = function (x, y, w, h, x2, y2, w2, h2) {
  //2d
  //add in a thing to detect rectMode CENTER
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
};
// p5.vector version of collideRectRect
p5.prototype.collideRectRectVector = function(p1, sz, p2, sz2){
  return p5.prototype.collideRectRect(p1.x, p1.y, sz.x, sz.y, p2.x, p2.y, sz2.x,sz2.y)
}
p5.prototype.collideRectCircle = function (rx, ry, rw, rh, cx, cy, diameter) {
  //2d
  // temporary variables to set edges for testing
  var testX = cx;
  var testY = cy;
  // which edge is closest?
  if (cx < rx){         testX = rx       // left edge
  }else if (cx > rx+rw){ testX = rx+rw  }   // right edge
  if (cy < ry){         testY = ry       // top edge
  }else if (cy > ry+rh){ testY = ry+rh }   // bottom edge
  // // get distance from closest edges
  var distance = this.dist(cx,cy,testX,testY)
  // if the distance is less than the radius, collision!
  if (distance <= diameter/2) {
    return true;
  }
  return false;
};
// p5.vector version of collideRectCircle
p5.prototype.collideRectCircleVector = function(r, sz, c, diameter){
  return p5.prototype.collideRectCircle(r.x,r.y, sz.x,sz.y, c.x,c.y, diameter)
}
p5.prototype.collideCircleCircle = function (x, y,d, x2, y2, d2) {
//2d
  if( this.dist(x,y,x2,y2) <= (d/2)+(d2/2) ){
    return true;
  }
  return false;
};