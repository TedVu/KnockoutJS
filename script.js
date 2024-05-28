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
      alert('go here ' + value);
      this.fullName = value;
    },
    owner: this,
  });

  onClick = () => {
    var currentVal = this.fullName(); // Read the current value
    const uppercaseFullName = currentVal.toUpperCase();
    alert('debug');
    this.fullName(uppercaseFullName);
  };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
