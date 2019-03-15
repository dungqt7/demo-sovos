# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 4.3.4
### Fixed
- `SovosPaginationFooterNext` fixed a bug that affected how it calculated the number of pages
- `SovosDrawerHeader` moved the action button to be the button on the right.

## 4.3.3
### Fixed
- `SovosPaginationFooterNext` fixed padding bug that caused pagination button labels to display incorrectly

## 4.3.2
### Fixed
- `SovosTable` was fixed so that the SelectColumn won't shrink and hide the checkboxes on resize

### Added
- `sovos-colors` has several new colors. Orange was renamed to buttonOrange. components that were using other colors had the colors changed to colors in the sovos-colors file.
- `SovosCheckbox` was added. It takes the place of the Material-UI checkboxes in the `SovosTable` and the `SovosFilterCheckboxList`

## 4.3.1
### Fixed
- `SovosGlobalLayout` fixed show/hide toggleNavigation button.

## 4.3.0
### Added
- `SovosAutoCompleteAsync` component. Allows auto complete suggestions to be loaded asynchronously.
- `SovosAutoCompleteNex` component. Updated version of auto complete that shares internal component with `SovosAutoCompleteAsync`. Old version of auto complete will be deprecated.

## 4.2.0
### Added
- Updated @material-ui/core to 3.8.3

## 4.1.2
### Fixed
- `SovosDialog` padding-bottom on DialogTitle changed to 20px

## 4.1.1
### Fixed
- `SovosTableCard` no longer has an empty toolbar if none is defined

## 4.1.0
### Added
- `SovosPaginationFooter` has a new component named Sovos-pagination-footer_next. The old pagination will be deprecated.

## 4.0.0

### Fixed
- `SovosNavigation` expands nested selected links

### Added

- `SovosTabs` renders icon to the left of tab label
- Added `displayHeader` to `SovosTable` to allow for toggling column headers
- `SovosIconMenu` component to replace deprecated Material-UI `IconMenu`
- `SovosAutoComplete` component to replace deprecated Material-UI `Autocomplete`
- `SovosStepper` component to provide theming for Material-UI `Stepper`
- `SovosTextField` component to provide theming for Material-UI `TextField`
- `SovosSelect` component to provide theming for Material-UI `Select`
- Added `TooltipProps` to `SovosIconButton` to allow the component to render a tooltip
- `SovosProvider` to provide theme and date utilities, replaces `SovosThemeProvider`
- `PrimaryButtonProps` and `SecondaryButtonProps` props to `SovosDrawer`. Both have the following shape:
 - `backgroundColor`
 - `children`
 - `color`
 - `disabled`
 - `onClick`
 - `style`
 - `className`
- `TreeListItemClasses` prop to `SovosTreeList` to allow passing of JSS classes to the list items
- `SovosTabContent` component to abstract rendering of tabs and tab content
- `TabsClasses` prop to `SovosSlidingPanelHeader` to allow passing of JSS classes to the rendered tabs
- `CloseDialogProps` to `SovosEditableSlidingPanel`. This has the following shape:
 - `DialogTitleProps`
  - `className`
  - `children`
 - `DialogContentProps`
  - `className`
  - `children`
 - `DialogActionProps`
  - `className`
 - `OKButtonProps`
  - `children`
  - `className`
 - `CancelButtonProps`
  - `children`
  - `className`
- `CancelButtonProps` to `SovosEditableSlidingPanel`. This has the following shape:
 - `children`
 - `className`
- `SaveButtonProps` to `SovosEditableSlidingPanel`. This has the following shape:
 - `children`
 - `className`
 - `onClick`
 - `disabled`
- `SovosCommentsList` and `SovosCommentForm` to replace `SovosTabCardComments`
- `IconButtonProps` prop to `SovosToolbarSearch`
- `width` prop to `SovosGlobalLayout`
- `ActionButtonProps` and `CancelButtonProps` to `SovosConfirmationDialog`. Both have the following shape:
 - `onClick`
 - `children`
- `ApplyButtonProps` and `CancelButtonProps` to `SovosColumnDrawer`. Both have the following shape:
 - `onClick`
