var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-popup',
  summary : 'Semantic UI - Popup (official): Single component release of popup',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Popup.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
