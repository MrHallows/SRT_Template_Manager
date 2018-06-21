/**
 * TreeDB.js
 * IndexedDB functionality
 */
/*
// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)


// Test for browser support
if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

// Let us open our database
const bdName = "SRTTMDatabase";
var request = indexedDB.open(bdName, 2);
var db = request.result;

/**
 * Request handlers
 * @param {event} event 
 */
/*
request.onerror = function(event) {
	// Do something with request.errorCode!
	alert("In order for the SRT Template Manager application to function properly, please allow it to use IndexedDB.");
};
request.onsuccess = function(event) {
	// Do something with request.result!
	alert("IndexedDB was allowed successfully!");
	//db = event.target.result;
};

/**
 * Error handler
 * @param {event} event 
 */
/*db.onerror = function(event) {
	// Generic handler for all errors targeted at this database's requests
	alert("Database Error: " + event.target.errorCode);
};*/

/**
 * Creating or updating the version of the database
 */
// This event is only implemented in recent browsers
/*
request.onupgradeneeded = function(event) {
	// Save the IDBDatabase interface
	var db = event.target.result;

	// Create an objectStore for this database
	//var objectStore = db.createObjectStore("name", { keyPath: "myKey" });

	// Create an objectStore to hold information about our customers. We're
	// going to use "ssn" as our key path because it's guaranteed to be
	// unique - or at least that's what I was told during the kickoff meeting.
	var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

	// Create an index to search customers by name. We may have duplicates
	// so we can't use a unique index.
	objectStore.createIndex("name", "name", { unique: false });

	// Create an index to search customers by email. We want to ensure that
	// no two customers have the same email, so use a unique index.
	objectStore.createIndex("email", "email", { unique: true });

	// Use transaction oncomplete to make sure the objectStore creation is 
	// finished before adding data into it.
	objectStore.transaction.oncomplete = function (event) {
		// Store values in the newly created objectStore.
		var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
		customerData.forEach(function (customer) {
			customerObjectStore.add(customer);
		});
	};
};


/**
 * Adding data to the database
 */
/*
var transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can write: 
// var transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);

// Do something when all the data is added to the database.
transaction.oncomplete = function (event) {
	alert("All done!");
};

transaction.onerror = function (event) {
	// Don't forget to handle errors!
};

var objectStore = transaction.objectStore("customers");
customerData.forEach(function (customer) {
	var request = objectStore.add(customer);
	request.onsuccess = function (event) {
		// event.target.result === customer.ssn;
	};
});*/


/**************************************************************************************************************************************/
/*
// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
const bdName = "SRTTM_Database";
var open = indexedDB.open(bdName, 1);

// Create the schema
open.onupgradeneeded = function() {
    var db = open.result;
    var store = db.createObjectStore("ObjectStore", {keyPath: "id"});
    var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
};

open.onsuccess = function() {
    // Start a new transaction
    var db = open.result;
    var tx = db.transaction("MyObjectStore", "readwrite");
    var store = tx.objectStore("MyObjectStore");
    var index = store.index("NameIndex");

    // Add some data
    store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
    store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});
    
    // Query the data
    var getJohn = store.get(12345);
    var getBob = index.get(["Smith", "Bob"]);

    getJohn.onsuccess = function() {
        log("TreeDB.js:145", getJohn.result.name.first);  // => "John"
    };

    getBob.onsuccess = function() {
        log("TreeDB.js:149", getBob.result.name.first);   // => "Bob"
    };

    // Close the db when the transaction is done
    tx.oncomplete = function() {
        db.close();
    };
};*/



/**
 * IndexedDB
 * Tutorial: Getting Started with indexedDB
 * Author: All Things JavaScript, LLC
 * URL: https://www.youtube.com/watch?v=g4U5WRzHitM
 */
// Ensure that 'window.indexedDB' refers to all browsers
/*window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

// Ensure that indexedDB is supported
if(!window.indexedDB) {
	alert("Your brower does not support IndexedDB!");
}

// Declare variables
let request = window.indexedDB.open("SRTTM_DB", 1),
	db,
	tx,
	store,
	index;

request.onerror = function(e) {
	log("There was an error: " + e.target.errorCode);
};

request.onsuccess = function(e) {
	//
};*/



