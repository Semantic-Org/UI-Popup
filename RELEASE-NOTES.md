### Version 2.1.7 - Dec 19, 2015

- **Popup** - Adds `onUnplaceable` callback when element cannot be placed in visible screen [#3388](https://github.com/Semantic-Org/Semantic-UI/issues/3388)
- **Popup** - Fixed `is visible`, `is animating`, and `is fluid` to always return `true/false` and not the DOM element. [#2781](https://github.com/Semantic-Org/Semantic-UI/issues/2781)
- **Popup** - Fixed issue with `onEnable` callback being defined with name `onEnabled` and `onDisable` with `onDisabled` in default settings, causing an error. To preserve backwards compatibility, the mispelled callback name has been left, but the bug has been fixed. [#3148](https://github.com/Semantic-Org/Semantic-UI/issues/3148)

### Version 2.1.5 - Nov 1, 2015

- **Popup** Added three new variables for `arrow` background color based on position, top, center or bottom. This makes it easier to use gradient backgrounds with popups and still match arrow colors.
- **Popup** - Added behaviors `get popup` and `change content` to more easily determine popup from activating element and change text
- **Popup** - Fixes positioning issue when `movePopup: false` [#3213](https://github.com/Semantic-Org/Semantic-UI/issues/3213) **Thanks @parisholley**
- **Popup** - Popup now works with `svg` elements [#3043](https://github.com/Semantic-Org/Semantic-UI/issues/3043)

#### Features

- **Popup** - Popup will now look for inline popup as any next adjacent sibling [#2772 **Thanks @malacalypse**](https://github.com/Semantic-Org/Semantic-UI/issues/se**)

#### Bugs

- **Popup** - Fixes issue where variation would not be added to a pre-existing popup even if specified in javascript [#26011](https://github.com/Semantic-Org/Semantic-UI/issues/6011)
- **Popup** - Fixed `onRemove` firing even when popup is not removed

### Version 2.0.7 - July 23, 2015

- **Popup** - Fixed issue where popup would not open on tablets with both touchscreen and mouse on mouseenter. [#2715](https://github.com/Semantic-Org/Semantic-UI/issues/2715)
- **Popup** - Fixed terribly typo where popup `onShow` was mistakenly being called instead of `onHide` when hiding popup
- **Popup** - Popup on `touchstart` now occurs immediately without waiting for `delay.show`

### Version 2.0.4 - July 17, 2015

- **Popup** - `fluid` popup with `setFluidWidth: true` (default value), will now use `parent` width and not `offsetContext` width [#2526](https://github.com/Semantic-Org/Semantic-UI/issues/2526)
- **Popup** - Fixed issues where rounding could cause elements that are against edge of page from not appearing. Add new `jitter` setting for allowing popups to escape page boundaries by a small margin [#2526](https://github.com/Semantic-Org/Semantic-UI/issues/2526)
- **Popup** - `wide` and `very wide` popup will now limit themselves to normal popup widths on mobile so that they still appear on screen.

### Version 2.0.3 - July 8, 2015

- **Popup** - Popup `preserve` setting (which preserves popup in DOM to avoid regenerating on each show/hide) was set to `true` by default causing generated popups to remain in DOM. [#1369](https://github.com/Semantic-Org/Semantic-UI/issues/1369)

### Version 2.0.0 - June 30, 2015

- **Popup** - Popups are no longer exclusive by default. Opening a popup will not necessarily close other visible popups. You can change this behavior by using the setting `exclusive: true`. Additionally the default theme now uses `1rem` size for standard popups.
- **Popup** - Popup has been rewritten to drastically improve performance, especially when testing multiple positions.
- **Transition** - Fallback javascript animations have been removed from UI components like dropdown and popup to increase performance. This removes need for expensive pseudo selectors like `:visible`, `:animated` and `:hidden` and reduces filesize.
- **Popup** - Popup now defines a `transform-origin` so animations will be affected by the direction the element is placed
- **Popup** - `onShow` and `onHide` callback can now cancel popup from showing or hiding by returning false
- **Popup** - Added more size variations for popup `mini`, `tiny`
- **Popup** - Popup now correctly adjusts if `data` attributes change
- **Popup** - Fixes issue with `min-width` in firefox exceeding `max-width` causing element to not wrap correctly
- **Popup** - Popup will now produce an error message and not mistakenly appear in the top left corner of page, if called with a `popup` or `target` that does not exist.
- **Popup** - Popup will no longer appear incorrectly if the targeted element is not visible on page
- **Popup** - Fixed bug which could cause pre-existing inline popup to be removed from DOM after hiding
- **Popup** - Fixes popup offstage position calculations with pages including horizontal scrollbars
- **Popup** - Added `addTouchEvents` to specify whether touch events should be added to trigger popup on mobile
- **Popup** - Popups now default to `exclusive: false` and will not hide other popups when opening
- **Popup** - Popup no longer produces a console error when a position cannot be found on the page.

### Version 1.12.1 - April 26, 2015

- **Popup** - Removes `min-width: moz-max-content` from popups, which may cause display differences between chrome and FF

### Version 1.12.0 - April 13, 2015

- **Popup** - Popup no longer produces a console error when it cannot find an adequate position in the browser viewport.

### Version 1.11.0 - March 3, 2015

- **Popup** - Added `exclusive` parameter to automatically close other popups on open
- **Popup** - Fix issue with `popup` not re-opening until another element gains focus on a mobile touchscreen
- **Popup** - Popup will now fire `onHidden` when an element is hidden by opening a different popup
- **Popup** - Fix popup not namespacing `window` events and unbinding on `destroy` **Thanks @revov**

### UI Changes

- **Transition** - Transitions with direction now use word order dependency to prevent conflict with component directions, for example `bottom left popup slide down in transition

### Version 1.8.1 - January 26, 2015

- **Popup** - Popup `hide all` will now use transition set in `settings.transition` when closing other popups

### Version 1.8.0 - January 23, 2015

- **Popup** - Popup will now only use a max of one element when `settings.popup` mistakingly passes multiple DOM elements
- **Popup** - Popups will now by default appear over all UI content, even dimmers.

### Version 1.7.0 - January 14, 2015

- **Popup** - Popup now uses its own custom method for determining `offsetParent` meaning 3D contexts (like inside an animation) no longer should break positioning
- **Popup** - Popup now uses `preserve: false` by default, this is slightly less performant but will reduce page clutter caused by leaving generated elements in the DOM
- **Popup** - `wide` and `very wide` popup will now appear when screen size is below their `max-width`
- **Popup** - Popup no longer blurs element on popup hide

### Version 1.6.0 - January 05, 2015

- **Popup** - Fix issue with `ui popup` receiving error ``$offsetParent is undefined`` when using a pre-defined popup
- **Popup** - Fix issue with ``ui popup` not appearing with ``ui flowing popup`` due to newly added ``min-width: max-content``

### Version 1.5.0 - December 30, 2014

- **Popup** - Popup now uses the new property ``min-width: max-content`` to allow for better display with ``inline`` in some circumstances where it escapes parent element.
- **Popup** - Popup destroy will now also destroy any unfired timers (show/hide delay)
- **Popup** - Popup now moves to the same offset context to avoid positioning errors when using a named pre-existing popup.

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