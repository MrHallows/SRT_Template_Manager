/* TreeData.js */
/* js/TreeData.js */


var Tree = {};
var EmailTree = {};
var ContactsTree = {};

Tree.notes = [
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
                    body: ''
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


Tree.getFirstLevelData = function(data) {
    if(!data) data = Tree.notes;

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
        } else if(this.type == 'note') { // this.type == 'note'
            var node = {
                type: this.type,
                label: this.label,
                id: this.id,
                selected: this.selected,
                content: { // Not sure yet if these are necessary here..
                    name: this.content.name,
                    body: this.content.body
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


Tree.buildTree = function(dest, data) {
    //var result = null;
    var folders = [];

    //log("dest: ", dest);

    // Parse through data (i.e., Tree.notes)
    for(var index in data) {
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

                /*if(!result.children) {
                    tree_row.setAttribute('has-children', false);
                    log("result.children: ", result.children);
                } else {
                    tree_row.setAttribute('has-children', true);
                    alert("index " + index + " has children:\n" + result.children[index].label);
                    //tree_children.appendChild(result.children); //Tree.buildTree('.tree-children', data[index].children));
                    //var children = data.getChildrenOfNode(index);
                }*/

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
        Tree.buildTree('#tree-body-notes', result_);
    }

    //log("Tree:Folders: ", folders);
    //log("Tree.buildTree(): ", Tree.buildTree());

    //return folders;
    //return Tree.buildTree(dest, folders);
};
Tree.buildTree('#tree-body-notes', Tree.notes);


if(!ls.get("Tree:Notes")) {
    ls.set("Tree:Notes", JSON.stringify(Tree.notes));
}

//log("Tree.getFirstLevelData(): ", Tree.getFirstLevelData(Tree.notes));

//log("Tree.getChildrenOfNode(): ", Tree.getChildrenOfNode(Tree.notes, 1));

//var tree_body = document.querySelector('#tree-body-notes');
//Tree.buildTree('#tree-body-notes', Tree.notes);
//log("Tree.buildTree(): ", Tree.buildTree('#tree-body-notes', Tree.notes));
