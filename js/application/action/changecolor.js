if (App.namespace) {
	App.namespace('Action.Changecolor', function (App) {
		/** @type {App.Module.DataStore} */

		(function (OC, window, $, undefined) {
			'use strict';

			$(document).ready(function () {

				var Usercolors = function (baseUrl) {
					this._baseUrl = baseUrl;
					this._usercolors = [];
					this._activeUsercolor = undefined;
				};

				Usercolors.prototype = {
					getAll: function () {
						return this._usercolors;
					},
					loadAll: function () {
						var deferred = $.Deferred();
						var self = this;
						$.get(this._baseUrl).done(function (usercolors) {
							self._activeUsercolor = undefined;
							self._usercolors = usercolors;
							deferred.resolve();
						}).fail(function () {
							deferred.reject();
						});
						return deferred.promise();
					},
				};

				function renderColors() {
					$.each(usercolors._usercolors, function (i, data) {
						console.log('username: ' + data.user + ' color: ' + data.colorcode);
					});

					for (var groupName in groupsusers) {
						var users = groupsusers[groupName],
							usersCount = users.length;

						$("#col_g_" + groupName).spectrum({
							color: "rgb(244, 204, 204)",
							showPaletteOnly: true,
							palette: [
								["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
									"rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"],
								["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
									"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
								["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
									"rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
									"rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
									"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
									"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
									"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
									"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
									"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
									"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
									"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
							]
						});

						for (var i = 0; i < usersCount; i++) {
							if (deprecatedUsers.indexOf(users[i]['uid']) !== -1) continue;
							var uid = users[i]['uid'];
							$("#col_u_" + uid).spectrum({
								color: "rgb(244, 204, 204)",
								showPaletteOnly: true,
								palette: [
									["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
										"rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"],
									["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
										"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
									["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
										"rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
										"rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
										"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
										"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
										"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
										"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
										"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
										"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
										"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
								]
							});
						}
					}
				}



				$('#sidebar_tab_3').click(function () {
					if ($('#userlist').length == 0) {
						var fragment = document.createDocumentFragment();
						var groupsusers = DataStore.get('groupsusers');
						var deprecatedUsers = ['collab_user'];
						var _table = document.createElement('table');
						_table.innerHTML += '<thead><tr><th width="70%"><b>Group-/ Username</b></th><th width="30%"><b>Color</b></th></tr></thead>';
						_table.innerHTML += '<tbody></tbody>';
						_table.id = 'userlist';
						_table.width = '100%';
						var _tableRef = _table.getElementsByTagName('tbody')[0];

						for (var groupName in groupsusers) {
							var _lineGroup = document.createElement('div'),
								_lineUsers = document.createElement('div'),
								_inputGroup = document.createElement('input'),
								_inputLabel = document.createElement('label'),
								_inputSpan = document.createElement('span'),
								users = groupsusers[groupName],
								usersCount = users.length;
							_inputGroup.name = String(groupName).trim();
							_inputGroup.type = 'checkbox';
							_inputGroup.className = 'group';
							_inputGroup.setAttribute('data-type', 'group');
							_lineGroup.appendChild(_inputGroup);
							_inputLabel.appendChild(_inputSpan);
							_lineGroup.appendChild(_inputLabel);
							_inputGroup.id = 'group' + groupName;
							_inputLabel.setAttribute('for', 'group' + groupName);
							_inputLabel.innerHTML += ' <strong>' + Util.ucfirst(groupName) + '</strong>';
							var rowCount = _tableRef.rows.length;
							var row = _tableRef.insertRow(rowCount);
							var colorId = 'col_g_' + groupName;
							row.insertCell(0).innerHTML = '<b><i>' + Util.ucfirst(groupName) + '</i></b>';
							row.insertCell(1).innerHTML = '<input type="text" id="' + colorId + '" />';

							for (var i = 0; i < usersCount; i++) {
								if (deprecatedUsers.indexOf(users[i]['uid']) !== -1) continue;
								var _inlineUser = document.createElement('span'),
									_inputUser = document.createElement('input'),
									_inputUserLabel = document.createElement('label'),
									_inputUserSpan = document.createElement('span');
								_inputUser.name = users[i]['uid'];
								_inputUser.type = 'checkbox';
								_inputUser.className = 'user';
								_inputUser.setAttribute('data-type', 'user');
								_inputUser.setAttribute('data-gid', users[i]['gid']);
								_inputUser.id = 'u_' + users[i]['uid'];
								_inputUserLabel.setAttribute('for', 'u_' + users[i]['uid']);
								_inputUserLabel.appendChild(_inputUserSpan);
								_inputUserLabel.innerHTML += users[i]['uid'];
								_inlineUser.appendChild(_inputUser);
								_inlineUser.appendChild(_inputUserLabel);
								_lineUsers.appendChild(_inlineUser);
								var rowCount = _tableRef.rows.length;
								var row = _tableRef.insertRow(rowCount);
								var uid = users[i]['uid'];
								var colorId = 'col_u_' + uid;
								row.insertCell(0).innerHTML = uid;
								row.insertCell(1).innerHTML = '<input type="text" id="' + colorId + '" />';
							}
							$('#chart_coloring').append(_table);
						}
					}
					renderColors();
				});

				var baseUrl = OC.generateUrl('apps/owncollab_chart');
				var usercolor = {
					user: 'new user',
					colorcode: 'rgb(255, 255, 255)'
				};
				var DataStore = App.Module.DataStore;
				var groupsusers = DataStore.get('groupsusers');
				var deprecatedUsers = ['collab_user'];


				var usercolors = new Usercolors(OC.generateUrl('/apps/owncollab_chart/colors'));
				usercolors.loadAll().done(function () {
					renderColors();
					$.each(usercolors._usercolors, function (i, data) {
						console.log('username: ' + data.user + ' color: ' + data.colorcode);
					});
				}).fail(function () {
					alert('Could not load usercolors');
				});
				//				console.log(baseUrl);
				//				$.getJSON(baseUrl + '/colors', function(result){
				//					var items="";
				//					$.each(result, function(i, data){
				//						console.log('uid:' + data.user + ' color:' + data.colorcode)
				//					});
				//				});


			});
		})(OC, window, jQuery);
	})
}
