# telegram-init-data-copier-npm-package
Util to copy/paste telegram init data and user data

## Usage
`copyInitDataToClipboard` - Copies telegram init data to clipboard

`copyUserDataToClipboard` - Copies telegram user data to clipboard

`setInitDataFromClipboard` - Puts data from clipboard to localStorage `local.initData`

`setUserDataFromClipboard` - Puts data from clipboard to localStorage `local.initDataUnsafeUser`

You can access copied data by calling `localStorage.getItem('local.initData')` or `localStorage.getItem('local.initDataUserUnsafe')`

**example:**
```javascript
await fetch(`${Config.API_URL}/public/auth/telegram`, {
      method: 'PUT',
      headers: {
        'X-Init-Data':
          WebApp.initData || localStorage.getItem('local.initData') || '',
      },
      // If opened from telegram will use WebApp.initData else will use data from localStorage
    });
```

