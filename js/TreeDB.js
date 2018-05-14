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
};
