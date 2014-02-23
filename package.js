Package.describe({
summary : "jQuery truncate plugin for Meteor"
});

Package.on_use(function(api) {
api.use('jquery', 'client');
api.add_files([
	'lib/js/jquery.truncate.js'
], 'client');
});
