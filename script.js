// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI

var onClick;
function AppViewModel() {
  this.firstName = ko.observable('Bert');
  this.lastName = ko.observable('Bertington');

  this.fullName = ko.computed({
    read: () => {
      return this.firstName() + ' ' + this.lastName();
    },
    write: (value) => {
      this.firstName(value.firstName);
      this.lastName(value.lastName);
    },
    owner: this,
  });

  onClick = () => {
    var firstName = this.firstName().toUpperCase(); // Read the current value
    var lastName = this.lastName().toUpperCase(); // Read the current value

    this.fullName({ firstName, lastName });
  };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