- `SaveButtonProps` and `ClearButtonProps` to `SovosFilterDrawer`. Both have the following shape:
 - `onClick`
 - `children`
- `className` and `style` props to most components

### Updated
- `Material-UI` dependency to `3.1.2`
- `sovos-enterprise` theme to use new theme interface
- `color` prop accepts `primary`, `secondary`, and color value in `SovosFlatButton`
- `color` prop accepts `primary`, `secondary`, and color value in `SovosRaisedButton`
- `type` prop is assigned to the HTML button attribute in `SovosRaisedButton`
- use `children` to specify button text in `SovosFlatButton` and `SovosRaisedButton`
- changed class name of `SovosDrawer` from `sovos-drawer__portal` to `sovos-drawer`
- renamed `containerStyle` prop to `style` in `SovosHeroBanner`
- renamed `navigationProps` prop to `NavigationProps` in `SovosGlobalLayout`
- renamed `branding` prop to `BrandingProps`, `footerProps` to `FooterProps`
- `SovosTabs` shares new Material-UI `Tabs` interface and provides default styles
- `SovosPageLayout` and `SovosSlidingPanel` render tabs based on `SovosTabContent` children rather than `Tab` children
- renamed `closeSovosSnackbar` to `onClose`, `actionSovosSnackbar` to `onAction`, and `snackBarType` to `variant` in `SovosSnackbar`
- `SovosTabCard` expects children of type `SovosTabContent`
- `SovosFilterDateInput` expects data to be formatted date strings that match the `datePlaceholder`

### Removed
- all components in `sovos-redux-form-fields`
- `type`, `label` props from `SovosFlatButton`
- `action`, `label`, `labelColor` props from `SovosRaisedButton`
- `SovosThemeProvider`, replaced by `SovosProvider`
- `title`, `titleClassName`, `titleStyle`, `actions`, `actionsContainerClassName`, `actionsContainerStyle`, `autoScrollBodyContent` props from `SovosDialog`
- `onPrimaryButtonClick`, `onSecondaryButtonClick`, `disablePrimaryButton`, `disableSecondaryButton`, `primaryButtonLabel`, `secondaryButtonLabel`, `primaryButtonStyle`, `secondaryButtonStyle` from `SovosDrawer`. Replaced by `PrimaryButtonProps` and `SecondaryButtonProps`
- `maxWidth` prop from `SovosPageLayout`
- `itemContainerStyle`, `itemStyle`, `itemHoverStyle`, `toggleIconStyle`, `toggleIconHoverStyle` props from `SovosTreeList`
- Material-UI `Tab` component export from `SovosTabs`
- `tabsBackgroundColor`, `tabsTextColor`, `contentBackgroundColor`, `tabsLeftMargin`, `tabTemplate` from `SovosTabs`
- `headerStyle`, `titleStyle`, `tabsStyle` from `SovosSlidingPanelHeader`
- `dialogActionLabel`, `dialogCancelLabel`, `dialogTitleClassName`, `dialogContentClassName`, `dialogActionsClassName`, `dialogText`, `dialogTitle`, `cancelLabel`, `onSave`, `saveLabel`, `saveDisabled` props from `SovosEditableSlidingPanel`
- `SovosTabCardTab` component
- `SovosTabCardAttachments` component
- `SovosTabCardComments` component
- `SovosTabCardHistory` component
- `titleStyle`, `style`, `activeStyle`, `inputStyle`, `iconStyle`, `active` props from `SovosToolbarSearch`
- `style` and `scrollStyle` props from `SovosTable`, use JSS classes instead
- `SovosSelectableAndClickableTableRow` component
- All Material-UI components and utilities from the full bundle. The bundle only contains Sovos specific components and themes.
- Removed `style` prop from `SovosGlobalLayout`
- `actionLabel`, `onAction`, `cancelLabel`, `onCancel` props from `SovosConfirmationDialog`. Replaced with `ActionButtonProps` and `CancelButtonProps`
- `onApply` and `onClose` props from `SovosColumnDrawer`. Replaced with `ApplyButtonProps` and `CancelButtonProps`
- `primaryButtonLabel`, `onSave`, `secondaryButtonLabel`, `onSaveAll` props from `SovosFilterDrawer`. Replaced with `SaveButtonProps` and `ClearButtonProps`

