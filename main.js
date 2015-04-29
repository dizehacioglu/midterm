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
		
		if(this.el === undefined){
			this.el = $('#event-tpl')
			.clone()
			.attr('id', null)
			.addClass('event');
		}
		
		this.el.find('.event-title').text(this.title);
		this.el.find('.event-date').text(this.date);
		this.el.find('.event-description').text(this.description);
		this.el.find('.event-location').text(this.location);


		return this.el;
	};

	var EventLibrary = function(){
		this.events = [];
		this.render();
	};

	EventLibrary.prototype.addEvent = function(event){
		this.events.push(event);
		this.render();
	};

	EventLibrary.prototype.render = function(){
		if(this.el === undefined){
			this.el = $('#event-library-tpl')
			.clone()
			.attr('id', null)
			.addClass('event-library');

			var originalLibrary = this;

			$('.add-event-form').on('click', function(){
				var eventTitle = $('body').find('[name=event-title]').val();
				var eventDate = $('body').find('[name=event-date]').val();
				var eventDescription = $('body').find('[name=event-description]').val();
				var eventLocation = $('body').find('[name=event-location]').val();

				var newEvent = new Event(eventTitle, eventDate, eventDescription, eventLocation);
				originalLibrary.addEvent(newEvent);
			});
		}

		var eventElements = this.events.map(function(e){
			return e.render();
		});

		$('body').append(eventElements);
	};

	EventLibrary.prototype.onFormSubmit = function(e){
		console.log(e);
		console.log(this);
	};

	// var User = function(name, description){
	// 	this.name = name;
	// 	this.description = description;
	// 	this.postedEvents = [];
	// 	this.interestedEvents = [];
	// };

















	var library = new EventLibrary();


	// Fake Events
	var e = new Event('Drake Concert', 'October 26th', 'Come listen to Champagne Papi cry about me', 'Pepsi Center');
	var e2 = new Event('Picnic', 'Right now', 'It\'s nice outside and I want to eat', 'Chautauqua');

	library.addEvent(e);
	library.addEvent(e2);





  
});