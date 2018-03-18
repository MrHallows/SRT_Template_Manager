/* TreeData.js */
/* js/TreeData.js */


var Tree = Tree || {};


/* *
 * Tree: Notes
 */
Tree.notes = [
    {
        type: 'folder',
        label: 'Alcohol Enrollment',
        id: 3,
        expanded: false,
        selected: false,
        children: [{
                type: 'note',
                label: 'Sent Initial Email',
                id: 4,
                selected: false,
                content: {
                    name: 'Sent Initial Email',
                    body: 'Sent%20initial%20email.%20Awaiting%20response%20with%20documentation.'
                }
            },
            {
                type: 'note',
                label: 'Ceratosaurians',
                id: 5,
                selected: false,
                content: {
                    name: 'Ceratosaurians',
                    body: ''
                }
            },
            {
                type: 'note',
                label: 'Spinosauroids',
                id: 6,
                selected: false,
                content: {
                    name: 'Spinosauroids',
                    body: ''
                }
            },
            {
                type: 'note',
                label: 'Carnosaurians',
                id: 7,
                selected: false,
                content: {
                    name: 'Carnosaurians',
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
                        type: 'note',
                        label: 'Tyrannosauroids',
                        id: 9,
                        selected: false,
                        content: {
                            name: 'Tyrannosauroids',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Ornithomimosaurians',
                        id: 10,
                        selected: false,
                        content: {
                            name: 'Ornithomimosaurians',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Therizinosauroids',
                        id: 11,
                        selected: false,
                        content: {
                            name: 'Therizinosauroids',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Oviraptorosaurians',
                        id: 12,
                        selected: false,
                        content: {
                            name: 'Oviraptorosaurians',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Dromaeosaurids',
                        id: 13,
                        selected: false,
                        content: {
                            name: 'Dromaeosaurids',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Troodontids',
                        id: 14,
                        selected: false,
                        content: {
                            name: 'Troodontids',
                            body: ''
                        }
                    },
                    {
                        type: 'note',
                        label: 'Avialans',
                        id: 15,
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
        label: 'SmartPost',
        id: 1,
        expanded: false,
        selected: false,
        children: [{
                type: 'note',
                label: 'SmartPost Implemented',
                id: 2,
                selected: false,
                content: {
                    name: 'SmartPost Implemented',
                    body: 'Implemented%20SmartPost%20(SmartPost%20ID%3A%20%2C%20Mailer%20ID%3A%20)%20and%20sent%20welcome%20%26%20activation%20emails.'
                }
            },
            {
                type: 'note',
                label: 'Applied Pricing',
                id: 32,
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
        id: 16,
        expanded: false,
        selected: false,
        children: [{
                type: 'note',
                label: 'Left Voice Message',
                id: 17,
                selected: false,
                content: {
                    name: 'Left Voice Message',
                    body: 'I called [Customer] in regard to [his/her] [Subject] request. No answer; left a voice message.'
                }
            },
            {
                type: 'note',
                label: 'Busy Signal',
                id: 18,
                selected: false,
                content: {
                    name: 'Busy Signal',
                    body: 'I called [Customer] in regard to [his/her] [Subject] request. Received a busy signal; unable to leave a voice message.'
                }
            },
            {
                type: 'folder',
                label: 'Sauropods',
                id: 19,
                expanded: false,
                selected: false,
                children: [{
                        type: 'note',
                        label: 'Diplodocoids',
                        id: 20,
                        selected: false,
                        content: {
                            name: '',
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
                                type: 'note',
                                label: 'Brachiosaurids',
                                id: 22,
                                selected: false,
                                content: {
                                    name: '',
                                    body: ''
                                }
                            },
                            {
                                type: 'note',
                                label: 'Titanosaurians',
                                id: 23,
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
        label: 'SmartPost',
        id: 1,
        expanded: false,
        selected: false,
        children: [{
                type: 'email',
                label: 'SmartPost Implemented',
                id: 2,
                selected: false,
                content: {
                    name: 'SmartPost Implemented',
                    body: 'Implemented%20SmartPost%20(SmartPost%20ID%3A%20%2C%20Mailer%20ID%3A%20)%20and%20sent%20welcome%20%26%20activation%20emails.'
                }
            },
            {
                type: 'email',
                label: 'Applied Pricing',
                id: 32,
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
                    body: '%5BCustomer%5D%2C%0A%0AThank%20you%20for%20your%20interest%20in%20becoming%20an%20authorized%20shipper%20with%20FedEx.%20To%20begin%20the%20process%2C%20there%20are%20few%20things%20we%20need%20to%20cover%3A%0A%0A1)%09Please%20confirm%20the%20company%20name%20and%20shipping%20address%20are%3A%0A%0ABusiness%0AAddress%0ACity%2C%20State%2C%20ZIP%0A%0A2)%09Is%20the%20above%20shipping%20address%20also%20the%20same%20on%20your%20State%20Liquor%20License%20to%20sell%20and%20your%20TTB%20Permit%3F%0A%0A3)%09Is%20your%20business%20a%20Retailer%3F%20If%20so%2C%20only%20a%20State%20Liquor%20License%20is%20required.%20Otherwise%2C%20both%20a%20State%20Liquor%20License%20and%20TTB%20Permit%20are%20required.%0A%0A4)%09With%20FedEx%20the%20only%20thing%20you%20are%20able%20to%20ship%20to%20consumers%20is%20wine.%20Beer%20and%20spirits%20can%20only%20be%20sent%20to%20other%20licensed%20distributors.%20What%20will%20you%20be%20shipping%3B%20wine%2C%20beer%20or%20spirits%3F%0A%0A5)%09Will%20you%20be%20shipping%20domestically%2C%20internationally%20or%20both%3F%0A%0A6)%09Does%20the%20company%20have%20a%20fax%20number%3F%20If%20so%2C%20please%20provide%20it.%0A%0A7)%09What%20type%20of%20packaging%20will%20you%20be%20using%20to%20ship%3F%20Polystyrene%2C%20Molded%20Pulp%2C%20or%20Die-Cut%20Corrugated.%20If%20you%20are%20not%20sure%2C%20please%20review%20this%20page%3A%20https%3A%2F%2Fsmallbusiness.fedex.com%2Finternational%2Fshipping-wine%2Fresources%0A%0A8)%09Part%20of%20the%20shipping%20agreement%20is%20that%20labels%20must%20be%20completed%20through%20an%20automation%20method%2C%20such%20as%20FedEx%20Ship%20Manager%C2%AE%20at%20www.fedex.com%20or%20FedEx%20Ship%20Manager%C2%AE%20Software.%20https%3A%2F%2Fsmallbusiness.fedex.com%2Finternational%2Fshipping-wine%2F%0A%0AAlong%20with%20your%20responses%20to%20the%20above%20questions%2C%20if%20you%20would%20please%20forward%20me%20copies%20of%20your%20State%20Liquor%20License%20and%20your%20TTB%20permit%20(depending%20on%20your%20answer%20to%20question%203)%2C%20I%20will%20forward%20everything%20to%20our%20legal%20department.%20The%20process%20generally%20takes%20approximately%202%20-%2010%20business%20days%2C%20upon%20receipt%20of%20your%20licenses%2C%20providing%20there%20are%20no%20issues%20with%20the%20enrollment.%0A'
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
                label: 'SmartPost Implemented',
                id: 2,
                selected: false,
                content: {
                    name: 'SmartPost Implemented',
                    to: '',
                    cc: '',
                    subject: '',
                    attachments: '',
                    body: 'Implemented%20SmartPost%20(SmartPost%20ID%3A%20%2C%20Mailer%20ID%3A%20)%20and%20sent%20welcome%20%26%20activation%20emails.'
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
                    body: 'I called [Customer] in regard to [his/her] [Subject] request. No answer; left a voice message.'
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
                    body: 'I called [Customer] in regard to [his/her] [Subject] request. Received a busy signal; unable to leave a voice message.'
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
                    ean: '',
                    comments: ''
                }
            },
            {
                type: 'contact',
                label: 'Applied Pricing',
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
                label: 'Sent Initial Email',
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
                label: 'Ceratosaurians',
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
                label: 'Spinosauroids',
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
                label: 'Carnosaurians',
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


/* *
 * Store tree data to localStorage
 */
Tree.persist = function(data) {
    if(!data) data = null;

    var datum = [];

    var TreeNotes = [];
    var TreeEmail = [];
    var TreeContacts = [];

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
            //node.load_on_demand = true;
        }

        datum.push(node);

        TreeNotes.push(node);
        TreeEmail.push(node);
        TreeContacts.push(node);

        //datum.push({TreeNotes, TreeEmail, TreeContacts});
    });
    ls.set("datum", JSON.stringify(datum));
    return datum;
};

ls.set("Tree:Notes", JSON.stringify(Tree.notes));
ls.set("Tree:Email", JSON.stringify(Tree.email));
ls.set("Tree:Contacts", JSON.stringify(Tree.contacts));

Tree.persist(Tree.notes);
Tree.persist(Tree.email);
Tree.persist(Tree.contacts);


function traverse(x) {
  if(isArray(x)) {
    traverseArray(x);
  } else if((typeof x === 'object') && (x !== null)) {
    traverseObject(x);
  } else {

  }
}

function traverseArray(arr) {
  arr.forEach(function(x) {
    traverse(x);
  })
}

function traverseObject(obj) {
  for(var key in obj) {
    if (obj.hasOwnProperty(key)) {
      traverse(obj[key]);
    }
  }
}

function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

// usage:
log("---- Traverse Tree.notes: ", traverse(Tree.notes));


/* *
 * Build the HTML tree
 */
Tree.buildTree = function(dest, data) {
    //var result = null;
    var folders = [];

    //log("dest: ", dest);

    // Parse through the data (i.e., Tree.notes)
    for(let index in data) {
        if(data.hasOwnProperty(index)) {
            log("index: ", index);

            //var result = null;
            var result = data[index];
            var children = data[index].children;
            log("result: ", result);

            var root = document.querySelector(dest);

            var fragment = document.createDocumentFragment();
        
            var tree_item = document.createElement('div'); // <div class="tree-item" item-type="folder" expanded="false" select="false"></div>
                tree_item.classList.add('tree-item');
                tree_item.setAttribute('item-type', result.type);
                tree_item.setAttribute('id', result.type + "-" + result.id);
                log("tree_item.id: " + tree_item.id);
                log("result.id: " + result.id);

                if (!result.children) {
                    if (result.type == 'folder') {
                        tree_item.setAttribute('has-children', false);
                        log("Set attribute 'has-children' to " + tree_item.getAttribute('has-children'));
                        notification.open({
                            severity: 'info',
                            content: "Set attribute 'has-children' to " + tree_item.getAttribute('has-children')
                        });
                    }
                } else {
                    if (result.type == 'folder') {
                        tree_item.setAttribute('has-children', true);
                    }
                }

                tree_item.setAttribute('expanded', result.expanded);
                tree_item.setAttribute('select', result.selected);

                /*if (!children) {
                    if (children[index].type == 'folder') {
                        tree_item.setAttribute('has-children', false);
                        tree_row.setAttribute('has-children', false);

                        notification.open({
                            severity: 'info',
                            content: result.type + " " + result.label + " has no children."
                        });
                    }
                } else {
                    if (children[index].type == 'folder') {
                        tree_item.setAttribute('has-children', true);
                        tree_row.setAttribute('has-children', true);

                        notification.open({
                            severity: 'info',
                            content: result.type + " " + result.label + " has " + children.length + " children."
                        });
                    }
                }*/
        
            var tree_row = document.createElement('div'); // <div class="tree-row" has-children="true" may-have-children="" select="false"></div>
                tree_row.classList.add('tree-row');
                tree_row.setAttribute('may-have-children', '');

                if (!result.children) {
                    if (result.type == 'folder') {
                        tree_row.setAttribute('has-children', false);
                    }
                } else {
                    if (result.type == 'folder') {
                        tree_row.setAttribute('has-children', true);
                    }
                }

                tree_row.setAttribute('select', result.selected);
        
            var exp_icon = document.createElement('span'); // <span class="expand-icon"></span>
                exp_icon.classList.add('expand-icon');
        
            var tree_label = document.createElement('span'); // <span class="tree-label"></span>
                tree_label.classList.add('tree-label');
                //let label_text = document.createTextNode(result.label);
                //tree_label.appendChild(label_text);
                tree_label.textContent = result.label;
        
            var tree_children = document.createElement('div'); // <div class="tree-children" expanded="false" select="false"></div>
                tree_children.classList.add('tree-children');
                tree_children.setAttribute('expanded', result.expanded);

                if(!result.children) {
                    tree_row.setAttribute('has-children', false);
                    log("result.children: ", result.children);
                } else {
                    tree_row.setAttribute('has-children', true);
                    alert("index " + index + " has children:\n" + result.children[index].label);
                    //tree_children.appendChild(result.children); //Tree.buildTree('.tree-children', data[index].children));
                    //var children = data.getChildrenOfNode(index);
                }

            /*tree_row.appendChild(exp_icon);
            tree_row.appendChild(tree_label);

            tree_item.appendChild(tree_row);
            tree_item.appendChild(tree_children);

            fragment.appendChild(tree_item);*/

            var result_ = null;

            if (!children) {
                //if (children[index].type == 'folder') {
                    tree_item.setAttribute('has-children', false);
                    tree_row.setAttribute('has-children', false);
                //}
            } else {
                if (children[index].type == 'folder') {
                    tree_item.setAttribute('has-children', true);
                    tree_row.setAttribute('has-children', true);
                }
                //log("Tree:Children ", children[index].label);


                for(let index in children) {
                    if (children.hasOwnProperty(index)) {

                        result_ = children[index];
                        log("Tree:Children ", result_);

                        let tree_item_ = document.createElement('div'); // <div class="tree-item" item-type="folder" expanded="false" select="false"></div>
                            tree_item_.classList.add('tree-item');
                            tree_item_.setAttribute('item-type', result_.type);
                            tree_item_.setAttribute('id', result_.type + "-" + result_.id);

                            if (!result_.children) {
                                if (result_.type == 'folder') {
                                    tree_item_.setAttribute('has-children', false);
                                    log("Set attribute 'has-children' to " + tree_item_.getAttribute('has-children'));
                                    notification.open({
                                        severity: 'info',
                                        content: "Set attribute 'has-children' to " + tree_item_.getAttribute('has-children')
                                    });
                                }
                            } else {
                                if (result_.type == 'folder') {
                                    tree_item_.setAttribute('has-children', true);
                                }
                            }

                            tree_item_.setAttribute('expanded', result_.expanded);
                            tree_item_.setAttribute('select', result_.selected);
                    
                        let tree_row_ = document.createElement('div'); // <div class="tree-row" has-children="true" may-have-children="" select="false"></div>
                            tree_row_.classList.add('tree-row');
                            tree_row_.setAttribute('may-have-children', '');
                            
                            if (!result_.children) {
                                if (result_.type == 'folder') {
                                    tree_row_.setAttribute('has-children', false);
                                }
                            } else {
                                if (result_.type == 'folder') {
                                    tree_row_.setAttribute('has-children', true);
                                }
                            }

                            tree_row_.setAttribute('select', result_.selected);
                            
                        let exp_icon_ = document.createElement('span'); // <span class="expand-icon"></span>
                            exp_icon_.classList.add('expand-icon');

                            if (children[index].type != 'folder') {
                                exp_icon_.style.visibility = 'hidden';
                            }
                    
                        let tree_label_ = document.createElement('span'); // <span class="tree-label"></span>
                            tree_label_.classList.add('tree-label');
                            //let label_text = document.createTextNode(result_.label);
                            //tree_label_.appendChild(label_text);
                            tree_label_.textContent = result_.label;
                    
                        let tree_children_ = document.createElement('div'); // <div class="tree-children" expanded="false" select="false"></div>
                            tree_children_.classList.add('tree-children');
                            tree_children_.setAttribute('expanded', result_.expanded);

                        log("(Children) result_.id: " + result_.id);
                        
                        if (!children) {
                            if (children[index].type == 'folder') {
                                tree_item_.setAttribute('has-children', false);
                                tree_row_.setAttribute('has-children', false);
                            }
                        } else {
                            if (children[index].type == 'folder') {
                                tree_item_.setAttribute('has-children', true);
                                tree_row_.setAttribute('has-children', true);
                            }
                        }


                        tree_row_.appendChild(exp_icon_);
                        tree_row_.appendChild(tree_label_);
                        tree_item_.appendChild(tree_row_);
                        tree_item_.appendChild(tree_children_);

                        tree_row.appendChild(exp_icon);
                        tree_row.appendChild(tree_label);
                        tree_children.appendChild(tree_item_);
                        tree_item.appendChild(tree_row);
                        tree_item.appendChild(tree_children);

                        fragment.appendChild(tree_item);
                    }
                }
            }

            //log("Tree:Data (result_): ", result_);
            //log("Tree:Data (folders): ", folders);
            /*if(!ls.get("Tree:Folders")) {
                ls.set("Tree:Folders", JSON.stringify(folders));
            }*/
            folders.push(result_);
            root.appendChild(fragment);
        }
        Tree.buildTree(dest, result_);
    }

    //log("Tree:Folders: ", folders);
    //log("Tree.buildTree(): ", Tree.buildTree());

    //return folders;
    //return Tree.buildTree(dest, folders);
};


// Array of Notes
var TreeNotes = localStorage[Tree.notes] ? JSON.parse(localStorage[Tree.notes]) : [];


// Array of Email
var TreeEmail = localStorage[Tree.email] ? JSON.parse(localStorage[Tree.email]) : [];

// Array of Contacts
var TreeContacts = localStorage[Tree.contacts] ? JSON.parse(localStorage[Tree.contacts]) : [];


Tree.buildTree('#tree-body-notes', Tree.notes);
Tree.buildTree('#tree-body-email', Tree.email);
Tree.buildTree('#tree-body-contacts', Tree.contacts);


if(!ls.get("Tree:Notes")) {
    ls.set("Tree:Notes", JSON.stringify(Tree.notes));
}
if(!ls.get("Tree:Email")) {
    ls.set("Tree:Email", JSON.stringify(Tree.email));
}
if(!ls.get("Tree:Contacts")) {
    ls.set("Tree:Contacts", JSON.stringify(Tree.contacts));
}

//log("Tree.getFirstLevelData(): ", Tree.getFirstLevelData(Tree.notes));

//log("Tree.getChildrenOfNode(): ", Tree.getChildrenOfNode(Tree.notes, 1));

//var tree_body = document.querySelector('#tree-body-notes');
//Tree.buildTree('#tree-body-notes', Tree.notes);
//log("Tree.buildTree(): ", Tree.buildTree('#tree-body-notes', Tree.notes));
