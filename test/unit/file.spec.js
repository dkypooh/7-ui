var $ = require('jquery');
var file = require('../../src/index');
var _ = require('lodash');

describe('sfFileTest', function(){
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 24 * 60 * 60 * 1000;
	var param = {
		'x-nos-token' : 'xx',
		'object' : ''
	};


	beforeEach(function(){
		// withBindDefault
		$(document.body).after('<label id="file">fileSelect</label>');


	});


	// it('withBindDefault', function(done){
	// 	file.bind('file', {
	// 		onchange : function(event){
	// 			expect(event.id).toMatch(/\d+#\d+/);
	// 			expect(event.form.tagName).toMatch(/form/i);
	// 			expect(event.label.tagName).toMatch(/label/i);
	// 			done();
	// 		}
	// 	});
	// });

	// it('withBindParam', function(done){
	//
	// 	file.bind('file', {
	// 		param : param,
	// 		onchange : function(event){
	// 			var form = event.form;
	// 			var inputs = $(form).find('input[type="hidden"]');
	// 			var num = 0;
	//
	// 			_.forEach(inputs, function(item){
	// 				if(param[item.name] != null){
	// 					num++;
	// 				}
	// 			});
	//
	// 			expect(num).toBe(2);
	//
	// 			done();
	// 		}
	// 	});
	// });

	// it('withBindMultiple', function(done){
	//
	// 	file.bind('file', {
	// 		param : param,
	// 		multiple : true,
	// 		onchange : function(event){
	// 			var form = event.form;
	// 			var num = 0;
	// 			var files = event.files;
	//
	// 			_.forEach(files, function(file){
	// 				// is error
	// 				expect(file instanceof String).toBe(true);
	// 			});
	//
	// 			done();
	// 		}
	// 	});
	// });

	// it('withUnbind', function(done){
	//
	// 	var id = file.bind('file', {
	// 		param : param,
	// 		name: 'unbind',
	// 		multiple : true,
	// 		onchange : function(event){
	// 			expect(document.getElementById(event.id).tagName).toMatch(/form/i);
	// 			file.unbind(id);
	// 			expect(document.getElementById(event.id)).toBe(null);
	// 			done();
	//
	//
	// 		}
	// 	});
	// });

	it('withFindEntryByName', function(done){

		var id = file.bind('file', {
			param : param,
			name: 'findname',
			multiple : true,
			onchange : function(event){
				var ret = file.findEntryByName('findname');
				console.log(ret);
				expect(Object.keys(ret).length).toBeGreaterThan(0)

				var ret = file.findEntryByName('findame');
				expect(Object.keys(ret).length).toBe(1);
				done();
			}
		});
	});

})