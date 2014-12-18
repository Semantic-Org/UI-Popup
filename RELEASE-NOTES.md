### Version 1.1.0 - December 02, 2014

- **Popup** - Popup now has a ``settings.prefer`` that defaults to ``adjacent``. This setting sets prefered next placement when a popup cannot fit on screen in the chosen placement. ``prefer`` can also be set to ``opposite`` to prefer the same position on the opposite side
- **Popup** - Popup can now use a setting ``lastResort``. When set to a position it will be used as a last resort even if popup does not entirely fit on the page. Setting this to ``false`` will produce an error when a popup cannot fit on screen.

### Version 1.0.0 - November 24, 2014

- **Popup** - Popup can now allow itself not to be closed when hovered over
- **Popup** - A popup element can now be specified on initialization.
- **Popup** - Positioned popups will now extend in the opposite direction to fit better with floated content

### Version 0.18.0 - June 6, 2014

- **Popup** - Fixes javascript animation of popup missing easing dependency

### Version 0.17.0 - May 9, 2014

- **Popup** - Popup now has an ``onRemove`` callback after removing element from DOM

### Version 0.12.5 - Feb 04, 2014

- **Popup** - Fixes issue where popups using ``title`` attribute to store data were losing title content instead of correctly restoring it

### Merry Christmas!

-**Popup** - Fixes popup sometimes opening and closing when ``event:click`` is used and a user double clicks

### Version 0.10.3 - Dec 22, 2013

- **Popup** - Native browser popups no longer if using ``title`` attribute

### Version 0.9.2 - Nov 8, 2013

**Fixes** - Fixes popup not repositioning itself when offstage.

### Version 0.9.1 - Nov 7, 2013

- **Popup** - Adds context option for popup (thanks jefmathiot)

### Version 0.7.1 - Oct 23, 2013

- **Popup** - Fixes issue with popup's using setting inline: true

### Version 0.7.0 - Oct 22, 2013

- **List** - Popups can now have a different target than itself
- **Popup** - Popup .toggle() now always hides/shows popup correctly
- **Popup** - Popup fixed a bug where "top right" placed popup might sometimes be too large
- **Popup** - Popup will not reshow a visible popup on hover
- **Popup** - Popup border now uses RGBA to look sexier on dark backgrounds
- **Popup** - Popup default duration is now 200ms (slighty slower)
- **Popup** - Popup metadata attribute arrowOffset is now offset for simplicities sake
- **Popup** - Popup no-longer receives class name 'visible' on show, this allows popups to be used on dropdowns and other elements with a visible state
- **Popup** - Popups are no longer inline by default

### Version 0.5.0 - Oct 10, 2013

- Fixes regression where popup was overriding variation class name on positioning
- Fixes an issue where popup that was set to inline: false was being removed prematurely
- Adds an example to popup where inline is set to false
- Added onCreate to popup module

### Version 0.3.6 - Oct 7, 2013

- Fixes popup position sometimes appearing off-stage on second apperance
- Fixes popup positions top left, top right, bottom left, bottom right being flipped

### Version 0.3.3 - Oct 2, 2013

- Fixes issue with popup display in some edge cases Issue #128

### Version 0.1.0 - Sep 25, 2013