/* TreeData.js */
/* js/TreeData.js */


/**
 * @name Tree
 * @type {object}
 * @description Base global Tree object
 */
var Tree = Tree || {};


/* *
 * Tree: Notes
 */
Tree.notes = [
    {
        type: 'folder',
        label: 'Alcohol Enrollment',
        id: 1,
        expanded: false,
        selected: false,
        children: [{
                type: 'note',
                label: 'Sent Initial Email',
                id: 2,
                selected: false,
                content: {
                    name: 'Sent Initial Email',
                    body: 'Sent%20initial%20Alcohol%20Enrollment%20email.%20Awaiting%20response%20with%20documentation.'
                }
            },
            {
                type: 'note',
                label: 'Ceratosaurians',
                id: 3,
                selected: false,
                content: {
                    name: 'Ceratosaurians',
                    body: ''
                }
            },
            {
                type: 'note',
                label: 'Spinosauroids',
                id: 4,
                selected: false,
                content: {
                    name: 'Spinosauroids',
                    body: ''
                }
            },
            {
                type: 'note',
                label: 'Carnosaurians',
                id: 5,
                selected: false,
                content: {
                    name: 'Carnosaurians',
                    body: ''
                }
            },
            {
                type: 'folder',
                label: 'Coelurosaurians',
                id: 6,
                expanded: false,
                selected: false,
                children: [{
                        type: 'note',
                        label: 'Tyrannosauroids',
                        id: 7,
                        selected: false,
                        content: {
                            name: 'Tyrannosauroids',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Ornithomimosaurians',
                        id: 8,
                        selected: false,
                        content: {
                            name: 'Ornithomimosaurians',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Therizinosauroids',
                        id: 9,
                        selected: false,
                        content: {
                            name: 'Therizinosauroids',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Oviraptorosaurians',
                        id: 10,
                        selected: false,
                        content: {
                            name: 'Oviraptorosaurians',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Dromaeosaurids',
                        id: 11,
                        selected: false,
                        content: {
                            name: 'Dromaeosaurids',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Troodontids',
                        id: 12,
                        selected: false,
                        content: {
                            name: 'Troodontids',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Avialans',
                        id: 13,
                        selected: false,
                        content: {
                            name: 'Avialans',
                            body: ''
                        }
                    }
                ]
            }
        ]
    },
    {
        type: 'folder',
        label: 'Outdated',
        id: 14,
        expanded: false,
        selected: false,
        children: [{
                type: 'note',
                label: 'No Response After 10 Days',
                id: 15,
                selected: false,
                content: {
                    name: 'No Response After 10 Days',
                    body: 'Customer%20has%20not%20provided%20the%20necessary%20documentation%20to%20move%20this%20request%20forward.%20Closing%20CR.'
                }
            },
            {
                type: 'note',
                label: 'Over 60 Days Old',
                id: 16,
                selected: false,
                content: {
                    name: 'Over 60 Days Old',
                    body: 'Closing%20outdated%20L%2FCR%3B%20will%20continue%20to%20monitor%20for%20future%20developments.'
                }
            }
        ]
    },
    {
        type: 'folder',
        label: 'Pricing',
        id: 17,
        expanded: false,
        selected: false,
        children: [{
                type: 'note',
                label: 'CHT Move Request',
                id: 18,
                selected: false,
                content: {
                    name: 'CHT Move Request',
                    body: 'I%20sent%20a%20CHT%20Move%20Request%20to%20Laura%20Sanderson%20to%20apply%20SAM-%5B1-6%5D%20pricing.'
                }
            },
            {
                type: 'note',
                label: 'Applied Pricing',
                id: 19,
                selected: false,
                content: {
                    name: 'Applied Pricing',
                    body: 'I%20reviewed%20%5BPricing%20Structure%5D%20and%20applied%20it%20to%20the%20account.'
                }
            }
        ]
    },
    {
        type: 'folder',
        label: 'SmartPost',
        id: 20,
        expanded: false,
        selected: false,
        children: [{
                type: 'note',
                label: 'SmartPost Implemented',
                id: 21,
                selected: false,
                content: {
                    name: 'SmartPost Implemented',
                    body: 'Implemented%20SmartPost%20(SmartPost%20ID%3A%20%2C%20Mailer%20ID%3A%20)%20and%20sent%20welcome%20%26%20activation%20emails.'
                }
            },
            {
                type: 'note',
                label: 'Applied Pricing',
                id: 22,
                selected: false,
                content: {
                    name: 'Applied Pricing',
                    body: 'Applied%20%5BPricing%20Structure%5D%20(Request%20ID%3A%20%5BRequest%20ID%5D).%20I%20will%20implement%20SmartPost%20once%20pricing%20has%20loaded.'
                }
            }
        ]
    },
    {
        type: 'folder',
        label: 'Unable to Reach',
        id: 23,
        expanded: false,
        selected: false,
        children: [{
                type: 'note',
                label: 'Left Voice Message',
                id: 24,
                selected: false,
                content: {
                    name: 'Left Voice Message',
                    body: 'I%20called%20%5BCustomer%5D%20in%20regard%20to%20%5Bhis%2Fher%5D%20%5BSubject%5D%20request.%20No%20answer%3B%20left%20a%20voice%20message.'
                }
            },
            {
                type: 'note',
                label: 'Busy Signal',
                id: 25,
                selected: false,
                content: {
                    name: 'Busy Signal',
                    body: 'I%20called%20%5BCustomer%5D%20in%20regard%20to%20%5Bhis%2Fher%5D%20%5BSubject%5D%20request.%20Received%20a%20busy%20signal%3B%20unable%20to%20leave%20a%20voice%20message.'
                }
            },
            {
                type: 'folder',
                label: 'Sauropods',
                id: 26,
                expanded: false,
                selected: false,
                children: [{
                        type: 'note',
                        label: 'Diplodocoids',
                        id: 27,
                        selected: false,
                        content: {
                            name: '',
                            body: ''
                        }
                    },
                    {
                        type: 'folder',
                        label: 'Macronarians',
                        id: 28,
                        expanded: false,
                        selected: false,
                        children: [{
                                type: 'note',
                                label: 'Brachiosaurids',
                                id: 29,
                                selected: false,
                                content: {
                                    name: '',
                                    body: ''
                                }
                            },
                            {
                                type: 'note',
                                label: 'Titanosaurians',
                                id: 30,
                                selected: false,
                                content: {
                                    name: '',
                                    body: ''
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];


/* *
 * Tree: Email
 */
Tree.email = [
    {
        type: 'folder',
        label: 'Alcohol Enrollment',
        id: 3,
        expanded: false,
        selected: false,
        children: [{
                type: 'email',
                label: 'Initial Information',
                id: 4,
                selected: false,
                content: {
                    name: 'Initial Information',
                    to: '[Customer]',
                    cc: '',
                    subject: 'FedEx Alcohol Shipping Enrollment Information',
                    attachments: '',
                    body: '%5BCustomer%5D%2C%0A%0AThank%20you%20for%20your%20interest%20in%20becoming%20an%20authorized%20shipper%20with%20FedEx.%20To%20begin%20the%20process%2C%20there%20are%20few%20things%20we%20need%20to%20cover%3A%0A%0A1)%09Please%20confirm%20the%20company%20name%20and%20shipping%20address%20are%3A%0A%0ABusiness%0AAddress%0ACity%2C%20State%2C%20ZIP%0A%0A%09_______________________%0A%0A2)%09Is%20the%20above%20shipping%20address%20also%20the%20same%20on%20your%20State%20Liquor%20License%20to%20sell%20and%20your%20TTB%20Permit%3F%0A%0A%09_______________________%0A%0A3)%09Is%20your%20business%20a%20Retailer%3F%20If%20so%2C%20only%20a%20State%20Liquor%20License%20is%20required.%20Otherwise%2C%20both%20a%20State%20Liquor%20License%20and%20TTB%20Permit%20are%20required.%0A%0A%09_______________________%0A%0A4)%09With%20FedEx%20the%20only%20thing%20you%20are%20able%20to%20ship%20to%20consumers%20is%20wine.%20Beer%20and%20spirits%20can%20only%20be%20sent%20to%20other%20licensed%20distributors.%20What%20will%20you%20be%20shipping%3B%20wine%2C%20beer%20or%20spirits%3F%0A%0A%09_______________________%0A%0A5)%09Will%20you%20be%20shipping%20domestically%2C%20internationally%20or%20both%3F%0A%0A%09_______________________%0A%0A6)%09Does%20the%20company%20have%20a%20fax%20number%3F%20If%20so%2C%20please%20provide%20it.%0A%0A%09_______________________%0A%0A7)%09What%20type%20of%20packaging%20will%20you%20be%20using%20to%20ship%3F%20Polystyrene%2C%20Molded%20Pulp%2C%20or%20Die-Cut%20Corrugated.%20If%20you%20are%20not%20sure%2C%20please%20review%20this%20page%3A%20https%3A%2F%2Fsmallbusiness.fedex.com%2Finternational%2Fshipping-wine%2Fresources.%0A%0A%09_______________________%0A%0A8)%09Part%20of%20the%20shipping%20agreement%20is%20that%20labels%20must%20be%20completed%20through%20an%20automation%20method%2C%20such%20as%20FedEx%20Ship%20Manager%C2%AE%20at%20fedex.com%20or%20FedEx%20Ship%20Manager%C2%AE%20Software.%20For%20more%20information%2C%20please%20visit%20https%3A%2F%2Fsmallbusiness.fedex.com%2Finternational%2Fshipping-wine%2F.%0A%0AAlong%20with%20your%20responses%20to%20the%20above%20questions%2C%20if%20you%20would%20please%20forward%20me%20copies%20of%20your%20State%20Liquor%20License%20and%20your%20TTB%20permit%20(depending%20on%20your%20answer%20to%20question%203)%2C%20I%20will%20forward%20everything%20to%20our%20legal%20department.%20The%20process%20generally%20takes%20approximately%202%20-%2010%20business%20days%2C%20upon%20receipt%20of%20your%20licenses%2C%20providing%20there%20are%20no%20issues%20with%20the%20enrollment.%0A'
                }
            },
            {
                type: 'email',
                label: 'Submitted Documents',
                id: 5,
                selected: false,
                content: {
                    name: 'Submitted Documents',
                    to: 'alcoholenroll@fedex.com',
                    cc: 'laura.sanderson.osv@fedex.com',
                    subject: 'Alcohol Enrollment - [BUSINESS] - [XXXXXXXXX-EAN]',
                    attachments: '[Customer\'s Documents (License & TTB)]',
                    body: 'Team%2C%0A%0AAttached%20is%20the%20Alcohol%20Enrollment%20Check%20Sheet%2C%20State%20Liquor%20License%20and%20TTB%20for%20%5BBUSINESS%5D.%0A%0A***When%20sending%20the%20signed%20agreement%2C%20replace%20with%3A%0AAttached%20is%20the%20signed%20alcohol%20agreement%20for%20%5BBUSINESS%5D.%0A'
                }
            },
            {
                type: 'email',
                label: 'Spinosauroids',
                id: 6,
                selected: false,
                content: {
                    name: 'Spinosauroids',
                    to: '',
                    cc: '',
                    subject: '',
                    attachments: '',
                    body: ''
                }
            },
            {
                type: 'email',
                label: 'Carnosaurians',
                id: 7,
                selected: false,
                content: {
                    name: 'Carnosaurians',
                    to: '',
                    cc: '',
                    subject: '',
                    attachments: '',
                    body: ''
                }
            },
            {
                type: 'folder',
                label: 'Coelurosaurians',
                id: 8,
                expanded: false,
                selected: false,
                children: [{
                        type: 'email',
                        label: 'Tyrannosauroids',
                        id: 9,
                        selected: false,
                        content: {
                            name: 'Tyrannosauroids',
                            to: '',
                            cc: '',
                            subject: '',
                            attachments: '',
                            body: ''
                        }
                    },
                    {
                        type: 'email',
                        label: 'Ornithomimosaurians',
                        id: 10,
                        selected: false,
                        content: {
                            name: 'Ornithomimosaurians',
                            to: '',
                            cc: '',
                            subject: '',
                            attachments: '',
                            body: ''
                        }
                    },
                    {
                        type: 'email',
                        label: 'Therizinosauroids',
                        id: 11,
                        selected: false,
                        content: {
                            name: 'Therizinosauroids',
                            to: '',
                            cc: '',
                            subject: '',
                            attachments: '',
                            body: ''
                        }
                    },
                    {
                        type: 'email',
                        label: 'Oviraptorosaurians',
                        id: 12,
                        selected: false,
                        content: {
                            name: 'Oviraptorosaurians',
                            to: '',
                            cc: '',
                            subject: '',
                            attachments: '',
                            body: ''
                        }
                    },
                    {
                        type: 'email',
                        label: 'Dromaeosaurids',
                        id: 13,
                        selected: false,
                        content: {
                            name: 'Dromaeosaurids',
                            to: '',
                            cc: '',
                            subject: '',
                            attachments: '',
                            body: ''
                        }
                    },
                    {
                        type: 'email',
                        label: 'Troodontids',
                        id: 14,
                        selected: false,
                        content: {
                            name: 'Troodontids',
                            to: '',
                            cc: '',
                            subject: '',
                            attachments: '',
                            body: ''
                        }
                    },
                    {
                        type: 'email',
                        label: 'Avialans',
                        id: 15,
                        selected: false,
                        content: {
                            name: 'Avialans',
                            to: '',
                            cc: '',
                            subject: '',
                            attachments: '',
                            body: ''
                        }
                    }
                ]
            }
        ]
    },
    {
        type: 'folder',
        label: 'SmartPost',
        id: 1,
        expanded: false,
        selected: false,
        children: [{
                type: 'email',
                label: 'Online Activation',
                id: 2,
                selected: false,
                content: {
                    name: 'Online Activation',
                    to: '[Customer]',
                    cc: '',
                    subject: 'FedEx SmartPost Online Activation',
                    attachments: '',
                    body: '%5BCustomer%5D%2C%0A%0AThank%20you%20for%20your%20interest%20in%20shipping%20SmartPost%20with%20FedEx.%20Your%20account%20has%20been%20enabled%20with%20the%20pricing%20and%20ability%20to%20utilize%20this%20service.%20To%20be%20able%20to%20fully%20access%20SmartPost%20shipping%20with%20your%20FedEx.com%20account%20and%20Ship%20Manager%2C%20you%20will%20need%20to%20complete%20the%20following%20steps%3A%0A%0A1)%09Login%20to%20your%20FedEx%20account%0A2)%09Go%20to%20Ship%20Manager%20as%20you%20would%20to%20create%20a%20shipment%0A3)%09Select%20the%20%E2%80%9CAdministration%E2%80%9D%20tab%0A4)%09Click%20%E2%80%9CCompany%20Settings%E2%80%9D%20on%20the%20left%0A5)%09Select%20the%20%E2%80%9CPermissions%E2%80%9D%20tab%0A6)%09Click%20%E2%80%9CFedEx%20Express%20and%20FedEx%20Ground%E2%80%9D%0A7)%09Under%20%E2%80%9CFedEx%20Domestic%20Shipping%20Services%2C%E2%80%9D%20tick%20the%20checkbox%20next%20to%20%E2%80%9CEnable%20for%20FedEx%20SmartPost%E2%80%9D%0A8)%09Click%20%5BSave%5D%0A%0AIf%20your%20account%20has%20multiple%20administrators%2C%20continue%3A%0A%0A9)%09Select%20the%20%E2%80%9CUsers%E2%80%9D%20tab%0A10)%09Under%20%E2%80%9CManage%20Users%E2%80%9D%2C%20check%20the%20%E2%80%9CUser%20Role%E2%80%9D%20column%20to%20determine%20if%20you%20are%20a%20Company%20Admin%20or%20Standard%20User%0A11)%09Check%20the%20customer%20permissions%20reference%20and%20defaults%20button.%0A12)%09Be%20sure%20that%20the%20button%20next%20to%20customize%20privileges%2C%20reference%2C%20and%20defaults%20is%20selected.%0A13)%09Click%20continue.%0A14)%09In%20the%20right%20hand%20column%2C%20under%20SmartPost%20Services%20Section%2C%20tick%20the%20checkbox%20next%20to%20FedEx%20SmartPost.%0A15)%09Scroll%20to%20the%20bottom%20and%20click%20Save.%0A%0ASmartPost%20will%20now%20be%20enabled%20onto%20your%20FedEx.com%20Ship%20Manager%20as%20an%20available%20option%20under%20Service%20Type.%20If%20you%20are%20having%20any%20additional%20issues%20with%20FedEx.com%2C%20please%20reach%20out%20to%20our%20Technical%20Support%20Team%20at%201(877)339-2774%2C%20Option%201.%0A'
                }
            },
            {
                type: 'email',
                label: 'Applied Pricing',
                id: 32,
                selected: false,
                content: {
                    name: 'Applied Pricing',
                    to: '',
                    cc: '',
                    subject: '',
                    attachments: '',
                    body: 'Applied%20%5BPricing%20Structure%5D%20(Request%20ID%3A%20%5BRequest%20ID%5D).%20I%20will%20implement%20SmartPost%20once%20pricing%20has%20loaded.'
                }
            }
        ]
    },
    {
        type: 'folder',
        label: 'Unable to Reach',
        id: 16,
        expanded: false,
        selected: false,
        children: [{
                type: 'email',
                label: 'Left Voice Message',
                id: 17,
                selected: false,
                content: {
                    name: 'Left Voice Message',
                    to: '',
                    cc: '',
                    subject: '',
                    attachments: '',
                    body: 'I%20called%20%5BCustomer%5D%20in%20regard%20to%20%5Bhis%2Fher%5D%20%5BSubject%5D%20request.%20No%20answer%3B%20left%20a%20voice%20message.'
                }
            },
            {
                type: 'email',
                label: 'Busy Signal',
                id: 18,
                selected: false,
                content: {
                    name: 'Busy Signal',
                    to: '',
                    cc: '',
                    subject: '',
                    attachments: '',
                    body: 'I%20called%20%5BCustomer%5D%20in%20regard%20to%20%5Bhis%2Fher%5D%20%5BSubject%5D%20request.%20Received%20a%20busy%20signal%3B%20unable%20to%20leave%20a%20voice%20message.'
                }
            },
            {
                type: 'folder',
                label: 'Sauropods',
                id: 19,
                expanded: false,
                selected: false,
                children: [{
                        type: 'email',
                        label: 'Diplodocoids',
                        id: 20,
                        selected: false,
                        content: {
                            name: '',
                            to: '',
                            cc: '',
                            subject: '',
                            attachments: '',
                            body: ''
                        }
                    },
                    {
                        type: 'folder',
                        label: 'Macronarians',
                        id: 21,
                        expanded: false,
                        selected: false,
                        children: [{
                                type: 'email',
                                label: 'Brachiosaurids',
                                id: 22,
                                selected: false,
                                content: {
                                    name: '',
                                    to: '',
                                    cc: '',
                                    subject: '',
                                    attachments: '',
                                    body: ''
                                }
                            },
                            {
                                type: 'email',
                                label: 'Titanosaurians',
                                id: 23,
                                selected: false,
                                content: {
                                    name: '',
                                    to: '',
                                    cc: '',
                                    subject: '',
                                    attachments: '',
                                    body: ''
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];


/* *
 * Tree: Contacts
 */
Tree.contacts = [
    {
        type: 'folder',
        label: 'Customers',
        id: 1,
        expanded: false,
        selected: false,
        children: [{
                type: 'contact',
                label: 'Tom Jones',
                id: 2,
                selected: false,
                content: {
                    firstName: 'Tom',
                    lastName: 'Jones',
                    fullName: 'Tom Jones',
                    phone: '(555)555-5555',
                    email: 'tjones@test.com',
                    business: 'Jones\' Auto Parts',
                    ean: '123456789',
                    comments: ''
                }
            },
            {
                type: 'contact',
                label: 'John Smith',
                id: 32,
                selected: false,
                content: {
                    firstName: '',
                    lastName: '',
                    fullName: '',
                    phone: '',
                    email: '',
                    business: '',
                    ean: '',
                    comments: ''
                }
            }
        ]
    },
    {
        type: 'folder',
        label: 'Colleagues',
        id: 3,
        expanded: false,
        selected: false,
        children: [{
                type: 'contact',
                label: 'Steven Miller',
                id: 4,
                selected: false,
                content: {
                    firstName: '',
                    lastName: '',
                    fullName: '',
                    phone: '',
                    email: '',
                    business: '',
                    ean: '',
                    comments: ''
                }
            },
            {
                type: 'contact',
                label: 'Emily Warren',
                id: 5,
                selected: false,
                content: {
                    firstName: '',
                    lastName: '',
                    fullName: '',
                    phone: '',
                    email: '',
                    business: '',
                    ean: '',
                    comments: ''
                }
            },
            {
                type: 'contact',
                label: 'Chris Johnson',
                id: 6,
                selected: false,
                content: {
                    firstName: '',
                    lastName: '',
                    fullName: '',
                    phone: '',
                    email: '',
                    business: '',
                    ean: '',
                    comments: ''
                }
            },
            {
                type: 'contact',
                label: 'Ashley Mendez',
                id: 7,
                selected: false,
                content: {
                    firstName: '',
                    lastName: '',
                    fullName: '',
                    phone: '',
                    email: '',
                    business: '',
                    ean: '',
                    comments: ''
                }
            },
            {
                type: 'folder',
                label: 'Coelurosaurians',
                id: 8,
                expanded: false,
                selected: false,
                children: [{
                        type: 'contact',
                        label: 'Tyrannosauroids',
                        id: 9,
                        selected: false,
                        content: {
                            firstName: '',
                            lastName: '',
                            fullName: '',
                            phone: '',
                            email: '',
                            business: '',
                            ean: '',
                            comments: ''
                        }
                    },
                    {
                        type: 'contact',
                        label: 'Ornithomimosaurians',
                        id: 10,
                        selected: false,
                        content: {
                            firstName: '',
                            lastName: '',
                            fullName: '',
                            phone: '',
                            email: '',
                            business: '',
                            ean: '',
                            comments: ''
                        }
                    },
                    {
                        type: 'contact',
                        label: 'Therizinosauroids',
                        id: 11,
                        selected: false,
                        content: {
                            firstName: '',
                            lastName: '',
                            fullName: '',
                            phone: '',
                            email: '',
                            business: '',
                            ean: '',
                            comments: ''
                        }
                    },
                    {
                        type: 'contact',
                        label: 'Oviraptorosaurians',
                        id: 12,
                        selected: false,
                        content: {
                            firstName: '',
                            lastName: '',
                            fullName: '',
                            phone: '',
                            email: '',
                            business: '',
                            ean: '',
                            comments: ''
                        }
                    },
                    {
                        type: 'contact',
                        label: 'Dromaeosaurids',
                        id: 13,
                        selected: false,
                        content: {
                            firstName: '',
                            lastName: '',
                            fullName: '',
                            phone: '',
                            email: '',
                            business: '',
                            ean: '',
                            comments: ''
                        }
                    },
                    {
                        type: 'contact',
                        label: 'Troodontids',
                        id: 14,
                        selected: false,
                        content: {
                            firstName: '',
                            lastName: '',
                            fullName: '',
                            phone: '',
                            email: '',
                            business: '',
                            ean: '',
                            comments: ''
                        }
                    },
                    {
                        type: 'contact',
                        label: 'Avialans',
                        id: 15,
                        selected: false,
                        content: {
                            firstName: '',
                            lastName: '',
                            fullName: '',
                            phone: '',
                            email: '',
                            business: '',
                            ean: '',
                            comments: ''
                        }
                    }
                ]
            }
        ]
    }
];



Tree.getFirstLevelData = function(data) {
    if(!data) data = null;

    var datum = [];

    $.each(data, function() {
        if(this.type == 'folder') {
            var node = {
                type: this.type,
                label: this.label,
                id: this.id,
                expanded: this.expanded,
                selected: this.selected
            };
        } else if(this.type == 'note') {
            var node = {
                type: this.type,
                label: this.label,
                id: this.id,
                selected: this.selected,
                content: {
                    name: this.content.name,
                    body: this.content.body
                }
            };
        } else if(this.type == 'email') {
            var node = {
                type: this.type,
                label: this.label,
                id: this.id,
                selected: this.selected,
                content: {
                    name: this.content.name,
                    to: this.content.to,
                    cc: this.content.cc,
                    subject: this.content.subject,
                    attachments: this.content.attachments,
                    body: this.content.body
                }
            };
        } else if(this.type == 'contact') {
            var node = {
                type: this.type,
                label: this.label,
                id: this.id,
                selected: this.selected,
                content: {
                    firstName: this.content.firstName,
                    lastName: this.content.lastName,
                    fullName: this.content.fullName,
                    phone: this.content.phone,
                    email: this.content.email,
                    business: this.content.business,
                    ean: this.content.ean,
                    comments: this.content.comments
                }
            };
        }

        if(this.children) {
            node.load_on_demand = true;
        }

        datum.push(node);
    });
    return datum;
};


Tree.getChildrenOfNode = function(data, node_id) {
    var result = null;

    function iterate(nodes) {
        if(!nodes) nodes = data;

        $.each(nodes, function() {
            if(result) {
                return;
            } else {
                if(this.id == node_id) {
                    result = this;
                }

                if(this.children) {
                    iterate(this.children);
                }
                /*else {
                    log("Error: Node with id [" + this.id + "] has no children.");
                }*/
            }
        });
    }
    iterate(data);

    return Tree.getFirstLevelData(result.children);
};


/**
 * Tree.getTreeData()
 * If it is the first time the application is opened (Tree data is not in localStorage), set data.
 */
// Global arrays for the current Tree data
var TreeNotes = TreeNotes || [];
var TreeEmail = TreeEmail || [];
var TreeContacts = TreeContacts || [];

Tree.getTreeData = function() {
    // If "Tree:Notes" item does not exist in localStorage, create it using the original Tree.notes object data
    //  and assign it to TreeNotes.
    // Otherwise, pull the tree's data and assign it to TreeNotes.
    if(!ls.get("Tree:Notes")) {
        ls.set("Tree:Notes", JSON.stringify(Tree.notes));
        TreeNotes = JSON.parse(ls.get("Tree:Notes"));
    } else {
        TreeNotes = JSON.parse(ls.get("Tree:Notes"));
    }

    // If "Tree:Email" item does not exist in localStorage, create it using the original Tree.email object data
    //  and assign it to TreeEmail.
    // Otherwise, pull the tree's data and assign it to TreeEmail.
    if(!ls.get("Tree:Email")) {
        ls.set("Tree:Email", JSON.stringify(Tree.email));
        TreeEmail = JSON.parse(ls.get("Tree:Email"));
    } else {
        TreeEmail = JSON.parse(ls.get("Tree:Email"));
    }

    // If "Tree:Contacts" item does not exist in localStorage, create it using the original Tree.contacts object data
    //  and assign it to TreeContacts.
    // Otherwise, pull the tree's data and assign it to TreeContacts.
    if(!ls.get("Tree:Contacts")) {
        ls.set("Tree:Contacts", JSON.stringify(Tree.contacts));
        TreeContacts = JSON.parse(ls.get("Tree:Contacts"));
    } else {
        TreeContacts = JSON.parse(ls.get("Tree:Contacts"));
    }
};
Tree.getTreeData();

log("TreeNotes: ", TreeNotes);


/* *
 * Store tree data to localStorage
 */
/*Tree.persist = function(data) {
    if(!data) return;

    var datum = [];

    //ls.set("Tree:Notes", JSON.stringify(TreeNotes));
    //ls.set("Tree:Email", JSON.stringify(TreeEmail));
    //ls.set("Tree:Contacts", JSON.stringify(TreeContacts));

    data.forEach(function() {
        if(this.type == 'folder') {
            var node = {
                type: this.type,
                label: this.label,
                id: this.id,
                expanded: this.expanded,
                selected: this.selected
            };

        } else if(this.type == 'note') {
            var node = {
                type: this.type,
                label: this.label,
                id: this.id,
                selected: this.selected,
                content: {
                    name: this.content.name,
                    body: this.content.body
                }
            };
            TreeNotes.push(node);

        } else if(this.type == 'email') {
            var node = {
                type: this.type,
                label: this.label,
                id: this.id,
                selected: this.selected,
                content: {
                    name: this.content.name,
                    to: this.content.to,
                    cc: this.content.cc,
                    subject: this.content.subject,
                    attachments: this.content.attachments,
                    body: this.content.body
                }
            };

        } else if(this.type == 'contact') {
            var node = {
                type: this.type,
                label: this.label,
                id: this.id,
                selected: this.selected,
                content: {
                    firstName: this.content.firstName,
                    lastName: this.content.lastName,
                    fullName: this.content.fullName,
                    phone: this.content.phone,
                    email: this.content.email,
                    business: this.content.business,
                    ean: this.content.ean,
                    comments: this.content.comments
                }
            };
        }

        if(this.children) {
            Tree.persist(this.children);
        }

        datum.push(node);

        //TreeNotes.push(node);
        //TreeEmail.push(node);
        //TreeContacts.push(node);
    });
    //ls.set("datum", JSON.stringify(datum));
    return datum;
};

//ls.set("Tree:Notes", JSON.stringify(Tree.notes));
//ls.set("Tree:Email", JSON.stringify(Tree.email));
//ls.set("Tree:Contacts", JSON.stringify(Tree.contacts));

Tree.persist(TreeNotes);
Tree.persist(TreeEmail);
Tree.persist(TreeContacts);*/


/* *
 * Build the HTML tree
 */
Tree.buildTree = function(data) {
    var fragment = document.createDocumentFragment();

    // Iterate through data (i.e., Tree.notes)
    for(var index in data) {
        if(data.hasOwnProperty(index)) {

            var node = data[index];

            var tree_item = document.createElement('div'); // <div class="tree-item" item-type="folder" expanded="false" select="false"></div>
                tree_item.classList.add('tree-item');
                tree_item.setAttribute('item-type', node.type);
                tree_item.setAttribute('id', node.type + "-" + node.id);

                if (!node.children) {
                    if (node.type == 'folder') {
                        tree_item.setAttribute('has-children', false);
                        //log("Set attribute 'has-children' Item ID: " + tree_item.id + " to " + tree_item.getAttribute('has-children'));
                    }
                } else {
                    if (node.type == 'folder') {
                        tree_item.setAttribute('has-children', true);
                        //log("Set attribute 'has-children' Item ID: " + tree_item.id + " to " + tree_item.getAttribute('has-children'));
                    }
                }

                tree_item.setAttribute('expanded', node.expanded);
                tree_item.setAttribute('select', node.selected);

                //log("node.id: " + node.id);
                //log("tree_item.id: " + tree_item.id);

            var tree_row = document.createElement('div'); // <div class="tree-row" has-children="true" may-have-children="" select="false"></div>
                tree_row.classList.add('tree-row');
                tree_row.setAttribute('may-have-children', '');

                if (!node.children) {
                    if (node.type == 'folder') {
                        tree_row.setAttribute('has-children', false);
                        //log("Set attribute 'has-children' to " + tree_item.getAttribute('has-children')) + " for " + tree_item.id + ".";
                    }
                } else {
                    if (node.type == 'folder') {
                        tree_row.setAttribute('has-children', true);
                        //log("Set attribute 'has-children' to " + tree_item.getAttribute('has-children')) + " for " + tree_item.id + ".";
                    }
                }

                tree_row.setAttribute('select', node.selected);

            var exp_icon = document.createElement('span'); // <span class="expand-icon"></span>
                exp_icon.classList.add('expand-icon');

                if (node.type != 'folder') {
                    exp_icon.style.visibility = 'hidden';
                }

            var tree_label = document.createElement('span'); // <span class="tree-label"></span>
                tree_label.classList.add('tree-label');
                tree_label.textContent = node.label;

            var options_button = document.createElement('span'); // <span class="tree-item-options"></span>
                options_button.classList.add('tree-item-options');

            var tree_children = document.createElement('div'); // <div class="tree-children" expanded="false" select="false"></div>
                tree_children.classList.add('tree-children');
                tree_children.setAttribute('expanded', node.expanded);

            tree_row.appendChild(exp_icon);
            tree_row.appendChild(tree_label);
            tree_row.appendChild(options_button);

            tree_item.appendChild(tree_row);

            if(node.hasOwnProperty('children')) {
                if(node.type == 'folder') {
                    //log("Node children: " + node + " has " + node.children.length + " children.");
                    tree_children.appendChild(Tree.buildTree(node.children));
                }
                tree_item.appendChild(tree_children);
            }
            fragment.appendChild(tree_item);
        }
    }
    return fragment;
};
document.getElementById('tree-body-notes').appendChild(Tree.buildTree(TreeNotes));
document.getElementById('tree-body-email').appendChild(Tree.buildTree(TreeEmail));
document.getElementById('tree-body-contacts').appendChild(Tree.buildTree(TreeContacts));

/*log(Tree.buildTree(TreeNotes));
log(Tree.buildTree(TreeEmail));
log(Tree.buildTree(TreeContacts));*/


/**
 * Tree.getState()
 */
Tree.getState = function() {
    var state = JSON.parse(ls.get("SRTTM_State"));
    return state;
};

Tree.setState = function() {
    var state = state || {};

	var $selected = document.querySelector('.tree-row[select=true]');
	var $label = $selected.querySelector('.tree-label');
	var $label_text = $selected.querySelector('.tree-label').textContent;
	var $tree_item = $selected.parentElement('.tree-item');
	var $tree_item_id = $tree_item.getAttribute('id');
	var $item_type = $tree_item.getAttribute('item-type');

	if(!ls.get("SRTTM_State")) {
		state = {
			tab: $('.active').attr('href'),
			item: $tree_item_id
		};
		ls.set("SRTTM_State", JSON.stringify(state));
	} else {
		state = JSON.parse(ls.get("SRTTM_State"));
	}

	//state.item = $tree_item_id;
	//alert("state.item: " + state.item);

	$('#' + state.item).find('.tree-row').attr('select', 'true');
	$('#' + state.item).find('.tree-children').attr('select', 'true');

	$('.active').removeClass('active')
	$('a[href="' + state.tab + '"]').attr('class', 'active');
    $('.active').click();
    
    state.item = $par.attr('id');
	state.itemId = parseInt($par.attr('id').replace(/[^0-9]+/, ''));
	ls.set("SRTTM_State", JSON.stringify(state));
};


/**
 * Tree.getActiveTree()
 * @function Tree.getActiveTree
 * @returns {object} - Tree of selected tree item (i.e., TreeNotes, TreeEmail or TreeContacts)
 */
Tree.getActiveTree = function() {
    var tree = null;

    // Get state data from localStorage
    state = JSON.parse(ls.get("SRTTM_State"));

    if(state.tab == "#tab-notes") {
        tree = TreeNotes;
    } else if(state.tab == "#tab-email") {
        tree = TreeEmail;
    } else if(state.tab == "#tab-contacts") {
        tree = TreeContacts;
    }

    return tree;
};


/**
 * Tree.getActiveId()
 * @function Tree.getActiveId
 * @returns {number} - id of selected tree item
 */
Tree.getActiveId = function() {
    var activeTree = Tree.getActiveTree();
    var activeItem = document.querySelector('#' + state.item);
    var digits = /[^\d]+/;
    var activeItemId = activeItem.id.toString().replace(digits, '');
    //log("Tree.getActiveId(): ", activeItemId);
    
    return parseInt(activeItemId);
};


/**
 * Tree.getIndex()
 * @function Tree.getIndex
 * @returns {number} - id of selected tree item
 */
/*Tree.getIndex = function() {
    var activeTree = Tree.getActiveTree();
    var activeItemId = Tree.getActiveId();
    var index = activeTree.find(item => item.id == activeItemId);
    log("Tree.getIndex(): ", index);
    
    return index;
};*/


/**
 * Tree.getActiveItem()
 * @function Tree.getActiveItem
 * @returns {object} - Object of selected tree item
 */
Tree.getActiveItem = function() {
    var activeTree = Tree.getActiveTree();
    var activeItemId = Tree.getActiveId();
	var activeItem = activeTree.find(item => item.id == activeItemId);
	
    log("TreeData.js:1288 - Tree.getActiveItem(activeItem): ", activeItem);
    log("TreeData.js:1288 - Tree.getActiveItem(activeTree): ", activeTree);
    log("TreeData.js:1288 - Tree.getActiveItem(activeItemId): ", activeItemId);
    
    return activeItem;
};


/**
 * Tree.getActiveElement()
 * @function Tree.getActiveElement
 * @returns {element} - Element of selected tree item
 */
Tree.getActiveElement = function() {
    state = JSON.parse(ls.get("SRTTM_State"));
    var activeTab = state.tab;
    var activeElement = document.getElementById(state.item);
    var item = Tree.getActiveItem();
    activeElement.type = activeElement.attributes['item-type'].nodeValue;
    activeElement.label = activeElement.attributes['tree-label'].nodeValue;
    activeElement.id = activeElement.attributes['id'].nodeValue;
    activeElement.selected = activeElement.attributes['select'].nodeValue;
    activeElement.type = activeElement.attributes['item-type'].nodeValue;

    switch(activeElement.type) {
        case 'folder':
            var element = {
                type: activeElement.attributes['item-type'].nodeValue, //item.type, // YOU WERE HERE!!! Assign attributes as you did with activeElement.type on line 1308
                label: activeElement.attributes['tree-label'].nodeValue, //item.label,
                id: activeElement.attributes['id'].nodeValue, //item.id,
                expanded: activeElement.attributes['expanded'].nodeValue, //item.expanded,
                selected: activeElement.attributes['select'].nodeValue, //item.selected
            };
            break;
            
        case 'note':
            var element = {
                type: activeElement.attributes['item-type'].nodeValue, //item.type,
                label: activeElement.attributes['tree-label'].nodeValue, //item.label,
                id: activeElement.attributes['id'].nodeValue, //item.id,
                selected: activeElement.attributes['select'].nodeValue, //item.selected,
                content: {
                    name: activeElement.attributes['tree-label'].nodeValue, //item.content.name,
                    body: activeElement.attributes['tree-label'].nodeValue, //item.content.body
                }
            };
            break;

        case 'email':
            var element = {
                type: activeElement.attributes['item-type'].nodeValue, //item.type,
                label: activeElement.attributes['tree-label'].nodeValue, //item.label,
                id: activeElement.attributes['id'].nodeValue, //item.id,
                selected: activeElement.attributes['select'].nodeValue, //item.selected,
                content: {
                    name: activeElement.attributes['tree-label'].nodeValue, //item.content.name,
                    to: activeElement.attributes['tree-label'].nodeValue, //item.content.to,
                    cc: activeElement.attributes['tree-label'].nodeValue, //item.content.cc,
                    subject: activeElement.attributes['tree-label'].nodeValue, //item.content.subject,
                    attachments: activeElement.attributes['tree-label'].nodeValue, //item.content.attachments,
                    body: activeElement.attributes['tree-label'].nodeValue, //item.content.body
                }
            };
            break;

        case 'contact':
            var element = {
                type: activeElement.attributes['item-type'].nodeValue, //item.type,
                label: activeElement.attributes['tree-label'].nodeValue, //item.label,
                id: activeElement.attributes['id'].nodeValue, //item.id,
                selected: activeElement.attributes['select'].nodeValue, //item.selected,
                content: {
                    firstName: activeElement.attributes['tree-label'].nodeValue, //item.content.firstName,
                    lastName: activeElement.attributes['tree-label'].nodeValue, //item.content.lastName,
                    fullName: activeElement.attributes['tree-label'].nodeValue, //item.content.fullName,
                    phone: activeElement.attributes['tree-label'].nodeValue, //item.content.phone,
                    email: activeElement.attributes['tree-label'].nodeValue, //item.content.email,
                    business: activeElement.attributes['tree-label'].nodeValue, //item.content.business,
                    ean: activeElement.attributes['tree-label'].nodeValue, //item.content.ean,
                    comments: activeElement.attributes['tree-label'].nodeValue, //item.content.comments
                }
            };
            break;

        default:
            break;
    }

    return element;
};


/**
 * Tree.findById()
 */
Tree.findById = function (data, id) {
    var result = -1
    for(var i = 0; i < data.length; i++) {
        if(data[i].id === id) {
            return data[i];
        } else if(data[i].children && data[i].children.length && typeof data[i].children === "object") {
            result = Tree.findById(data[i].children, id);
            if (result.id === id) {
                return result;
            }
        }
    }
    return result;
};
//log("Tree.findById()1: ", Tree.findById(TreeNotes, Tree.));


/* *
 * Update the data for the selected tree item
 * When the selected tree item is modified, update the respective object in the localStorage data.
 */
Tree.update = function() {
    var tree = Tree.getActiveTree();
    var item = Tree.getActiveItem();
    var element = Tree.getActiveElement();
	element.type = element.attributes['item-type'].nodeValue;
    var state = JSON.parse(ls.get("SRTTM_State"));

    // _itemElement is the selected tree-item element
    var _itemElement = document.getElementById(state.item);
    log("_itemElement: ", _itemElement);

    //log("this.type: " + $par.attr('item-type'));
	//log("this.label: " + $lbl.text());
	//log("this.id: " + $par.attr('id').match(/\d+/));
	//log("this.selected: " + $par.attr('select'));
    //log("this.expanded: " + $par.attr('expanded'));

    if(item.type == 'folder') {
        var node = {
            type: item.type,
            label: item.label,
            id: item.id,
            expanded: item.expanded,
            selected: item.selected
        };

        item.label = _itemElement.querySelector('.tree-label').innerHTML;
        item.expanded = _itemElement.getAttribute('expanded');
        item.selected = _itemElement.getAttribute('select');

    } else if(item.type == 'note') {
        var node = {
            type: item.type,
            label: item.label,
            id: item.id,
            selected: item.selected,
            content: {
                name: item.content.name,
                body: item.content.body
            }
        };
        //TreeNotes.push(node);

    } else if(item.type == 'email') {
        var node = {
            type: item.type,
            label: item.label,
            id: item.id,
            selected: item.selected,
            content: {
                name: item.content.name,
                to: item.content.to,
                cc: item.content.cc,
                subject: item.content.subject,
                attachments: item.content.attachments,
                body: item.content.body
            }
        };

    } else if(item.type == 'contact') {
        var node = {
            type: item.type,
            label: item.label,
            id: item.id,
            selected: item.selected,
            content: {
                firstName: item.content.firstName,
                lastName: item.content.lastName,
                fullName: item.content.fullName,
                phone: item.content.phone,
                email: item.content.email,
                business: item.content.business,
                ean: item.content.ean,
                comments: item.content.comments
            }
        };
    }
    return item;
};
Tree.update();
Tree.getActiveItem();
log("Tree.getActiveItem(): ", Tree.getActiveItem());


/**
 * A function to take a string written in dot notation style, and use it to
 * find a nested object property inside of an object.
 *
 * Useful in a plugin or module that accepts a JSON array of objects, but
 * you want to let the user specify where to find various bits of data
 * inside of each custom object instead of forcing a standardized
 * property list.
 *
 * @param String nested A dot notation style parameter reference (ie "urls.small")
 * @param Object object (optional) The object to search
 *
 * @returns the value of the property in question
 */

Tree.getProperty = function(object, propertyName) {
    var parts = propertyName.split("."),
        i,
        property = object || this;

    for(i = 0; i < parts.length; i++) {
        property = property[parts[i]];
    }
    return property;
};
log("Tree.getProperty(object, propertyName): ", Tree.getProperty(TreeNotes, 'id'));

log("Object.getOwnPropertyNames(): ", Object.getOwnPropertyNames(TreeNotes));
//log("Object.keys(Number.prototype): ", Object.keys(JSON.parse(ls.get("Tree:Notes"))).forEach());

/*$.each(JSON.parse(ls.get("Tree:Notes")), function() {
    //var id = null;
    var $selected = $('.tree-row[select=true]');
	var $label = $selected.find('.tree-label');
	var $label_text = $selected.find('.tree-label').text();
	var $tree_item = $selected.parent('.tree-item');
	var $tree_item_id = $tree_item.attr('id');
	var $item_type = $tree_item.attr('item-type');

    if($tree_item_id == this.type + "-" + this.id) {
        log("Matched: ", this.type + "-" + this.id);
    } else {
        log("No matches found.");
    }

    //log("this.id: ", this.type + "-" + this.id);
});*/



/* *
 * Remove from js/init.js
 */
/*if(!ls.get("Tree:Notes")) {
    ls.set("Tree:Notes", JSON.stringify(Tree.notes));
}
if(!ls.get("Tree:Email")) {
    ls.set("Tree:Email", JSON.stringify(Tree.email));
}
if(!ls.get("Tree:Contacts")) {
    ls.set("Tree:Contacts", JSON.stringify(Tree.contacts));
}*/

//log("Tree.getFirstLevelData(): ", Tree.getFirstLevelData(Tree.notes));

//log("Tree.getChildrenOfNode(): ", Tree.getChildrenOfNode(Tree.notes, 1));

//var tree_body = document.querySelector('#tree-body-notes');
//Tree.buildTree('#tree-body-notes', Tree.notes);
//log("Tree.buildTree(): ", Tree.buildTree('#tree-body-notes', Tree.notes));