## 3.4.3

### Updated
- `SovosTabCard` Made attachment optional.Hide attach button if handleAttachmentClicked event handler does not exist.

## 3.4.2

### Updated
- `SovosMonthSelector` Fixed bug when changing years using the arrows.

## 3.4.1

### Updated
- `SovosToolbarMoreMenu` Added custom props support for IconMenu. useLayerForClickAway prop defaults to true.

## 3.4.0

### Updated
- `React` and `React-DOM` dependencies have been update to 16.5.2 to fix a [potential XSS vulnerability](https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html)
- update `enzyme` to 3.6.0
- update `enzyme-adapter-react-16` to 1.5.0

## 3.3.1

### Updated
- `SovosTable - ActionCell` Added a check to see if any action data was sent for the given row. If there is no data then an empty div will be rendered. This allows a table to have actions on a row by row basis given the incoming data.


## 3.3.0

### Added
- `TextCell` For greater customization of styles in SovosTable.
- `CurrencyCell` for greater customization of styles in SovosTable with additional formatCurrency property for custom processing of value (default behavior rounds to two decimal places)
- `SovosTable` implemented column type 'no-wrap'.

### Updated
- `SovosTable` documentation to demonstrate text an currency cell capabilites, and to use 'no-wrap' instead of 'currency' (previous implementations of type 'currency' and those without customized cells will still function as before)

## 3.2.2

### Updated
- `SovosToolbarMoreMenu` Moved the anchor to the bottom of the icon element so the menu doesn't cover the button
- `node-sass` to 4.9.3

## 3.2.1

### Updated
- `SovosFilterDrawer` Removed fixed "Status" header.

## 3.2.0

### Added
- `SovosTable` Added scrolling layer for dynamic behavior on small screen sizes and tables with many columns.
- `SovosTable` Added scrollStyle prop to override default scrolling behavior.
- `SovosTable` Now takes a style prop and applies it to the container element.
- `SovosTableCard` No changes to component itself, but added example to documentation demonstrating scrolling behavior.

### Updated
- `SovosTable` Default columns now have a min width of 80px and a max of 150px. Greedy columns now have a min of 150px

## 3.1.0

### Added
- `onItemCollapsed` and `onItemExpanded` event callbacks to `SovosTreeList`

## 3.0.9

### Fixed
- Nested items in `SovosTreeList` are now offset 20px from their parent
- Width of item content in `SovosTreeList` is set to allow for CSS truncation of text

## 3.0.8

### Added
- `SovosFilterDrawer` Added props for title and button labels

## 3.0.7

### Added
- `SovosDrawer` Added ClassNames to the container and action buttonStyle
- `SovosFilterDrawer` Added ClassNames to the filter sections and fields
- `SovosMonthSelector` Added ClassNames to the popover and menu items

## 3.0.6

### Fixed
- `SovosFilterDrawer` removed the props propagation from the section components to prevent conflicts with material-ui components.

## 3.0.5

### Fixed
- `SovosTable` rows highlight on hover only when they are clickable. This matches the design specifications.

## 3.0.4

### Fixed
- `SovosSlidingPanel` Fix, reduce numberOfSlides when the order is 0.

## 3.0.3

### Updated
- `SovosSlidingPanelHeader` Now, the `title` prop can be a node.

## 3.0.2

### Added
- `SovosSlidingPanel` a baseWidth prop to override the default panel width
- `SovosSlidingPanel` support for muiTheme.slidingPanel.baseWidth

## 3.0.1

### Fixed
- `SovosSlidingPanel` Allow users to override some of the default content container styles.
- `SovosDrawer` Set `flex-shrink: 0` on the header to prevent it from shrinking past it's content.

## 3.0.0

### Fixed
- no longer generate warnings when adding new values to `SovosFilterDateInput`

### Added
- `listItems` prop to `SovosFilterCheckboxList` to keep selected values separate from static checkbox items
- clear selected values when sorting rows in `SovosTable`
- `isDirty` property to `SovosEditableSlidingPanel`

