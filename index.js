import WebApp from '@twa-dev/sdk';

export async function copyInitDataToClipboard() {
  if (WebApp.initData) {
    try {
      await navigator.clipboard.writeText(WebApp.initData);
    } catch (e) {
      console.error(e);
    }
  }
}
export async function setInitDataFromClipboard() {
  try {
    const data = await navigator.clipboard.readText();
    localStorage.setItem('local.initData', data);
  } catch (e) {
    console.error(e);
  }
}

export async function copyUserDataToClipboard() {
  if (WebApp.initDataUnsafe) {
    try {
      await navigator.clipboard.writeText(
        JSON.stringify(WebApp.initDataUnsafe.user),
      );
    } catch (e) {
      console.error(e);
    }
  }
}
export async function setUserDataFromClipboard() {
  try {
    const data = await navigator.clipboard.readText();
    localStorage.setItem('local.initDataUnsafeUser', data);
  } catch (e) {
    console.error(e);
  }
}
