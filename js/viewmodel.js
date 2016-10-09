
function appViewModel() {
	var self = this;
	self.articles = ko.observableArray([
	{name:"Widget2",url:ko.observable("img/car.jpg"),numberOfQuantity:ko.observable(0),price:100,obPrice:ko.observable(0),currency:"$"},
	{name:"Widget3",url:ko.observable("img/car.jpg"),numberOfQuantity:ko.observable(0),price:2100,obPrice:ko.observable(0),currency:"$"},
	{name:"Widget7",url:ko.observable("img/car.jpg"),numberOfQuantity:ko.observable(0),price:1990,obPrice:ko.observable(0),currency:"$"},
	{name:"Widget1",url:ko.observable("img/car.jpg"),numberOfQuantity:ko.observable(0),price:5690,obPrice:ko.observable(0),currency:"$"},
	{name:"Widget5",url:ko.observable("img/car.jpg"),numberOfQuantity:ko.observable(0),price:7200,obPrice:ko.observable(0),currency:"$"},
	{name:"Widget6",url:ko.observable("img/car.jpg"),numberOfQuantity:ko.observable(0),price:100000,obPrice:ko.observable(0),currency:"$"},
	{name:"Widget4",url:ko.observable("img/car.jpg"),numberOfQuantity:ko.observable(0),price:13200,obPrice:ko.observable(0),currency:"$"},
	{name:"Widget8",url:ko.observable("img/car.jpg"),numberOfQuantity:ko.observable(0),price:112310,obPrice:ko.observable(0),currency:"$"},
	{name:"Widget9",url:ko.observable("img/car.jpg"),numberOfQuantity:ko.observable(0),price:456460,obPrice:ko.observable(0),currency:"$"
		}]);
	self.arrAttachedItems = ko.observableArray([]);
	self.availableSort = ko.observableArray(['name','cost']);
	self.selectedSort = ko.observable();
	self.cardItems = ko.observable(0);
	self.totalPrice = ko.observable(0);
	self.currency = "$";

	incrementClickCounter = function(){
		var previousCount = this.numberOfQuantity();
		this.numberOfQuantity(previousCount+1);
		this.obPrice(this.obPrice()+this.price);
		var previousPrice = self.totalPrice();
		self.totalPrice(previousPrice + this.price);
	}


	decrementClickCounter = function(){
		var previousCount = this.numberOfQuantity();
		if (previousCount > 0){
			this.obPrice(this.obPrice()-this.price);
			this.numberOfQuantity(previousCount-1);
			var previousPrice = self.totalPrice();
			self.totalPrice(previousPrice - this.price);
		}
		if (this.numberOfQuantity() == 0){
			self.arrAttachedItems.remove(this);
		}
		self.cardItems(self.arrAttachedItems().length);
	}

	buyProduct = function(){
		if (self.arrAttachedItems().indexOf(this) ==-1){
			self.arrAttachedItems.push(this);
			self.cardItems(self.cardItems()+1);	
		}
		if (this.numberOfQuantity() == 0){
			this.numberOfQuantity(1);
			var previousPrice = self.totalPrice();
			self.totalPrice(previousPrice + this.price);
			this.obPrice(this.obPrice()+this.price);
		}
		self.cardItems(self.arrAttachedItems().length);

	}

	self.removeSelected = function(){
		self.totalPrice(self.totalPrice() - (this.price*this.numberOfQuantity()));
		this.obPrice(this.price);
		this.numberOfQuantity(0);
		self.arrAttachedItems.remove(this);
		self.cardItems(self.arrAttachedItems().length);
	}

	self.sortBy = function(){
		if (self.selectedSort() === 'cost'){
			self.articles.sort(compareCost);
		}
		else{
			self.articles.sort(compareName);
		}
		
	}

	self.clearForm = function(){
		self.totalPrice(0);
		self.cardItems(0);
		for (var i = 0;i < self.arrAttachedItems().length;i++){
			self.arrAttachedItems()[i].numberOfQuantity(0);
			self.arrAttachedItems()[i].obPrice(0);
			self.arrAttachedItems.splice(i,1);
			i--;
		}
	}
	
	
	function compareCost(a,b){;
		return a.price - b.price;
	}
	function compareName(a,b){
		if (a.name > b.name) {
    		return 1;
  		}
 		if (a.name < b.name) {
    		return -1;
  		}

  		return 0;;
	}
	
}
ko.applyBindings(new appViewModel());