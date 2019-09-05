function rotate(deg, tab) {
	// Send message to rotate image
	chrome.tabs.sendMessage(tab.id, {deg: deg});
}

// Context menu structures
var contextMenuItem = {
	"id": "parent",
	"title": "Image Rotator",
	"contexts": ["image"]
};
var contextMenuItemLeft = {
	"parentId": "parent",
	"id": "rotatorLeft",
	"title": "Rotate Left 90°",
	"contexts": ["image"]
};
var contextMenuItemRight = {
	"parentId": "parent",
	"id": "rotatorRight",
	"title": "Rotate Right 90°",
	"contexts": ["image"]
};
var contextMenuItemHalf = {
	"parentId": "parent",
	"id": "rotatorHalf",
	"title": "Rotate 180°",
	"contexts": ["image"]
};
var contextMenuItemReturn = {
	"parentId": "parent",
	"id": "rotatorUndo",
	"title": "Unrotate",
	"contexts": ["image"]
};

// When the app gets installed, set up the context menus
chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create(contextMenuItem);
	chrome.contextMenus.create(contextMenuItemReturn);
	chrome.contextMenus.create(contextMenuItemLeft);
	chrome.contextMenus.create(contextMenuItemRight);
	chrome.contextMenus.create(contextMenuItemHalf);
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId == "rotatorLeft") {
		rotate('-90', tab);
	} else if (info.menuItemId == "rotatorRight") {
		rotate('90', tab);
	} else if (info.menuItemId == "rotatorHalf") {
		rotate('180', tab);
	} else if (info.menuItemId == "rotatorUndo") {
		rotate('0', tab);
	}
});
