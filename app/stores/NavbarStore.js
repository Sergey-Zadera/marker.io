import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
	constructor() {
		this.bindActions(NavbarActions);
		this.totalMarker = 0;
		this.onlineUsers = 0;
		this.searchQuery = '';
		this.ajaxAnimationClass = '';
	}


	onFindMarkersSuccess(payload) {
		payload.history.pushState(null, '/marker/' + payload.markerId);
	}

	onFindMarkersFail(payload) {
		payload.searchForm.classList.add('shake');
		setTimeout(() => {
			payload.searchForm.classList.remove('shake');
		}, 1000);
	}

	onUpdateOnlineUsers(data) {
		this.onlineUsers = data.onlineUsers;
	}

	onUpdateAjaxAnimation(className) {
		this.ajaxAnimationClass = className; //fadein or fadeout
	}

	onUpdateSearchQuery(event) {
		this.searchQuery = event.target.value;
	}

	onGetMarkersCountSuccess(data) {
		this.totalMarker = data.count;
	}

	onGetMarkersCountFail(jqXhr) {
		toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
	}
}

export default alt.createStore(NavbarStore);
