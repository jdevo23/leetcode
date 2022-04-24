var MyQueue = function() {
  this.queue = [];

  this.push = function(x) {
    this.queue.push(x);
  }

  this.pop = function() {
    return this.queue.shift();
  }

  this.peek = function() {
    return this.queue[0];
  }

  this.empty = function() {
    return !this.queue.length;
  }
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.push(x);
  return;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.empty();
};
