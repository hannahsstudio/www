/**
* {{if_eq}}
*
* @author: Dan Harper <http://github.com/danharper>
*
* @param  {[type]} context [description]
* @param  {[type]} options [description]
* @return {[type]}         [description]
*
* @example: {{if_eq this compare=that}}
*/
module.exports = function(context, options) {
    if (context === options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
};