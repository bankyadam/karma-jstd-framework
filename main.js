var createPattern = function(path)
{
	return {
  		pattern: path, included: true, served: true, watched: false
  	};
};

var framework = function(files)
{
    files.unshift(createPattern(require.resolve('@caplin/karma-jstd-adapter')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:jstd': ['factory', framework]};
