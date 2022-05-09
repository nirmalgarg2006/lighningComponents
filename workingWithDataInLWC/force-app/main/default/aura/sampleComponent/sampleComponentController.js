({
    
    doInit: function(cmp) {
        alert('xxx');
        var unsaved = cmp.find("unsaved");
        unsaved.setUnsavedChanges(true, { label: 'My component name' });
    }
})