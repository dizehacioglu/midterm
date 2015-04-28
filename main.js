$(document).on('ready', function() {

	// Classes
	var Event = function(title, date, description, location){ // Add category and picture
		this.title = title;
		this.date = date;
		this.description = description;
		this.location = location;

		this.downvotes = 0;
		// this.category = category;
		// this.picture = picture;
	};

	Event.prototype.render = function(){
		this.el = $('#event-tpl')
		.attr('id', null)
		.addClass('event');

		this.el.find('.event-title').text(this.title);
		this.el.find('.event-date').text(this.date);
		this.el.find('.event-description').text(this.description);
		this.el.find('.event-location').text(this.location);

		return this.el;
	};

	var EventList = function(){

	};

	var User = function(name, description){
		this.name = name;
		this.description = description;
		this.postedEvents = [];
		this.interestedEvents = [];
	};

	var e = new Event('Drake Concert', 'October 26th', 'Come listen to Champagne Papi cry about me', 'Pepsi Center');
	$('body').append(e.render());

	var e2 = new Event('Picnic', 'Right now', 'It\'s nice outside and I want to eat', 'Chataqua');
	$('body').append(e2.render());







  
});