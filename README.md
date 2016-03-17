# NodeBB: Custom Fields

Adds additional fields to the user's profile

![Version](https://img.shields.io/npm/v/nodebb-plugin-ns-custom-fields.svg)
![Dependencies](https://david-dm.org/NicolasSiver/nodebb-plugin-ns-custom-fields.svg)
![bitHound Score](https://www.bithound.io/github/NicolasSiver/nodebb-plugin-ns-custom-fields/badges/score.svg)
![Code Climate](https://img.shields.io/codeclimate/github/NicolasSiver/nodebb-plugin-ns-custom-fields.svg)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
 

- [Themes](#themes)
  - [Profile View](#profile-view)
- [TODO](#todo)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Themes

### Profile View

Plugin provides additional Array under `customFields` field in user data for Account/Profile page.

You can use predefined templates via `IMPORT` directive.

**NodeBB 0.9.1**, Persona, Flex Version (insert link on template in user's profile template wherever you like):

```html
<!-- IMPORT partials/account/custom_fields_flex.tpl -->
```

For old versions of NodeBB/Persona you could use legacy templates:

```html
<!-- IMPORT partials/account/custom_fields_panel.tpl -->
```

or

```html
<!-- IMPORT partials/account/custom_fields_two_columns.tpl -->
```

## TODO

- Edit Custom Field (key, name)
- Use Custom Fields in extended Tooltip for @mentions
- Use Sockets in ACP
- Add Sections to group custom fields
- Add Parser handler to create additional formatting (Ex: by having Steam Id, create full url to the profile)
- Add Tests (Mocha/Tape)
- Add utility method: clear unused fields
- Drag-n-drop for Custom Fields order
- Layout designer for Edit page
- Group custom fields, i.e. IM, Networks, etc.
