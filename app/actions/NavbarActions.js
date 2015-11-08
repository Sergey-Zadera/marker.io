import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
	constructor() {
		this.generateActions(
			'updateOnlineUsers', //Sets online users count on Socket.IO event update.
			'updateAjaxAnimation', //Adds "fadeIn" or "fadeOut" CSS class to the loading indicator.
			'updateSearchQuery', //Update search query value on keypress.

			'getMarkersCountSuccess', //Fetch total number of markers from the server.
			'getMarkersCountFail', //Returns total number of marker.
			'findMarkersSuccess', // Returns jQuery jqXhr object.
			'findMarkersFail' //Find a marker by name.
		);
	}

	findMarkers(payload) {
		$.ajax({
			url: '/api/markers/search',
			data: { name: payload.searchQuery }
		})
			.done((data) => {
				assign(payload, data);
				this.actions.findMarkersSuccess(payload);
			})
			.fail(() => {
				this.actions.findMarkersFail(payload);
			});
	}

	getMarkersCount() {
		$.ajax({ url: '/api/markers/count' })
			.done((data) => {
				this.actions.getMarkersCountSuccess(data)
			})
			.fail((jqXhr) => {
				this.actions.getMarkersCountFail(jqXhr)
			});
	}
}

export default alt.createActions(NavbarActions);
