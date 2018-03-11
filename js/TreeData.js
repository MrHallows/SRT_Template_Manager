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
                id: 17,
                selected: false,
                content: {
                    name: 'Busy Signal',
                    body: 'I called [Customer] in regard to [his/her] [Subject] request. Received a busy signal; unable to leave a voice message.'
                }
            },
            {
                type: 'folder',
                label: 'Sauropods',
                id: 18,
                expanded: false,
                selected: false,
                children: [{
                        type: 'note',
                        label: 'Diplodocoids',
                        id: 19,
                        selected: false,
                        content: {
                            name: '',
                            body: ''
                        }
                    },
                    {
                        type: 'folder',
                        label: 'Macronarians',
                        id: 20,
                        expanded: false,
                        selected: false,
                        children: [{
                                type: 'note',
                                label: 'Brachiosaurids',
                                id: 21,
                                selected: false,
                                content: {
                                    name: '',
                                    body: ''
                                }
                            },
                            {
                                type: 'note',
                                label: 'Titanosaurians',
                                id: 22,
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
    for(let index in data) {
        if(data.hasOwnProperty(index)) {
            log("index: ", index);

            //var result = null;
            let result = data[index];
            log("result: ", result);
    
            const root = document.querySelector(dest);

            const fragment = document.createDocumentFragment();
        
            const tree_item = document.createElement('div'); // <div class="tree-item" item-type="folder" expanded="false" select="false"></div>
                tree_item.classList.add('tree-item');
                tree_item.setAttribute('item-type', result.type);
                tree_item.setAttribute('id', result.type + "-" + result.id);
                tree_item.setAttribute('expanded', result.expanded);
                tree_item.setAttribute('select', result.selected);
        
            const tree_row = document.createElement('div'); // <div class="tree-row" has-children="true" may-have-children="" select="false"></div>
                tree_row.classList.add('tree-row');
                tree_row.setAttribute('may-have-children', '');
                tree_row.setAttribute('select', result.selected);
        
            const exp_icon = document.createElement('span'); // <span class="expand-icon"></span>
                exp_icon.classList.add('expand-icon');
        
            const tree_label = document.createElement('span'); // <span class="tree-label"></span>
                tree_label.classList.add('tree-label');
                //let label_text = document.createTextNode(result.label);
                //tree_label.appendChild(label_text);
                tree_label.textContent = result.label;
        
            const tree_children = document.createElement('div'); // <div class="tree-children" expanded="false" select="false"></div>
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

            tree_row.appendChild(exp_icon);
            tree_row.appendChild(tree_label);

            tree_item.appendChild(tree_row);
            tree_item.appendChild(tree_children);

            fragment.appendChild(tree_item);


            const children = data[index].children;
            if (!children) {
                if (children[index].type == 'folder') {
                    tree_item.setAttribute('has-children', false);
                    tree_row.setAttribute('has-children', false);
                }
            } else {
                if (children[index].type == 'folder') {
                    tree_item.setAttribute('has-children', true);
                    tree_row.setAttribute('has-children', true);
                }
                //log("Tree:Children ", children[index].label);

                for(let index in children) {
                    if (children.hasOwnProperty(index)) {
                        log("Tree:Children ", children[index]);

                        let result = children[index];

                        let tree_item = document.createElement('div'); // <div class="tree-item" item-type="folder" expanded="false" select="false"></div>
                            tree_item.classList.add('tree-item');
                            tree_item.setAttribute('item-type', result.type);
                            tree_item.setAttribute('id', result.type + "-" + result.id);
                            tree_item.setAttribute('expanded', result.expanded);
                            tree_item.setAttribute('select', result.selected);
                    
                        let tree_row = document.createElement('div'); // <div class="tree-row" has-children="true" may-have-children="" select="false"></div>
                            tree_row.classList.add('tree-row');
                            tree_row.setAttribute('select', result.selected);
                            
                        let exp_icon = document.createElement('span'); // <span class="expand-icon"></span>
                            exp_icon.classList.add('expand-icon');

                            if (children[index].type != 'folder') {
                                exp_icon.style.visibility = 'hidden';
                            }

                        tree_row.appendChild(exp_icon);
                    
                        let tree_label = document.createElement('span'); // <span class="tree-label"></span>
                            tree_label.classList.add('tree-label');
                            //let label_text = document.createTextNode(result.label);
                            //tree_label.appendChild(label_text);
                            tree_label.textContent = result.label;
                            
                        tree_row.appendChild(tree_label);
                    
                        let tree_children = document.createElement('div'); // <div class="tree-children" expanded="false" select="false"></div>
                            tree_children.classList.add('tree-children');
                            tree_children.setAttribute('expanded', result.expanded);



                        tree_item.appendChild(tree_row);
                        tree_item.appendChild(tree_children);

                        fragment.appendChild(tree_item);
                    }
                }
            }

            //log("Tree:Data (result): ", result);
            //log("Tree:Data (folders): ", folders);
            /*if(!ls.get("Tree:Folders")) {
                ls.set("Tree:Folders", JSON.stringify(folders));
            }*/
            folders.push(result);
            root.appendChild(fragment);
        }
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