### Updated
- `React` dependency to `16.4.1`
- Convert `data` into a [fully controlled](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component) value to prevent duplicate state management in `SovosFilterSection`
- `SovosSlidingPanel` behavior matches the following specifications
 - User can only interact with top modal.
 - Clicking the X button or clicking off the sliding panel will close the top layer and go back one.
 - Clicking the Save button will invoke a save callback and close the panel
 - Clicking the Cancel button will invoke a dirty check callback and display a confirmation dialog if the panel contents need to be saved, otherwise it will close the panel
 - open behavior: Sliding panel always opens by sliding in from the right
 - close behavior: Sliding panel always closes by sliding left off the screen
 - width of the panel is 50px from the right edge of the navigation bar or 50px from the left edge of the window if the navigation bar is hidden

### Removed
- `componentWillReceiveProps` method from `ContextSwitcher`
- `componentWillReceiveProps` method from `SovosTable`
- `componentWillReceiveProps` method from `SovosToolbarSearch`
- `value` property from `SovosToolbarSearch`, the initial value can be set using the `defaultValue` prop. If the `defaultValue` needs to be reset, render the component with a `key` prop equal to `defaultValue`. This allows the value to have a single source of truth and follow the [fully uncontrolled pattern](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)
- `componentWillReceiveProps` method from `SovosSlidingPanel`

## 2.6.8 - 2018-7-16

### Fixed
- display context switching menu when there is a single context with nested items in `SovosNavigation`

## 2.6.7 - 2018-7-16

### Fixed
- set width of `SovosSlidingPanel` based on window width minus navigation width
- correct add click handler to bread crumb menu items in `SovosGlobalLayout`

## 2.6.6 - 2018-7-10

