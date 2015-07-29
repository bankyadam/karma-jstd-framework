var createPattern = function(path)
{
	return {
  		pattern: path, included: true, served: true, watched: false
  	};
};

var framework = function(files)
{
    files.unshift(createPattern(__dirname+'/node_modules/karma-jstd-adapter/jstd-adapter.js'));
};

framework.$inject = ['config.files'];
module.exports = {'framework:jstd': ['factory', framework]};