/**
 * IndexedDB
 * Tutorial: Adding IndexedDB Functionality to an Application
 * Author: John Esposito
 * URL: https://dzone.com/articles/adding-indexeddb-functionality
 */
// Ensure that 'window.indexedDB' refers to all browsers
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

// Ensure that indexedDB is supported
if(!window.indexedDB) {
	alert("Your brower does not support IndexedDB!");
}

// 
if('indexedDB' in window || 'mozIndexedDB' in window || 'webkitIndexedDB' in window || 'msIndexedDB' in window) {
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
	window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
}

// Create object shell(s)
/*var TreeDB = {
 	db: null
};*/

var TasksDB = {
	db: null,

	open: function() {
		if('indexedDB' in window) {
			//alert("'indexedDB' in window");
			var request = window.indexedDB.open("Tasks", 1); // Open database

			request.onsuccess = function(e) {
				TasksDB.db = e.target.result; // Connect to database

				if(TasksDB.db.version != '1') {
					request = TasksDB.db.setVersion('1');

					request.onsuccess = function(e) {
						var objStore = TasksDB.db.createObjectStore("Tasks", { keypath: "id" }); // Create object store
						TasksDB.load();
					};
				} else {
					request.onsuccess = function(e) {
						var objStore = TasksDB.db.createObjectStore("Tasks", { keypath: "id" }); // Create object store
						TasksDB.load();
					};
					//TasksDB.load();
				}
			};
		} else if('openDatabase' in window) {
			TasksDB.db = openDatabase("Tasks", 1, "Tasks Database", (5*1024*1024));

			TasksDB.db.transaction(function(tx) { // Start SQL transaction
				tx.executeSql('CREATE TABLE IF NOT EXISTS TasksSQL (' 
					+ 'id INTEGER PRIMARY KEY ASC, title TEXT, status TEXT, progress TEXT,' 
					+ 'priority TEXT, start_date DATETIME, due_date DATETIME, completed_date DATETIME' 
					+ 'description TEXT, attachments TEXT)', [],
					TasksDB.onsuccess, TasksDB.onerror);
			});
			TasksDB.load();
		}
	},

	newTask: function() {
		var Task = {
			id: new Date().getTime(),
			title: document.getElementById('task-title').value,
			status: document.getElementById('task-status').value,
			progress: document.getElementById('task-progress').value,
			priority: document.getElementById('task-priority').value,
			start_date: document.getElementById('task-start_date').value,
			due_date: document.getElementById('task-due_date').value,
			completed_date: document.getElementById('task-completed_date').value,
			description: document.getElementById('task-description').value,
			attachments: []
		};

		if('indexedDB' in window) {
			var tx = TasksDB.db.transaction(["Tasks"], IDBTransaction.READ_WRITE, 0); // Initiate transaction
			var objStore = tx.objectStore("Tasks");
			var request = objStore.add(Task); // Add task
			request.onsuccess = TasksDB.addSuccess;
			request.onerror = TasksDB.onerror;
		} else if('openDatabase' in window) {
			TasksDB.db.transaction(function(tx) {
				tx.executeSql('INSERT INTO Tasks(title, status, progress, priority, start_date, due_date, completed_date, description, attachments) VALUES(?, ?, ?)',
					[Task.title, Task.status, Task.progress, Task.priority, Task.start_date, Task.due_date, Task.completed_date, Task.description, Task.attachments],
					TasksDB.addSuccess, TasksDB.onerror);
			});
		}
		return false;
	},

	addSuccess: function() {
		TasksDB.load(); // Reload tasks
		alert("Your task was successfully added!", "Task added!");
		document.getElementById('task-title').value = "";
		document.getElementById('task-status').value = "";
		document.getElementById('task-progress').value = "";
		document.getElementById('task-priority').value = "";
		document.getElementById('task-start_date').value = "";
		document.getElementById('task-due_date').value = "";
		document.getElementById('task-completed_date').value = "";
		document.getElementById('task-description').value = "";
		//location.hash = "#list"; // Not needed
	}
};
TasksDB.open();
TasksDB.newTask();