### Fixed
- removed fixed positioning from an element in `SovosPaginationFooter` to prevent extra whitespace in IE11, [S1UI-48](https://jira.corp.sovos.local/browse/S1UI-48)
- use `justify-content` css value that IE11 can understand so that the avatar icon is centered in the navigation, [S1UI-49](https://jira.corp.sovos.local/browse/S1UI-49)
- force long user names to wrap in `SovosNavigation` footer menu, [S1UI-43](https://jira.corp.sovos.local/browse/S1UI-43)
- show tooltips in `SovosToolbarBulkActions`, [S1UI-7](https://jira.corp.sovos.local/browse/S1UI-7)

## 2.6.5 - 2018-7-4

### Updated
- `SovosDrawer` now you can disable primary and secondary button one by one

## 2.6.4 - 2018-7-2

### Fixed
- `SovosTable` only displays a pointer curor in the header when the header columns are clickable.

## 2.6.3 - 2018-6-29

### Fixed
- `SovosDatePicker` changed the Timezone translation logic to use a manual hours shift rather than utcOffset. moment.ProtoType.utcOffset() uses an internal offset value that defaults to the browser's local value and cannot be changed.

## 2.6.2 - 2018-6-27

### Fixed
- fully specify `flex` css properties to allow header elements to correctly wrap in `SovosDrawer`

## 2.6.1 - 2018-6-26

### Updated
- `SovosColumnDrawer` now does not allow you to hide every column in a table. The `SovosIconButton` is removed when there is only a single visible column.

## 2.6.0 - 2018-6-26

### Added
- `timezoneName` property to `SovosDatePicker`. `SovosDatePicker` will adjust selected dates from the browser timezone to the specified timezone.

## 2.5.0 - 2018-6-26

### Added
- `SovosColumnDrawer` component. This is the standard drawer used for showing and hiding `SovosTable` columns.

## 2.4.0 - 2018-6-22

### Added
- `isExpandOnly` property to `SovosTreeList` items to allow an item in the list to be expanded by clicking the text in addition to the toggle icon. These items cannot be selected from the list

### Fixed
- do not show tooltip for items that have not be truncated in `SovosTreeListText`

## 2.3.7 - 2018-6-20

### Fixed
- update state when data prop changes in `SovosFilterSection` to allow filter to be cleared

## 2.3.6 - 2018-6-20

### Fixed
- `SovosSlidingPanel` merges content style property with default values
- `SovosSlidingPanel` add a height to content container to allow for vertical scrolling

## 2.3.5 - 2018-6-19

### Fixed
- `DataCell` by default, the cell has width of 100%, this is configurable from Theme of Sovos

## 2.3.4 - 2018-6-19

### Fixed
- `SovosDrawer` buttons wrap for narrow drawers and a displayed on the same line for wide drawers

## 2.3.3 - 2018-6-14

### Added
- `saveDisabled` property to `SovosEditableSlidingPanel`. This allows you to toggle if the save button is disabled. The property is not required and by default it is set to false.

## 2.3.2 - 2018-6-14

### Fixed
- `SovosTable` has correct width and padding in `SovosTableCard`

## 2.3.1 - 2018-6-12

### Updated
- `SovosPageLayout` is now able to render tabs in the header and still render additional components. This facilitates the use of page level sliders in conjunction with tabs.


## 2.3.0 - 2018-6-8

### Added
- `onTabChanged` property to `SovosPageLayout`. The function is called with the selected tab's `value` prop when a tab is changed

### Updated
- `maxWidth` is now an optional property of `SovosPageLayout`, the default is `window.innerWidth`
- `SovosPageLayout` calls the selected tab's `onActive` property when a tab is changed

## 2.2.0 - 2018-6-7

### Added
- `maxLength` property to `SovosTreeListText`

## 2.1.1 - 2018-6-7

### Updated
- export `SovosToolbarGroup` and `SovosToolbarMoreMenu` in `sovos-toolbar\index`
- set color of active step in theme for `Stepper` components

## 2.1.0 - 2018-6-6

### Added
- `SovosToolbarMoreMenu`, a generic icon menu for use in toolbars to display a menu of more actions
- `titleStyle`, `inputStyle`, `activeStyle`, `style`, `iconStyle`, `color` props to `SovosToolbarSearch`

## 2.0.0 - 2018-5-31

### Changed
- `SovosGlobalLayout` no longer renders the title bar or hero banner. It is solely responsible for responsive navigation
- Renamed `SovosContextSwitcher` component to `ContextSwitcher`. Implement dropdown menu using `SovosTreeList`
- `SovosSlidingPanel` supports tabs with `Tab` child components
- `SovosSlidingPanel` no longer renders the header or button by default

### Added
- `SovosPageLayout` component to render page specific title bar and hero banner in a consistent manner
- `SovosTreeList` component to render an expandable/collapsible list of generic items. The list can be styled using themes or by passing custom styles.
- `SovosReadOnlySlidingPanel` component to render a sliding panel with a header containing a title, additional buttons, and a close icon
- `SovosEditableSlidingPanel` component to render a sliding panel with a header containing a title, additional buttons, and save and cancel buttons; the cancel button will
display a confirmation dialog before closing the panel
- `SovosSlidingPanelHeader` component to allow full customization of the sliding panel header

### Removed
- `titleBarTabs`, `titleBarActions`, `titleElements`, and `heroBanner` props from `SovosGlobalLayout`
- `actionButtons`, `additionalButtons`, `dialogText`, `dialogTitle`, `dialogActionLabel`, `dialogCancelLabel`, `dialogTitleClassName`, `dialogContentClassName`, `dialogActionsClassName`, `showHeaderBar`, `showCloseButton`, `showDialogOnClose`, `title`, `titleStyle`, properties from `SovosSlidingPanel`
- `SlidingPanelWrapper` component
- `SlidingPanelDefaultTemplate` component
- `SlidingPanelTabsTemplate` component

## 1.6.3 - 2018-5-30

### Fixed
- `SovosMonthSelector` debounces prev/next button clicks to prevent expensive `onValueChanged` calls when rapidly clicking through months [S1UI-40](https://jira.corp.sovos.local/browse/S1UI-40)
- clean up styles in `SovosFilterDrawer` and `SovosDrawer` [S1UI-50](https://jira.corp.sovos.local/browse/S1UI-50)

## 1.6.2 - 2018-5-30

### Fixed
- `SovosTable` calls onRowSelection when clearing selected rows because of data or column updates.

## 1.6.1 - 2018-5-29

### Fixed
- `SovosRaisedButton` now has a default action of 'button'

## 1.6.0 - 2018-5-23

### Added
- `onColumnSort`, `sortedColumnId` properties to `SovosTable`. The `onColumnSort` function is called when column headers are clicked, `sortedColumnId` specifies which column to indicate as sorted.

## 1.5.1 - 2018-5-18

### Fixed
- `SovosTable` now clears selected rows with data or columns are changed

## 1.5.0 - 2018-5-16

### Fixed
- `SovosDrawer` bad interaction with SovosSlidingPanel
- `Jest` Added a rule to avoid running tests from dist folder

### Added
- `SovosDrawer` size property with 3 options for the SovosDrawer: small, medium, large. The small option is picked by default if none is passed
- `SovosDrawer` buttons styles props

### Changed
- `SovosDrawer` removed X button from the drawer, moved buttons on the same label as title when size is medium or large

## 1.4.0 - 2018-5-15

### Fixed
- Long names are truncated in `SovosContextSwitcher`
- `context.type` is now a truly optional property for `SovosContextSwitcher`, previously an error was thrown if it wasn't specified.

### Added
- `SovosContextSwitcher` displays a collapsible tree  view of contexts and their children. Expanded state of the tree is maintained.
- `SovosContextSwitcher` row hover changes the background color

## 1.3.0 - 2018-5-15

### Fixed
- SovosConfirmationDialog: Now when you pass childrens, the component can render correctly.
- SovosIconButton: Enables disabled field.

### Added
- SovosSlidingPanel: The component now uses the sovos confirmation dialog.

## 1.2.0 - 2018-5-10

### Added
- SovosTabs component:  Renders a material-ui tabs component with 100px tabs and a sliding bar that matches the text color of the tab labels.
- SlidingPanelWrapper component: Contains the layout rendering behavior from the original SovosSlidingPanel. It renders the children inside of the panel but otherwise does not format the content.
- SlidingPanelDefaultTemplate component: Contains the layout of the original SovosSlidingPanel
- SlidingPanelTabsTemplate component: A flex based Sliding Panel template similar to the original SovosSlidingPanel but allows for a variable header height and takes tabs as children rather than as an array.

### Changed
- SovosSlidingPanel: Refactored the layout into a wrapper (SlidingPanelWrapper) and a template (SlidingPanelDefaultTemplate) and updated the default export to use the composed version of these new components.

## 1.1.8 - 2018-5-8

### Fixed
- Month selector menu no longer flashes in upper left corner before rendering in correct position [S1UI-23](https://jira.corp.sovos.local/browse/S1UI-23)
- Correctly bind row click events in `SovosTable`

## 1.1.7

### Fixed
- Position first sliding panel using `fixed` positioning, nested panels are positioned absolutely. Fixes an issue where panels are rendered off screen when the parent page is scrolled.

## 1.1.6

### Added
- SovosRaisedButton: Add action prop. This allows apply a type to button, for example 'submit', by default the prop is empty.

### Fixed
- SovosToolbarTitle: Now children prop can be a node or string.

## 1.1.5

### Fixed
- Allow babel to correctly transpile individual component files during builds

## 1.1.4

### Fixed
- Corrected bad import in `SovosTabCardHistory`

## 1.1.3

### Changed
- Converted table sub-components to extend `React.PureComponent` in order to improve render times for large tables. The interface of the table remains the same but it is assumed that `columns` and `data` properties are immutable.
- Use Jest for a test runner rather than Karma
- Remove unused Babel presets and plugins

## 1.1.2

### Fixed
- SovosSlidingPanel: Fixed issue where nested sliding panels where using all space instead of using the parent as reference

## 1.1.1

### Added
- SovosToolbarSearch: Added value prop, by default is empty.

## 1.1.0

### Added
- Sovos Buttons Group component: A group of buttons that will be next to each other with 10px of spacing between them except the first and the last one that won't have margin on the edges. It also exposes an align attribute to show the buttons on the left, center or right section of its parent.
- Default implementation of a comments card for use in `SovosTabCard` [S1UI-34](https://jira.corp.sovos.local/browse/S1UI-34)
- Includes a simple form for adding a new comment with an application specified callback

### Changed
- Size of the buttons in general are 30px.
- Space of the Sliding panel buttons are 10px.

### Fixed
- Fixed a problem of sliding panel additional buttons not showing changes (like disabled state).
- Allow scrolling of drawers so that long content will be displayed [S1UI-37](https://jira.corp.sovos.local/browse/S1UI-37)
- Use Enterprise theme as the base theme/default for `SovoSThemeProvider` to ensure all required theme attributes are available [S1UI-2](https://jira.corp.sovos.local/browse/S1UI-2)

## 1.0.0
### Added
- `titleStyle` in `SovosSlidingPanel` to allow styling the panel title text

### Changed
- Column first layout for tables
 - Better support for greedy columns
 - Better responsiveness, columns no longer jump on size changes
- Action buttons are no longer always rendered as primary buttons in `SovosSlidingPanel`
- Fixed conflicts with box sizing in the footer of `SovosSlidingPanel`
- Add ES2015 polyfill to StyleGuide in order to support IE 11

## 1.0.0-rc13 - 2018-4-10
### Changed
- Fixed error with `SovosNavigation` height and scrolling of app content in `SovosGlobalLayout`
- Renamed `footerElements` to `footerProps` in `SovosGlobalLayout` and pass property correctly to `SovosNavigation`

## 1.0.0-rc12 - 2018-4-9
### Changed
- Fixed sizing of content column in `SovosGlobalLayout`
- Updated `SovosAvatar` Readme to reflect new name

## 1.0.0-rc11 - 2018-4-5
### Changed
- StyleGuide updates
 - Group related components
 - Added `displayName` property to several components
- `SovosAuthorAvatar` renamed to `SovosAvatar`
- Use `display:flex` to create columns in `SovosGlobalLayout`
- Include `react-transition-group` in the library [S1UI-9](https://jira.corp.sovos.local/browse/S1UI-9)
- Hide year if not present in `ContextSwitcher` [S1UI-26](https://jira.corp.sovos.local/browse/S1UI-26)
- Add configurable buttons and tabs to `SovosSlidingPanel` [S1UI-29](https://jira.corp.sovos.local/browse/S1UI-26)
- Add panel to store when initially rendering `SovosSlidingPanel` in open state [S1UI-6](https://jira.corp.sovos.local/browse/S1UI-6)
- Remove unused `ref` in `SovosMonthSelector` [S1UI-8](https://jira.corp.sovos.local/browse/S1UI-8)
- Update "Clear" button text in `SovosFilterDrawer` [S1UI-30](https://jira.corp.sovos.local/browse/S1UI-30)
- Update `PrimaryNavy` color [S1UI-33](https://jira.corp.sovos.local/browse/S1UI-33)
- Added multiple sizes and custom colors to `SovosAvatar` [S1UI-35](https://jira.corp.sovos.local/browse/S1UI-35)
- Lighten drop shadow, change selected color, and center labels in `SovosToolbar` [S1UI-32](https://jira.corp.sovos.local/browse/S1UI-32)
- Add row hover highlighting and row click events in `SovosTable` [S1UI-13](https://jira.corp.sovos.local/browse/S1UI-13)
- Add avatar and actions to footer in `SovosNavigation` [S1UI-25](https://jira.corp.sovos.local/browse/S1UI-25)

## [1.0.0-rc1] - 2018-2-1
### Added
- Initial release of the rebranded shared component library. See the old [fusionui-shared-components-react](https://bitbucket.dev.sovos.local/projects/PTFM/repos/fusionui-shared-components-react/browse) for an in depth history.

- Rename `AuthorAvatar` to `SovosAuthorAvatar`
- Renamed `PaginationFooter` to `SovosPaginationFooter`


[1.0.0-rc1]: https://bitbucket.dev.sovos.local/projects/PTFM/repos/s1-ui/browse?at=refs%2Ftags%2F1.0.0-rc1
